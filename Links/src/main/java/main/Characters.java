package main;

public class Characters {
    double _health;
    int _level;
    boolean _alive;
    String playerName;

    public Characters(String playerName) {
        setPlayerName(playerName);
    }

    public Characters() {}

    public String getPlayerName() {
        return this.playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public double getHealth() {

        return this._health;
    }

    public void setHealth(double _health) {
        this._health = _health;
    }

    public int getLevel() {
        return this._level;
    }

    public void setLevel(int _level) {
        this._level = _level;
    }

    public boolean isAlive() {
        return _alive = true;
    }

    public boolean getAlive() {
        return this._alive;
    }

    public void setAlive(boolean _alive) {
        this._alive = _alive;
    }

    public void onCreation() {
        setHealth(1000.0);
        setLevel(1);
        isAlive();
    }

    @Override public String toString() {
        String onCreateStats = "Character's health = " + getHealth() + ", level= " + getLevel() + " and _alive= " + isAlive() + ".";
        return onCreateStats;
    }

    public String damageToString() {
        String result;
        if (_health > 0) {
            result = getPlayerName() + " takes damages. Player's health is " + getHealth();
        } else {
            result = getPlayerName() + " health is 0, " + getPlayerName() + " is dead!";
        }
        return result;
    }

    public void attack(Characters opponent) {
        double damage = 1;
        if (this.equals(opponent)) {
            System.out.println("You cannot harm yourself! Try attacking someone else. Like someone who is not you!");
        } else if (_health > 0 && (opponent.getLevel() >= getLevel() + 5)) {
            opponent.setHealth(opponent.getHealth() - damage / 2);
            System.out.println(getPlayerName() + " attacks " + opponent.getPlayerName() + " and deals " + damage / 2 + ". " + opponent.getPlayerName() + "health is " + opponent.getHealth() + ".");
        } else if (_health > 0 && (getLevel()+5 >= opponent.getLevel())) {
            opponent.setHealth(opponent.getHealth() - damage * 1.5);
            System.out.println(getPlayerName() + " attacks " + opponent.getPlayerName() + " and deals " + damage / 2 + ". " + opponent.getPlayerName() + "health is " + opponent.getHealth() + ".");
        } else {

            setHealth(0);
            setAlive(false);
        }
    }

    public void heal(Characters opponent, int healthPoints) {
        if (this.equals(opponent)) {
            if (_health < 0) {
                System.out.println(opponent.getPlayerName() + " is dead! You can't heal him.");
            } else {
                opponent.setHealth(getHealth() + healthPoints);
                if (_health >= 1000) {
                    opponent.setHealth(1000);
                }
            }
        }
    }

    public String healToString() {
        return getPlayerName() + "'s health is " + getHealth();
    }

    public String attackToString() {
        return getPlayerName() + ", you cannot attack yourself. Your health is " + getHealth() + ".";
    }

}
