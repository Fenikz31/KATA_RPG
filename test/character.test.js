import expect from 'expect'
import { characters } from '../src/characters'
describe('Characters', () => {

    describe('Create a character Object', () => {
        const defaultCharacter = {
            alive: true,
            agility: 10,
            dexterity: 5,
            intelligence: 5,
            health: 10,
            stamina: 10,
        }

        it('create', () => {
            const result = characters.create()
            expect(result).toMatchObject(defaultCharacter)
        }
        )
    })
})