import React, {useState} from 'react';
import styled from "styled-components";

const Input = (props) => {
    return (
        <InputContainer {...props}/>
    );
};

const InputContainer = styled.input`
  padding: 10px;
  width: 300px;
`;

export default Input;