import './App.css';
import React, { useState } from 'react';
import { QuestionTypes } from './Models/QuestionTypes.model';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Components/Header';
import CreateForms from './Components/CreateForms';

function App() {

  // const [questionTypes ,setquestionTypes] = useState<QuestionTypes[]>([{key: "TEXT" ,value:"text"}]);

  return (
    <Container className='mt-5'>
          <Header></Header>
          <CreateForms></CreateForms>
    </Container>
  );
}

export default App;

