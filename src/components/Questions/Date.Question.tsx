import * as React from 'react';
import { Card } from 'react-bootstrap';

interface IDateQuestionProps {
}

const DateQuestion: React.FunctionComponent<IDateQuestionProps> = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Date
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default DateQuestion;
