window.addEventListener('DOMContentLoaded', function() {
// Check if local storage is available
if (typeof(Storage) !== 'undefined') {
// Retrieve items from local storage
var allItems = JSON.parse(localStorage.getItem('items')) || [];

// Display items on the web page
var itemsContainer = document.getElementById('itemsContainer');

allItems.forEach(function(item) {
var itemElement = document.createElement('div');
itemElement.classList.add('item');

var itemName = document.createElement('h3');
itemName.textContent = item.name;

var itemPrice = document.createElement('h4');
itemPrice.textContent = 'Price: ' + item.price;

var itemImage = document.createElement('p');
itemImage.textContent = 'Image: ' + item.image;

var itemDescription = document.createElement('p');
itemDescription.textContent = 'Description: ' + item.description;

itemElement.appendChild(itemName);
itemElement.appendChild(itemPrice);
itemElement.appendChild(itemImage);
itemElement.appendChild(itemDescription);

itemsContainer.appendChild(itemElement);
});
} else {
alert('Local storage is not supported in this browser.');
}
});