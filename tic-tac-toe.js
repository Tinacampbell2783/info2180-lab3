
window.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const squares = board.querySelectorAll('div');
  const status = document.getElementById('status');
  const newGameButton = document.querySelector('.btn');

  // Apply the "square" class to each square for styling (Exercise 1)
  squares.forEach(square => {
    square.classList.add('square');
  });

  let currentPlayer = 'X'; // Tracks the current player

  // Define all possible winning combinations (rows, columns, diagonals)
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  // Check if the current player has a winning combination
  function checkWinner() {
    for (let combo of winCombos) {
      const [a, b, c] = combo;
      if (
        squares[a].textContent === currentPlayer &&
        squares[b].textContent === currentPlayer &&
        squares[c].textContent === currentPlayer
      ) {
        return combo; // Return winning combo for potential use
      }
    }
    return null; // No winner
  }

  // Check if the board is completely filled (tie condition)
  function isBoardFull() {
    return Array.from(squares).every(sq => sq.textContent !== '');
  }

  // Reset the game board and status (Exercise 5)
  function resetBoard() {
    squares.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O');
      square.style.pointerEvents = 'auto';
      square.style.backgroundColor = ''; // Clear any inline styles
    });

    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
    status.classList.remove('you-won');
    currentPlayer = 'X';
  }

  // Add interactivity to each square (click and hover)
  squares.forEach(square => {
    // Handle square clicks (Exercises 2, 4, 6)
    square.addEventListener('click', () => {
      // Prevent cheating: disallow clicking a filled square or if game over
      if (square.textContent !== '' || status.classList.contains('you-won')) {
        return;
      }

      // Place the current player's mark
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

      // Check for win
      const winningCombo = checkWinner();
      if (winningCombo) {
        status.textContent = `Congratulations! ${currentPlayer} is the Winner! `;
        status.classList.add('you-won');
        squares.forEach(sq => sq.style.pointerEvents = 'none'); // Lock board
        return;
      }

      // Check for tie
      if (isBoardFull()) {
        status.textContent = "It's a tie!";
        squares.forEach(sq => sq.style.pointerEvents = 'none');
        return;
      }

      // Switch to the other player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });

    // Handle hover (Exercise 3)
    square.addEventListener('mouseenter', () => {
      square.classList.add('hover');
    });
    square.addEventListener('mouseleave', () => {
      square.classList.remove('hover');
    });
  });

  // Add click listener to New Game button (Exercise 5)
  newGameButton.addEventListener('click', resetBoard);
});


