import React, { useState, useEffect } from "react";
import {TextField, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
  const [name, setName] = useState(localStorage.getItem('userName') || '');

  useEffect(()=>{
    localStorage.setItem('userName', name);
  }, [name]);

  let isValid = (name.length >= 0 && name.length <=2) ? true: false;

  return (
    <section className="homeContainer">
      <h1>Welcome to the JS test, let's prove your concepts.
        First fill your fullname and tell me when you are ready.
      </h1>
      <TextField
        onChange={event => setName(event.target.value)}
        placeholder="Write your name..."
        value={name}/>
      <Button 
        variant="contained"
        color="primary"
        disabled={ isValid }
        component={ Link }
        to="/test"
      >
        Start test
      </Button>
    </section>
  );
}

export default Home;
