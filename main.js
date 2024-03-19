const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
	if (inputBox.value === '') {
		alert('You must write something');
	} else {
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		inputBox.value = '';

		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);

		saveData();
	}
}

function saveData() {
	localStorage.setItem('tasks', listContainer.innerHTML);
}

function showTask() {
	let tasks = localStorage.getItem('tasks');
	if (tasks) {
		listContainer.innerHTML = tasks;
	}
}

inputBox?.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		addTask();
	}
});

listContainer?.addEventListener('click', function (event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('checked');
	} else if (event.target.tagName === 'SPAN') {
		event.target.parentElement.remove();
		saveData();
	}
});

showTask();
