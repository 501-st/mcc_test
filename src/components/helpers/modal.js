import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
`;

const Modal = ({children, setShowModal}) => {
    return (
        <Container onClick={() => setShowModal(false)}>
            {children}
        </Container>
    )
}

export default Modal;