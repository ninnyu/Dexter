/*
	Name: 			Dexter
	Author: 		NinnYu Chin
	Description: 	A game that gives random math questions and their answers. A new question
	is made along with its answer with every click. AFter 100 clicks, the game is over.
*/

var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var clicked = 0;
var clickedText;
var deedeeText;
var dexterText;
var num1;
var num2;
var question;
var answer;
var operator = ["+","-","*","/"];

function preload ()
{
	//Loads the assets to be shown on the game.
    this.load.image('background', 'assets/background.png');
    this.load.image('dexter', 'assets/dexter.png');
    this.load.image('deedee', 'assets/deedee.png');
    this.load.image('box1', 'assets/box1.png');
    this.load.image('box2', 'assets/box2.png');
}

function create ()
{
	//Shows the images on the game.
    this.add.image(300, 200, 'background');
    this.add.image(80, 330, 'dexter').setScale(0.1);
    this.add.image(450, 240, 'deedee').setScale(0.5);
    this.add.image(300, 200, 'box1');
    this.add.image(300, 200, 'box2');

    //Shows how many clicks.
    clickedText = this.add.text(400, 10, 'Clicked: 0', {font: '28px Cooper Black', fill: '#fff'});
    clickedText.stroke = "#de77ae";
    clickedText.strokeThickness = 16;
    clickedText.setShadow(2, 2, "#333333", 2, true, true);

    //Randomly picks 2 numbers from 1-50 for the math question.
    num1 = Math.floor(Math.random() * 51)+1;
    num2 = Math.floor(Math.random() * 51)+1;

    //Shows the question.
    question = num1 + " " + operator[Math.floor(Math.random()*operator.length)] + " " + num2;
    deedeeText = this.add.text(70, 50, "What's " + question + " ?", {font: '32px Calibri', fill: '#000'});

    //Shows the answer.
    answer = eval(question).toFixed(1);
    dexterText = this.add.text(150, 233, "Of course it's ... " + answer + " !", {font: '18px Calibri', fill: '#000'});
	
}

function update ()
{
	//Ends game when click number reaches 100.
	if (clicked >= 100)
	{
		return;
	}
	
	//Generates a new question and its answer when there's a click.
	if (game.input.activePointer.isDown)
	{
		clicked += 1;
		clickedText.setText('Clicked: ' + clicked);
		num1 = Math.floor(Math.random() * 51)+1;
   		num2 = Math.floor(Math.random() * 51)+1;
		question = num1 + " " + operator[Math.floor(Math.random()*operator.length)] + " " + num2;
		deedeeText.setText("What's " + question + " ?");
		answer = eval(question).toFixed(1);
    	dexterText.setText("Of course it's ... " + answer + " !");
	}
}