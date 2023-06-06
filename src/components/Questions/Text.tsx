import * as React from 'react';
import { Card } from 'react-bootstrap';

interface ITextQuestionProps {
}

const TextQuestion: React.FunctionComponent<ITextQuestionProps> = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Text
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default TextQuestion;
