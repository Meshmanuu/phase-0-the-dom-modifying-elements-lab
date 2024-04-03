// Write your code here!
// Remove the DOM node 'main#main'
document.getElementById('main').remove();

// Create a new <h1> node
const newHeader = document.createElement('h1');

// Set the id of the new <h1> node to 'victory'
newHeader.id = 'victory';

// Set the text content of the new <h1> node
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace Myname-NAME my actual name

// Append the new <h1> node to the document body
document.body.appendChild(newHeader);
