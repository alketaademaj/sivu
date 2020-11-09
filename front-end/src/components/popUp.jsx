import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";

export class PopUp extends Component {
    render() {
        return (
            <div>
                <Modal show={ this.props.show } onHide={ this.props.closeModal }>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.homePage}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default PopUp
