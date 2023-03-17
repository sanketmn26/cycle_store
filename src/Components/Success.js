import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from './91001-success.json';
import { NavLink } from 'react-router-dom';
import { useCart } from "react-use-cart";




function Success(props) {

    useEffect(() => {
        if (props.state != false) {
            handleShow();
        }
    }, [props.state]);


    const { removeItem, items } = useCart();



    const [show, setShow] = useState(props.state);

    console.log(show);

    const handleClose = () => {
        setShow(false);
        items.map((element) => {
            removeItem(element.id);
        })
    }
    
    const handleShow = () => setShow(true);


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <Player src={animation} background="transparent" speed="1" style={{ width: "60%", height: "50%" }} keepLastFrame autoplay></Player>
                    <h3 className='mt-3 text-center'>Your Order Has Been Placed Successfully !</h3>
                </Modal.Body>
                <Modal.Footer>
                    <NavLink className='mx-auto' to="/"><Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </NavLink>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Success;
