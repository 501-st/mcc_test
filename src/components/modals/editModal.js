import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {createPortal} from "react-dom";
import Modal from "../helpers/modal";
import {ContainerModal, Text} from "../ui/constants";
import Input from "../ui/input";
import Button from "../ui/button";
import styled from "styled-components";

const EditModal = ({setShowModal, node, editNode}) => {
    const [isBrowserLoaded, setIsBrowserLoaded] = useState(false)

    useEffect(() => {
        setIsBrowserLoaded(true);
    }, []);

    const [inputValue, setInputValue] = useState(node.text)

    const onEditClick = useCallback(() => {
        editNode(node.id, inputValue)
        setInputValue("")
        setShowModal(false)
    }, [editNode, setInputValue, setShowModal, inputValue])

    const content = useMemo(() => (<Modal setShowModal={setShowModal}>
        <ContainerModal onClick={e => e.stopPropagation()}>
            <Text style={{marginBottom: 30}}>
                Edit node
            </Text>
            <div>
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            <EditButton disabled={inputValue === "" || inputValue === node.text} onClick={onEditClick} type={"create"}>
                Edit
            </EditButton>
        </ContainerModal>
    </Modal>), [inputValue, node.text, setShowModal, setInputValue, onEditClick])

    return isBrowserLoaded ? createPortal(content, document.getElementById('modal-root')) : null
};

const EditButton = styled(Button)`
  visibility: visible;
  margin-top: 20px;
`;

export default EditModal;