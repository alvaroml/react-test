import React, { useState } from 'react';
import IOption from 'Models/options';
import './styles.css';
import { FormControlLabel, Checkbox } from '@material-ui/core';

function Option({id, text, selected}: IOption) {
  
  return (
    <section key={id} className="optionCmpt">
      <FormControlLabel
        control={<Checkbox checked={selected}  name={text} />}
        label={text}
        />
    </section>
  )
}

interface Iprops{
  options: IOption
}

export default Option;