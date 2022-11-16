import React, {useState} from "react";
import styled from "styled-components";
import Button from "./components/ui/button";
import List from "./components/list";
import {deleteNode} from "./components/helpers/deleteNode";
import {createNode} from "./components/helpers/createNode";
import {editNode} from "./components/helpers/editNode";

const App = () => {

    let initialState = [
        {
            id: 1,
            text: "node1"
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

    const [nodes, setNodes] = useState(initialState)

    const handleClickDelete = (id) => {
        setNodes(deleteNode([...nodes], id))
    }

    const handleClickCreate = (id, value) => {
        setNodes(createNode([...nodes], id, value))
    }

    const handleClickEdit = (id, value) => {
        setNodes(editNode([...nodes], id, value))
    }

    const handleClickReset = () => {
        setNodes(initialState)
    }

    return (
        <Wrapper>
            <Container>
                <div style={{textAlign: "center", marginBottom: 50}}>
                    <Button style={{visibility: "visible", backgroundColor: "#d2b6b6"}} onClick={handleClickReset}>
                        Reset
                    </Button>
                </div>
                <List nodes={nodes} removeNode={handleClickDelete} createNode={handleClickCreate} editNode={handleClickEdit}/>
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

export default App;