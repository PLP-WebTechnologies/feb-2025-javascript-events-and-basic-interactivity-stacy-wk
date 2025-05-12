const form = document.getElementById('assignmentForm');
const assignmentList = document.getElementById('assignmentList');

// Listen for form submission
form.addEventListener('submit', function (e) {
e.preventDefault(); // prevent page reload

const title = document.getElementById('title').value.trim();
const description = document.getElementById('description').value.trim();
const dueDate = document.getElementById('dueDate').value;

// Simple validation
if (title === '' || description === '' || dueDate === '') {
alert('Please fill out all required fields!');
return;
}

addAssignment(title, description, dueDate);
form.reset();
});

// Function to add assignment
function addAssignment(title, description, dueDate) {
const assignmentDiv = document.createElement('div');
assignmentDiv.className = 'assignment';
assignmentDiv.innerHTML = `
<strong>${title}</strong><br/>

<strong>${description}</strong><br/>

Due: ${dueDate}

<button class="delete-btn">Delete</button>
`;

// Add event listener for delete button
assignmentDiv.querySelector('.delete-btn').addEventListener('click', function () {
assignmentDiv.remove();
});

assignmentList.appendChild(assignmentDiv);
}