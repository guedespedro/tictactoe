import { Button } from 'react-bootstrap';

export default function Square({ value, onSquareClick }) {
    return (
      <Button className="square" onClick={onSquareClick} variant="outline-secondary">
        {value}
      </Button>
    );
}
