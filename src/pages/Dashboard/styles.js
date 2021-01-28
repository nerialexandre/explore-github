import styled, { css } from 'styled-components';

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  margin-top: 60px;
  max-width: 500px;
`;

export const Repositories = styled.div`
  margin-top: 70px;
  max-width: 700px;
`;

export const Form = styled.form`
  display: flex;
  margin-right: 5px;
  margin-top: 40px;
  max-width: 700px;
  min-width: 425px;


  input {
    background: #ffffff;
    border: none;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    flex: 1;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    height: 72px;
    line-height: 23px;
    padding-left: 6px;
    border: 2px solid #ffffff;


    ${(props) => props.hasError && css`
      border: 2px solid red;
      border-right: 2px solid #ffffff;
    `}
    
    &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    align-items: center;
    background: #04d361;
    border: 0px;
    border-radius: 0px 5px 5px 0px;
    color: #ffffff;
    display: flex;
    font-family: Roboto;
    font-size: 18px;

    font-style: normal;
    font-weight: bold;
    justify-content: center;
    line-height: 21px;
    max-width: 200px;

    max-width: 300px;

    &:hover {
      background: #05a34c;
      transition: 0.3s;
    }

    &:focus {
   
    box-shadow: 0 0 0 0;
    outline: 0;

    }

    &:active {
      background: #04d361;
   }

    
  }
`;

export const DisplayError = styled.span`
  color: red;
  display:block;
  margin-left: 10px;
  margin-top: 10px;
`;
