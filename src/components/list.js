import React, {useCallback, useState} from 'react';
import Button from "./ui/button";
import {ModRowContainer, RowContainer, Text} from "./ui/constants";
import CreateModal from "./modals/createModal";
import EditModal from "./modals/editModal";

const List = ({nodes, removeNode, createNode, editNode}) => {
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [activeNode, setActiveNode] = useState(null)

    const onClickCreate = useCallback((node) => {
        setActiveNode(node)
        setShowCreateModal(true)
    }, [setActiveNode, setShowCreateModal])

    const onClickEdit = useCallback((node) => {
        setActiveNode(node)
        setShowEditModal(true)
    }, [setActiveNode, setShowEditModal])

    return (
        <ul>
            {nodes.map((node) => (
                <li key={node.id}>
                    <ModRowContainer>
                        <Text>
                            {node.text}
                        </Text>
                        <RowContainer style={{columnGap: 20}}>
                            <Button onClick={() => onClickCreate(node)} type={"create"}>
                                Create
                            </Button>
                            <Button onClick={() => onClickEdit(node)} type={"edit"}>
                                Edit
                            </Button>
                            <Button onClick={() => removeNode(node.id)} type={"delete"}>
                                Delete
                            </Button>
                        </RowContainer>
                    </ModRowContainer>
                    {node.children && <List nodes={node.children} removeNode={removeNode} createNode={createNode}
                                            editNode={editNode}/>}
                </li>
            ))}
            {!!showCreateModal &&
                <CreateModal setShowModal={setShowCreateModal} createNode={createNode}
                             node={activeNode}/>}
            {!!showEditModal &&
                <EditModal setShowModal={setShowEditModal} editNode={editNode}
                           node={activeNode}/>}
        </ul>
    );
};

export default List;