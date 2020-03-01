console.log('Your JS is linked up. Be the person you needed when you were little.')
/*----- constants -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;
function init() {
  board = [
  '', '', '',
  '', '', '',
  '', '', ''
  ];
  // new code here
  render();
  };
init();
function render() {
  board.forEach(function(mark, index){
  console.log(mark, index);
  squares[index].textContent = mark;
  });
  messages.textContent = `It's ${turn}'s turn!`;
};

/*----- cached element references -----*/


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
/*----- functions -----*/
function handleTurn(event) {
  let idx = squares.findIndex(function(square) {
  return square === event.target;
  });
  board[idx] = turn;
// This is tidy
turn = turn === 'X' ? 'O' : 'X';

render();
  };
