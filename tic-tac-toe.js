// Runs when the page is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // Get the board container
  const board = document.getElementById('board');

  // Select all <div> squares inside the board
  const squares = board.querySelectorAll('div');

  // Add the "square" class to each square
  squares.forEach(square => {
    square.classList.add('square');
  });
});