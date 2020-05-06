import React from "react";
import { connect } from "react-redux";
import {  Container } from "@material-ui/core";
import actions from "Stores/Home/actions";
import './styles.css';

function Test() {

  return (
    <section className="testContainer">
      <Container maxWidth="sm">      
      </Container>
    </section>
  );
}

//TODO: typo
function mapStateProps(state: any) {
  return {
    tasks: state.tasks,
    users: state.users,
    error: state.error,
    showForm: state.view.showForm
  };
}

function mapDispatchProps(dispatch: any) {
  return {
    getTests: function () {
      dispatch(actions.GET_TEST())
    }
  };
}

interface IProps {
  getTest: any,
}

export default connect(mapStateProps, mapDispatchProps)(Test);
