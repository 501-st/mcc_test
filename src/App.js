import React, {useCallback, useState} from "react";
import styled from "styled-components";
import Button from "./components/ui/button";
import List from "./components/list";
import {deleteNode} from "./components/helpers/deleteNode";
import {createNode} from "./components/helpers/createNode";
import {editNode} from "./components/helpers/editNode";

const initialState = [
    {
        id: 1,
        text: "node1",
    },
    {
        id: 2,
        text: "node2",
        children: [
            {
                id: 5,
                text: "node5"
            }
        ]
    },
    {
        id: 3,
        text: "node3",
        children: [
            {
                id: 6,
                text: "node6",
                children: [
                    {
                        id: 7,
                        text: "node7"
                    },
                    {
                        id: 8,
                        text: "node8"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: "node4"
    }
]

const App = () => {
    const [nodes, setNodes] = useState(() => JSON.parse(JSON.stringify(initialState)))

    const onClickDelete = useCallback((id) => {
        setNodes(deleteNode([...nodes], id))
    }, [nodes, setNodes])

    const onClickCreate = useCallback((id, value) => {
        setNodes(createNode([...nodes], id, value))
    }, [nodes, setNodes])

    const onClickEdit = useCallback((id, value) => {
        setNodes(editNode([...nodes], id, value))
    }, [nodes, setNodes])

    const onResetClick = useCallback(() => {
        setNodes(JSON.parse(JSON.stringify(initialState)))
    }, [setNodes, initialState])

    return (
        <Wrapper>
            <Container>
                <ButtonContainer>
                    <ResetButton onClick={onResetClick}>
                        Reset
                    </ResetButton>
                </ButtonContainer>
                <List nodes={nodes} removeNode={onClickDelete} createNode={onClickCreate}
                      editNode={onClickEdit}/>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 150px;
  width: 1200px;
  background-color: #8a96da;
  border-radius: 20px;
  padding: 20px 20px 20px 0;
`;

const ResetButton = styled(Button)`
  visibility: visible;
  background-color: #d2b6b6;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export default App;