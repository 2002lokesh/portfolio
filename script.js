// Select DOM elements
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task-input');
const taskList = document.getElementById('task-list');

// Add task function
addTaskBtn.addEventListener('click', () => {
    const taskValue = taskInput.value.trim();
    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    
    // Create task span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskValue;
    taskSpan.classList.add('task');
    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Append task and delete button to list item
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
});

// Optional: Add task on "Enter" key press
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});
