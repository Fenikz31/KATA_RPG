import Fetch from 'cross-fetch'
import QueryString from 'querystring'
import SockJS from 'sockjs-client'

const Is_Development = WEBPACK_MODE === 'development'

const DefautFetchHandler = () => async (response) => {
  const { status } = response

  if (status !== 200) {
    throw new Error( status )
  }

  const result = await response.json()
  return result
}

export function FetchFailure (type) {
  return (reason) => ({ type, reason })
}

export function FetchInterface (base_url, handle = DefautFetchHandler) {
  return function (resource = null) {
    return function (success = null, failure = null) {
      let body = {},
          headers = {},
          params = {},
          path = []

      function query (method) {
        const keys = Object.keys( params )

        const args = keys.length > 0 ? '?' + keys.map( (key) => {
          return `${key}=${params[key]}`
        }).join( '&' ) : ''

        const options = {
          method,
          headers: {
            'content-type': 'application/json',
            ...headers
          }
        }

        if (Object.keys( body ).length > 0) {
          switch (headers['content-type']) {
            case 'application/x-www-form-urlencoded':
              options.body = QueryString.stringify( body )
              options.headers['content-length'] = options.body.lenght
              break

            default:
              options.body = JSON.stringify( body )
          } 
        }

        path = [
          resource,
          ...path
        ].filter( (v) => v !== null ).join( '/' )

        const url = `${base_url}/${path}${args}`

        if (Is_Development) {
          console.log( url )
          console.log(JSON.stringify( options ))
        }

        return (dispatch) => {
          const reject = (error) => {
            if (failure !== null) {
              if (typeof failure === 'function') {
                dispatch(failure( error.message ))
              }
            }
          }

          const resolve = (result) => {
            if (success !== null) {
              if (typeof success === 'function') {
                dispatch(success( result ))
              }
            }
          }

          return Fetch( url, options ).then( (response) => {
            const { status, statusText } = response

            if (Is_Development) {
              console.log( status, statusText )
            }

            return response
          }).then(
            handle( method )
          ).then( resolve ).catch( reject )
        }
      }

      return {
        addPath (content) {
          path = [ ...path, content ]
        },

        delete () {
          return query( 'DELETE' )
        },

        get () {
          return query( 'GET' )
        },

        patch () {
          return query( 'PATCH' )
        },

        post () {
          return query( 'POST' )
        },

        put () {
          return query( 'PUT' )
        },

        setBody (content) {
          body = { ...body, ...content }
        },

        setHeaders (content) {
          headers = { ...headers, ...content }
        },
        
        setParams (content) {
          params = { ...params, ...content }
        }
      }
    }
  }
}

export const SocketInterface = (store) => {
  let socket = null,
      listeners = {}

  return {
    close () {
      return socket.close()
    },

    connect (subscriber) {
      const callbacks = subscriber( store, this )

      Object.keys( callbacks ).forEach( (name) => {
        listeners[name] = callbacks[name]
      })

      listeners.socket_pong = ping.start
    },

    fire (event, ...args) {
      if (listeners[event] !== undefined)
        listeners[event].apply( null, args )
      else if (Development)
        console.log( `Unhandled ${event}`, args )
    },

    open (url) {
      socket = new SockJS( url )

      socket.onclose = (e) => {
        const { code } = e

        if (Development)
          console.log( `Closed (${code})` )
      }

      socket.onmessage = (e) => {
        const [ event, ...args ] = JSON.parse( e.data )
        this.fire( event, ...args.slice( 0, -1 ) )
      }

      socket.onopen = () => {
        if (listeners.opened !== undefined)
          listeners.opened()
      }
    },

    send (...args) {
      socket.send(JSON.stringify( args ))
    }
  }
}
