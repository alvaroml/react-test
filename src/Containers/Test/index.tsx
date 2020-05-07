import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Fab } from "@material-ui/core";
import actions from "Stores/Home/actions";
import QuestionList from "./Components/QuestionList";
import IQuestion from 'Models/questions';
import './styles.css';

function Test({questions}: IProps) {

  return (
    <section className="testContainer">
      <Fab className="testFab" variant="extended" onClick={()=>{console.log('The test fished')}}>
        End Test
      </Fab>
      <Container maxWidth="sm">
        <h1>Hello! {localStorage.getItem('userName')}</h1>
      <QuestionList questions = {questions}/>      
      </Container>
    </section>
  );
}

interface IProps {
  questions: IQuestion[],
  getTest: any
}

function mapStateProps(state: any) {
  return {
    questions: state.questions,
    error: state.error,
  };
}

function mapDispatchProps(dispatch: any) {
  return {
    getTests: function () {
      dispatch(actions.GET_TEST())
    }
  };
}


export default connect(mapStateProps, mapDispatchProps)(Test);
