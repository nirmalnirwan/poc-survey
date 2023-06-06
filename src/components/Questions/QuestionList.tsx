import * as React from 'react';
import { Container } from 'react-bootstrap';
import QuestionCard, { IQuestionCard } from './QuestionCard';

export interface IQuestionList {
    questionCards: IQuestionCard[]
}

const QuestionList: React.FunctionComponent<IQuestionList> = ({ questionCards }) => {


    const handleDelete = (id: Number) => {
        console.log('delete',id)
    }

    const renderQuestionCards = (): React.JSX.Element[] => {
        return questionCards.map(question => {
            return (
                
                <div>

                    <QuestionCard id={question.id} questionType={question.questionType} handleDelete ={handleDelete}></QuestionCard>

                </div>
            )
        })
    }

    return (
        <>
            <h2 className='mt-3'>Question List</h2>
            <div>{renderQuestionCards()}</div>
        </>
    );
};

export default QuestionList;
