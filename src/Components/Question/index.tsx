import React from 'react';
import IQuestion from 'Models/questions';
import Option from '../Option';

import './styles.css';
import { FormGroup } from '@material-ui/core';

function randomArray(array: any) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function Question({id,text, options}: IQuestion) {
  randomArray(options);
  return (
    <section key={id} className="questionCmpt">
      <div>
        {text}
      </div>
      <FormGroup>
        {options.map(item => (
          <Option {...item} />
        ))}
      </FormGroup>
    </section>
  )
}

export default Question;