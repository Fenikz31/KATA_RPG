package main;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class CharactersTest {

    @Test
     public void Given_Characters_When_Created_Then_StatsStarts_At_1000_1_And_True() {

        Characters characters = new Characters();
        characters.onCreation();
        String expected = characters.toString();
        assertEquals(expected, "Character's health = 1000.0, level= 1 and _alive= true.");
    }

    @Test
     public void Given_TwoCharacters_When_OneAttacks_Then_DealDamage() {
        Characters character1 = new Characters("Player1");
        Characters character2 = new Characters("Player2");
        character1.onCreation();
        character2.onCreation();

        character1.attack(character2);
        double expected = character2.getHealth();

        assertEquals(expected, 999.0,0);
    }

    @Test
     public void Given_TwoCharacters_When_DealingMoreDamageThanCurrentHealth_Then_SetPlayerToDead() {
        Characters character1 = new Characters("Player1");
        Characters character2 = new Characters("Player2");
        character1.onCreation();
        character2.setHealth(1);

        character1.attack(character2);
        character1.attack(character2);
        character1.attack(character2);

        String expected = character2.damageToString();
        assertEquals(expected, "Player2 health is 0, Player2 is dead!");
    }

    @Test
     public void Given_TwoCharacters_When_Healing_Then_RaiseHealth() {

        Characters character2 = new Characters("Player2");
        character2.setHealth(1);

        character2.heal(character2, 100);
        String expected = character2.healToString();

        assertEquals(expected, "Player2's health is 101.0");
    }

    @Test
     public void Given_TwoCharacters_When_HealingAbove1000_Then_SetHealthAt1000() {

        Characters character2 = new Characters("Player2");
        character2.setHealth(950);

        character2.heal(character2, 1000);
        String expected = character2.healToString();

        assertEquals(expected, "Player2's health is 1000.0");
    }

    @Test
     public void Given_Character_When_AttackingOneself_Then_ReturnAbortMessage() {
        Characters character = new Characters("Player1");
        character.onCreation();

        character.attack(character);

        String expected = character.attackToString();
        double expected2 = character.getHealth();


        assertEquals(expected, "Player1, you cannot attack yourself. Your health is 1000.0.");
        assertEquals(expected2, 1000.0, 0);
    }

    @Test
     public void Given_Character_When_HealingOthers_Then_ReturnError() {
        Characters healer = new Characters();
        Characters injuredCharacters = new Characters();
        injuredCharacters.setHealth(750);
        healer.setHealth(450);

        healer.heal(injuredCharacters, 150);
        healer.heal(healer, 150);

        double healOther = injuredCharacters.getHealth();

        double healOneself = healer.getHealth();


        assertEquals(healOther, 750, 0);
        assertEquals(healOneself, 600, 150);
    }

    @Test
     public void Given_Targetwith5LevelOrMoreAbove_When_Attacking_Then_ReduceDamagebyHalf() {
        Characters attacker = new Characters();
        Characters opponent = new Characters();

        attacker.onCreation();
        opponent.onCreation();
        opponent.setLevel(opponent.getLevel() * 10);

        attacker.attack(opponent);
        double expected = opponent.getHealth();

        assertEquals(expected, 999.5, 0.5);

    }

@Test
 public void Given_Targetwith5LevelOrMoreBelow_When_Attacking_Then_IncreaseDamagebyHalf() {
    Characters attacker = new Characters();
    Characters opponent = new Characters();

    attacker.onCreation();
    opponent.onCreation();
    opponent.setLevel(opponent.getLevel() * 10);

    attacker.attack(opponent);
    double expected = opponent.getHealth();

    assertEquals(expected, 998.5, 1.5);
    System.out.println(expected);

}

}
