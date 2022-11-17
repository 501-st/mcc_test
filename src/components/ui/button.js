import React from 'react';
import styled from "styled-components";

const Button = (props) => {
    return (
        <ButtonComponent {...props}>
            {props.children}
        </ButtonComponent>
    );
};

const ButtonComponent = styled.button`
  background-color: ${props => props.type === "create" ? "#20B2AA" : props.type === "edit" ? "#FFFF00" : "#DC143C"};
  padding: 10px 15px;
  border-radius: 15px;
  border: none;
  cursor: ${props => props.disabled ? "default" : "pointer"};
  visibility: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
`;

export default Button;