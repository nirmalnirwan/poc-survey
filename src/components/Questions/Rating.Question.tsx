import * as React from 'react';
import { Card } from 'react-bootstrap';

interface IRatingQuestionProps {
}

const RatingQuestion: React.FunctionComponent<IRatingQuestionProps> = (props) => {
  return (
    <Card className='mt-3' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Rating
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default RatingQuestion;
