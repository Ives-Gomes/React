import styled from 'styled-components';

export const Div = styled.div`
  background: #7DBFE8;

  margin-top: 120px;
  margin-left: 500px;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px;
  display: flex;
  flex-direction: column;

  i {
    color: #7F7DE8;
    font-size: 50px;
    margin-top: 10px;
    margin-left: 120px;
  }

  p {
    color: #7F7DE8;
    font-size: 20px;
    font-family: Alata, Verdana, Arial, Helvetica, sans-serif;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  }

  .button__counter {
    font-size: 20px;
    font-family: Verdana, sans-serif, Arial, Helvetica;
    background: #7F7DE8;
    border: none;
    border-radius: 5px;
    margin-left: 120px;
    margin-right: 20px;
    color: white;
    outline: 0;
  }

  .button__input {
    font-size: 20px;
    font-family: Verdana, sans-serif, Arial, Helvetica;
    background: #7F7DE8;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    margin-top: 20px;
    color: white;
    outline: 0;
  }

  input {
    font-size: 20px;
    font-family: Verdana, sans-serif, Arial, Helvetica;
    width: 80px;
    margin-left: 80px;
    border: none;
    border-radius: 5px;
    color: #7F7DE8;
    outline: 0;
  }
`;