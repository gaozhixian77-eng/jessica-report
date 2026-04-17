// script.js

// Function to handle drag event
function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

// Function to handle drop event
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    // Append the dragged element to the box
    event.target.appendChild(draggedElement);
    console.log(`Dropped ${data} into ${event.target.id}`);
}

// Function to allow dropping
function allowDrop(event) {
    event.preventDefault();
}

// Add event listeners to droppable areas
const dropBoxes = document.querySelectorAll('.drop-box');
dropBoxes.forEach(box => {
    box.addEventListener('dragover', allowDrop);
    box.addEventListener('drop', drop);
});

// Example to create a draggable ball
const ball = document.createElement('div');
ball.id = 'ball1';
ball.draggable = true;
ball.style.width = '50px';
ball.style.height = '50px';
ball.style.backgroundColor = 'red';
ball.addEventListener('dragstart', drag);

// Append ball to the document
document.body.appendChild(ball);