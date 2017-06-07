// 1. save 4 elements into variables.
// first one is done for you
var input = document.getElementById('newTask');
var addButton = document.getElementById('addButton');
var taskList = document.getElementById('taskList');
var update = document.getElementById('countTasks');

// 2. create addTask function
// this adds a lot to html
function addTask(){
	if (input.value === "") {
		alert("Make sure you insert some text");
	}else{
		//create li to wrap the task
		var listItem = document.createElement('li');
		
		// create input for when editing the task
		var text = document.createElement('input');
		text.type = "text";
		
		// create label for task
		var label = document.createElement('label');
		label.innerText = input.value;

		// add edit button to li
		var editButton = document.createElement('input');		
		editButton.type = 'button';
		editButton.value = 'EDIT';
		editButton.setAttribute('class', 'edit');


		// add delete button to li
		var deleteButton = document.createElement('input');
		deleteButton.type = 'button';
		deleteButton.value = 'DELETE';
		deleteButton.setAttribute('class', 'delete');

		// append content into li, and append li to ol
		listItem.appendChild(label);
		listItem.appendChild(text);
		listItem.appendChild(deleteButton);
		listItem.appendChild(editButton);
		taskList.appendChild(listItem);

		// set addTask value to empty
		input.value = "";

		// add event listeners
		// call function that updates number of tasks
		editButton.addEventListener('click', editTask);
		deleteButton.addEventListener('click', deleteTask);
		notification();
	}
}

function deleteTask (){
	if (confirm('Are you sure you want to delete?')) {
		var li = this.parentNode;
		var ol = li.parentNode;
		ol.removeChild(li);
		notification();
	}
}

function editTask (){
	var li = this.parentNode;
	var editButton = li.querySelector(".edit");
	var label = li.querySelector("label");
	var input = li.querySelector("input[type=text]");
	var contains = li.classList.contains("editMode");

	if (contains) {
		label.innerText = input.value;
		editButton.value = "EDIT";
	}else{
		input.value = label.innerText;
		editButton.value = "SAVE";
	}

	li.classList.toggle("editMode");
}

// 3. create function that counts the number of tasks and updates display
function notification(){
	if (taskList.children.length === 0) {
		update.innerText = "You have no new tasks for today.";
	}else if (taskList.children.length === 1) {
		update.innerText = "You have 1 task for today.";
	}else{
		update.innerText = "You have " +taskList.children.length+ " tasks for today.";
	}
}

// 4. add event listener to addTask button
// 5. call function that updates number of tasks
addButton.addEventListener('click', addTask);
notification();
