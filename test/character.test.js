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

    /* 2. Characters can Deal Damage to Characters.
    - Damage is subtracted from Health
    - When damage received exceeds current Health,
    Health becomes 0 and the character dies */

    describe('Character deals damage to another', () => {
        const attackerCharacter = {
            alive: true,
            agility: 10,
            dexterity: 5,
            intelligence: 5,
            health: 10,
            stamina: 10,
        }
        const targetCharacter = {
            alive: true,
            agility: 10,
            dexterity: 5,
            intelligence: 5,
            health: 10,
            stamina: 10,
        }

        it('attack', () => {
            const result = attackerCharacter.attack(targetCharacter)
            expect(result).toHaveProperty('health', )
        }
        )
    })
})