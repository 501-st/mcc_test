import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";
import Modal from "../helpers/modal";
import {ContainerModal, Text} from "../ui/constants";
import Input from "../ui/input";
import Button from "../ui/button";

const CreateModal = ({show, setShow, createNode, id}) => {

    const [isBrowser, setBrowser] = useState(false)

    useEffect(() => {
        setBrowser(true);
    }, []);

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const [value, setValue] = useState("")

    const handleClick = () => {
        createNode(id, value)
        setValue("")
        setShow(false)
    }

    const content = show ? (
        <Modal setShow={setShow}>
            <ContainerModal onClick={CancelPropagation}>
                <Text style={{marginBottom: 30}}>
                    Create node
                </Text>
                <div>
                    <Input value={value} onChange={(e) => setValue(e.target.value)}/>
                </div>
                <Button disabled={value === ""} style={{visibility: "visible", marginTop: 20}} onClick={handleClick} type={"create"}>
                    Create
                </Button>
            </ContainerModal>
        </Modal>
    ) : null

    return isBrowser ? createPortal(content,  document.getElementById('modal-root')) : null
};

export default CreateModal;