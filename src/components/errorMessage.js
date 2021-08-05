import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert'

class ErrorMessage extends React.Component {
    render() {
        return (
            <div>
                <Alert variant="danger">
                    <Alert.Heading>Oh snap! Not a valid Twitter handle!</Alert.Heading>
                </Alert>
            </div>
        );
    }
}

export default ErrorMessage;