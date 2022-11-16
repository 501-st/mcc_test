import React, {useState} from 'react';
import Button from "./ui/button";
import {ModRowContainer, RowContainer, Text} from "./ui/constants";
import CreateModal from "./modals/createModal";
import EditModal from "./modals/editModal";

const List = ({nodes, removeNode, createNode, editNode}) => {

    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [id, setId] = useState(null)

    const handleClickCreate = (id) => {
        setId(id)
        setShowCreateModal(true)
    }

    const handleClickEdit = (id) => {
        setId(id)
        setShowEditModal(true)
    }

    return (
        <ul>
            {nodes.map((node) => (
                <li key={node.id}>
                    <ModRowContainer>
                        <Text>
                            {node.text}
                        </Text>
                        <RowContainer style={{columnGap: 20}}>
                            <Button onClick={() => handleClickCreate(node.id)} type={"create"}>
                                Create
                            </Button>
                            <Button onClick={() => handleClickEdit(node.id)} type={"edit"}>
                                Edit
                            </Button>
                            <Button onClick={() => removeNode(node.id)} type={"delete"}>
                                Delete
                            </Button>
                        </RowContainer>
                    </ModRowContainer>
                    {node.children && <List nodes={node.children} removeNode={removeNode} createNode={createNode} editNode={editNode}/>}
                </li>
            ))}
            <CreateModal setShow={setShowCreateModal} show={showCreateModal} createNode={createNode} id={id}/>
            <EditModal setShow={setShowEditModal} show={showEditModal} editNode={editNode} id={id}/>
        </ul>
    );
};

export default List;