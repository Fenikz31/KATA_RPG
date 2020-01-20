export const Characters = {

    create(s, p) {
        return {
            alive: true,
            agility: 5,
            dexterity: 5,
            intelligence: 5,
            health: 10,
            stamina: 10,
        }
    },

    attack(s, p) {
        const { damage, target } = p,
            { health } = s[target],
            offense = (attacker.dexterity) * 3,
            defense = (target.agility) * 2

        damage = offense - defense
        value = health - damage

        return {
            ...s,
            [target]: {
                ...s[target],
                alive: value > 0,
                health: value > 0 ? value : 0
            }
        }
    }
}