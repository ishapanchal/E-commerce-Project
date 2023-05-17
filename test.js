document.getElementById('addItemForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  var itemName = document.getElementById('itemName').value;
  var itemPrice = document.getElementById('itemPrice').value;
  var itemImage = document.getElementById('itemImage').value;
  var itemDescription = document.getElementById('itemDescription').value;

  // Create item object
  var item = {
    name: itemName,
    price: itemPrice,
    image: itemImage,
    description: itemDescription
  };

  // Check if local storage is available
  if (typeof(Storage) !== 'undefined') {
    // Retrieve existing items or initialize empty array
    var allItems = JSON.parse(localStorage.getItem('items')) || [];

    // Add new item to the array
    allItems.push(item);

    // Store updated items in local storage
    localStorage.setItem('items', JSON.stringify(allItems));

    // Clear form
    document.getElementById('addItemForm').reset();

    // Display success message
    alert('Item added successfully!');
  } else {
    alert('Local storage is not supported in this browser.');
  }
});
