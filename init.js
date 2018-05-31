/*
	Name: 			Dexter
	Author: 		NinnYu Chin
	Description: 	A game that gives random math qustions. The user can click a button to see the answer and click a different button to get the next question. It keeps count of how many questions has been given out.
*/

var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
var counter = 1;
var counterText;
var deedeeText;
var dexterText;
var num1;
var num2;
var question;
var answer;
var operator = ["+","-","*","/"];
var answ_button;
var next_button;
var answ_text;
var next_text;
var gameover = false;

function preload ()
{
	//Loads the assets to be shown on the game.
    this.load.image('background', 'assets/background.png');
    this.load.image('dexter', 'assets/dexter.png');
    this.load.image('deedee', 'assets/deedee.png');
    this.load.image('box1', 'assets/box1.png');
    this.load.image('box2', 'assets/box2.png');
    this.load.spritesheet('button', 'assets/button_sprite.png', { frameWidth: 100, frameHeight: 50 });
}

function create ()
{
	//Shows the images on the game.
    this.add.image(300, 200, 'background');
    this.add.image(80, 330, 'dexter').setScale(0.1);
    this.add.image(450, 240, 'deedee').setScale(0.5);
    this.add.image(300, 200, 'box1');
    this.add.image(300, 200, 'box2');
    answ_button = this.add.sprite(200, 353, 'button').setInteractive();
    next_button = this.add.sprite(320, 353, 'button').setInteractive();

    //Shows how many clicks.
    counterText = this.add.text(400, 10, 'Question: ' + counter, {font: '28px Cooper Black', fill: '#fff'});
    counterText.stroke = "#de77ae";
    counterText.strokeThickness = 16;
    counterText.setShadow(2, 2, "#333333", 2, true, true);

    //Shows text on the two buttons.
    answ_text = this.add.text(165, 333, "Click for\nanswer", {font: 'bold 16px Cooper', fill: '#000'});
    next_text = this.add.text(285, 333, "Next\nQuestion", {font: 'bold 16px Cooper', fill: "#000"});

    //Randomly picks 2 numbers from 1-50 for the math question.
    num1 = Math.floor(Math.random() * 51)+1;
    num2 = Math.floor(Math.random() * 51)+1;

    //Shows the question.
    question = num1 + " " + operator[Math.floor(Math.random()*operator.length)] + " " + num2;
    deedeeText = this.add.text(70, 50, "What's " + question + " ?", {font: '32px Calibri', fill: '#000'});

    //Calculates answer.
    answer = eval(question).toFixed(1);
    dexterText = this.add.text(160, 233, "You don't know?", {font: '20px Calibri', fill: '#000'});

    //Shows the answer when the button is clicked.
    answ_button.on('pointerdown', function (pointer) {
        this.setFrame(1);
        dexterText.setText("Of course it's... " + answer + " !");
    });

    answ_button.on('pointerout', function (pointer) {
        this.setFrame(0);
    });

    answ_button.on('pointerup', function (pointer) {
        this.setFrame(0);
    });
	
    //Shows the next question when the button is clicked.
    next_button.on('pointerdown', function (pointer) {
        counter++;
        counterText.setText('Question: ' + counter);
        num1 = Math.floor(Math.random() * 51)+1;
        num2 = Math.floor(Math.random() * 51)+1;
        question = num1 + " " + operator[Math.floor(Math.random()*operator.length)] + " " + num2;
        deedeeText.setText("What's " + question + " ?");
        answer = eval(question).toFixed(1);
        dexterText.setText("You don't know?");
        this.setFrame(1);
    });

    next_button.on('pointerout', function (pointer) {
        this.setFrame(0);
    });

    next_button.on('pointerup', function (pointer) {
        this.setFrame(0);
    });
}