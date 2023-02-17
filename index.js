var answers = [
	"No",
	"No",
	"No",
	"Ask again later",
	"Reply hazy try again",
];

function randomAnswer()
{
	var index = Math.floor(Math.random() * answers.length);
	return answers[index];
}

function transitionEnded(event)
{
	if (!event.propertyName === 'opacity' || event.elapsedTime < 1.05)
		return;

	var polyhedron = event.target;
	var answer = polyhedron.querySelector('#answer');
	answer.innerText = randomAnswer();
}

window.addEventListener('load', event => {
	document.getElementById('polyhedron').addEventListener('transitionend', transitionEnded);
	document.body.addEventListener('touchstart', event => { });
});