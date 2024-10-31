import { useState } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import Board from './components/Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <ListGroup.Item key={move}>
        <Button variant="link" onClick={() => jumpTo(move)}>{description}</Button>
      </ListGroup.Item>
    );
  });

  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>JOGO DA VELHA</h1>
          <p>expanda o universo jogando <em>tic-tac-toe</em></p>
          <p>- X é alien</p>
          <p>- O é astronauta</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="game">
            <div className="game-board">
              <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
              <ListGroup>{moves}</ListGroup>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
