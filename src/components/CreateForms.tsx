import * as React from 'react';
import { Button, ButtonGroup, Card, CardGroup, Col, Container, Dropdown, Navbar, Row } from 'react-bootstrap';
import QuestionList, { IQuestionList } from './Questions/QuestionList';
import { useState } from 'react';
import ChoiseQuestion from './Questions/Choise.Question';
import TextQuestion from './Questions/Text';
import RatingQuestion from './Questions/Rating.Question';
import DateQuestion from './Questions/Date.Question';

const CreateForms: React.FunctionComponent<IQuestionList> = (props) => {

    const [questionList, setQuestionList] = useState<IQuestionList>({ questionCards: [{ id: 1, questionType: "text" }, { id: 2, questionType: "textd" }] });

    const [showQuestionBox, setShowQuestionBox] = useState<boolean>(false);
    const [showChoiseQuestion, setShowChoiseQuestion] = useState<boolean>(false);
    const [showTextQuestion, setShowTextQuestion] = useState<boolean>(false);
    const [showRatingQuestion, setShowRatingQuestion] = useState<boolean>(false);
    const [showDateQuestion, setShowDateQuestion] = useState<boolean>(false);

    React.useEffect(() => {
        const handleMouseClick = (event: any) => {
            console.log('Mouse clicked!', event);
        };

        document.body.addEventListener('click', handleMouseClick);

        return () => {
            document.body.removeEventListener('click', handleMouseClick);
        };
    }, []);

    const addQuestion = () => {
        setShowQuestionBox(!showQuestionBox);
        console.log('add question', showQuestionBox);
    }

    const addChoiseQuestion = () => {
        setShowQuestionBox(!showQuestionBox);
        setShowChoiseQuestion(!showChoiseQuestion);
        console.log('addChoiseQuestion', showChoiseQuestion);
    }

    const addTextQuestion = () => {
        setShowQuestionBox(!showQuestionBox);
        setShowTextQuestion(!showTextQuestion);

        console.log('addTextQuestion', showTextQuestion);
    }

    const addRatingQuestion = () => {
        setShowQuestionBox(!showQuestionBox);
        setShowRatingQuestion(!showRatingQuestion);
        console.log('addRatingQuestion', showRatingQuestion);
    }

    const addDateQuestion = () => {
        setShowQuestionBox(!showQuestionBox);
        setShowDateQuestion(!showDateQuestion);
        console.log('addDateQuestion', showDateQuestion);
    }

    const renderQuestionBox = (): React.JSX.Element => {
        if (showQuestionBox) {
            return (
                <ButtonGroup className='mt-3' aria-label="Basic example">
                    <Button variant="outline-secondary" onClick={() => addChoiseQuestion()}>Choise</Button>{' '}
                    <Button variant="outline-secondary" onClick={() => addTextQuestion()} >Text   </Button>{' '}
                    <Button variant="outline-secondary" onClick={() => addRatingQuestion()}>Rating</Button>{' '}
                    <Button variant="outline-secondary" onClick={() => addDateQuestion()}>Date</Button>{' '}
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            );
        }
        return (<></>);
    }

    const renderQuestion = (): React.JSX.Element => {
        if (showChoiseQuestion) {
            return (
                <Card className='mt-5'>
                    <Card.Body>
                        <ChoiseQuestion></ChoiseQuestion>
                    </Card.Body>
                </Card>
            );
        }
        else if (showTextQuestion) {
            return (
                <Card className='mt-5'>
                    <Card.Body>
                        <TextQuestion></TextQuestion>
                    </Card.Body>
                </Card>
            );
        }
        else if (showRatingQuestion) {
            return (
                <Card className='mt-5'>
                    <Card.Body>
                        <RatingQuestion></RatingQuestion>
                    </Card.Body>
                </Card>
            );
        }
        else if (showDateQuestion) {
            return (
                <Card className='mt-5'>
                    <Card.Body>
                        <DateQuestion></DateQuestion>
                    </Card.Body>
                </Card>
            );
        }

        return (<></>);
    }

    return (
        <Container >
            <p className='mt-3'>Create forms</p>
            <Row>
                <Col>
                    <p>{questionList.questionCards.length}</p>
                    <QuestionList questionCards={questionList.questionCards} ></QuestionList>

                    {renderQuestion()}

                    <Card className='mt-5'>
                        <Card.Body>

                            <Button className='mt-3' variant="outline-secondary" onClick={() => addQuestion()}>+ Add</Button>{' '}
                            {renderQuestionBox()}
                        </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container>
    );
};

export default CreateForms;
