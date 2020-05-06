import React from 'react';
import IOption from 'Models/options';
import './styles.css';
import { FormControlLabel, Checkbox } from '@material-ui/core';

function Option({ id, text, selected }: IOption) {
  
  return (
    <section className="avatarCmpt">
      <FormControlLabel
        control={<Checkbox checked={selected}  name={text} />}
        label={text}
      />
    </section>
  )
}
Option.defaultProps = {
  text: ''
}

export default Option;