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
// Track current player
  let currentPlayer = 'X';

squares.forEach(square => {
    square.addEventListener('click', () => {
      // Prevent overwriting an already played square
      if (square.textContent !== '') return;

      // Place X or O
      square.textContent = currentPlayer;

      square.classList.add(currentPlayer);

      // Switch player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
  });
});