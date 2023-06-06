import * as React from 'react';
import { Card } from 'react-bootstrap';

interface IChoiseQuestionProps {
}

const ChoiseQuestion: React.FunctionComponent<IChoiseQuestionProps> = (props) => {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Choise
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ChoiseQuestion; 
