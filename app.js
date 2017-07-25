

function populate() {
	if (quiz.isEnded()) {
		showScores();
	}
	else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;	
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}

};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;

}

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Score: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;

	if (quiz.score) {}
};

var questions = [ 
new Question("April 1 falls within the dates of which sign of the zodiac?", ["Pisces", "Jemini", "Capricon", "Aries"], "Aries"), 
new Question("How long does the average housefly live for?", ["A week", "2 weeks", "One month", "2 months"], "One month"),
new Question("Apart from a parrot which other animal can look behind without turning their head?", ["Rabbit", "Chameleone", "Hawk",
 "Snake"], "Rabbit"),
new Question("What color is a hippos's milk?", ["White", "Yellow", "Red", "Pink"], "Pink"),
new Question("Which human bone is stronger than concrete?", ["thigh bone", "jaw bone", "colar bone", "toe bone"], "thigh bone"),
new Question("How long does it take for food to entirely digest?", ["30 minutes", "6 hours", "12 hours", "2 hours"], "6 hours"), 

new Question("What is the name of the island prison where, Nelson Mandela was imprisioned?", ["Seal island", "Penal colony island", 
	"Rikers island", "Robben island"], "Robben island"), 
new Question("What is the currency of Japan?", ["Pisces", "Pounds", "Japanese dollars", "Yen"], "Yen"), 
new Question("What is the Atomic sign for water?", ["Ho2", "HEo2", "H2O", "oH2"], "H2O"), 
new Question("Who is the Greates football player of all time?", ["Lionel Messi", "Lebron James", "Serena Williams", "Celine Dion"], "Lionel Messi")

];

var quiz = new Quiz(questions);

populate();