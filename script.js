//your JS code here. If required.
const squares = document.querySelectorAll('.square');
squares.forEach(function(square) {
  square.addEventListener('mouseover', function(event) {
    const currentSquare = event.target;
    
    squares.forEach(function(sq) {
      sq.style.backgroundColor = '#6F4E37';
    });
	  
    currentSquare.style.backgroundColor = '#E6E6FA';
  });

  
  square.addEventListener('mouseout', function() {
    squares.forEach(function(sq) {
      sq.style.backgroundColor = '#E6E6FA';
    });
  });
});