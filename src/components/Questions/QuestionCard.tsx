import * as React from 'react';
import { Button, Card } from 'react-bootstrap';

export interface IQuestionCard {
    id: Number,
    questionType: string,
    handleDelete : (id: Number) => void
}

const QuestionCard: React.FunctionComponent<IQuestionCard> = ({ id, questionType , handleDelete}) => {
    return (

        <Card className='mt-3' style={{ width: '18rem',backgroundColor:"lightgrey"}}>
            <Card.Body>
                <Card.Title>Card Title {id} - {questionType}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="danger" onClick={()=> handleDelete(id)}>Delete</Button>{' '}

            </Card.Body>
        </Card>
    );
};

export default QuestionCard;
