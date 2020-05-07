import React from 'react';
import IQuestion from 'Models/questions';
import Question from 'Components/Question';

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

function QuestionList({ questions }: IProps) {
  randomArray(questions);
  return (
    <section className="questionListCmpt">
      {questions.map(item => (
        <Question {...item} />
      ))}
    </section>
  );
}
interface IProps {
  questions: IQuestion[]
}

export default QuestionList;