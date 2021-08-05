import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

class Analytics extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Alert variant="success">
                        <Alert.Heading>Search Results</Alert.Heading>
                        <hr />
                        <p className="mb-1">
                            <Alert.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5" target="_blank">Click Me!</Alert.Link>
                        </p>
                    </Alert>
                </div>
            </div>
        );
    }
}

export default Analytics;