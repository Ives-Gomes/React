import React from 'react';
import { Form } from '@unform/web';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { actions } from '../store/actions/count';

const DefineCounter = () => {
  const dispatch = useDispatch();

  const handleCounter = (data) =>
    dispatch(actions.handleCounter(+data.counter));

  return (
    <>
      <Form onSubmit={handleCounter}>
        <Input name='counter' type='number' />
        <button type='submit'>Change</button>
      </Form>
    </>
  );
};

export default DefineCounter;
