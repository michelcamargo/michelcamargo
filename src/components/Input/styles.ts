import styled from 'styled-components';

interface Props{
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
}

export const TextInput1 = styled.input<Props>`
  height: 25px;
  width: 200px;

  padding: 5px 10px;
  margin: 5px 10px;

  background-color: #555;
  color: #FFF;
  border: none;
  border-radius: 4px;


`;

export const EmailInput = styled.input<Props>`
  height: 25px;
  width: 350px;

  padding: 5px 10px;
  margin: 5px 10px;

  background-color: #555;
  color: #FFF;
  border: none;
  border-radius: 4px;

`;

export const TextAreaInput = styled.textarea<Props>`
  height: 100px;
  width: 590px;

  background-color: #555;
  color: #FFF;
  border: none;
  border-radius: 4px;

  margin: 5px 10px;
  padding: 5px 10px;

`;
