import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {createPortal} from "react-dom";
import Modal from "../helpers/modal";
import {ContainerModal, Text} from "../ui/constants";
import Input from "../ui/input";
import Button from "../ui/button";
import styled from "styled-components";

const CreateModal = ({setShowModal, createNode, node}) => {

    const [isBrowserLoaded, setIsBrowserLoaded] = useState(false)

    useEffect(() => {
        setIsBrowserLoaded(true);
    }, []);

    const [inputValue, setInputValue] = useState('')

    const onClickCreate = useCallback(() => {
        createNode(node.id, inputValue)
        setInputValue("")
        setShowModal(false)
    }, [createNode, setInputValue, setShowModal, inputValue])

    const content = useMemo(() => ( <Modal setShowModal={setShowModal}>
        <ContainerModal onClick={e => e.stopPropagation()}>
            <Text style={{marginBottom: 30}}>
                Create node
            </Text>
            <div>
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            <CreateButton disabled={inputValue === ""} onClick={onClickCreate} type={"create"}>
                Create
            </CreateButton>
        </ContainerModal>
    </Modal>), [setShowModal, inputValue, setInputValue, onClickCreate])

    return isBrowserLoaded ? createPortal(content,  document.getElementById('modal-root')) : null
};

const CreateButton = styled(Button)`
  visibility: visible;
  margin-top: 20px
`;

export default CreateModal;