package main;

public class MainApp {
    public static void main(String[] args) {

        Characters player = new Characters("Player");
        Characters opponent = new Characters("Enemy");
        player.attack(player);
        player.attack(opponent);
    }
}
