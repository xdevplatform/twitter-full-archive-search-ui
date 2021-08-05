import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


class SuccessMessage extends React.Component {
    render() {
        var show = true;
        return (
            <div>
                <div>
                    <Alert show={show} variant="success">
                        <Alert.Heading>Query, successful!</Alert.Heading>
                        <hr />
                        <p className="mb-1">
                            Might take couple of mins for the report to load, please refresh the report for updated results.
                            <Alert.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5" target="_blank"> Report Here!</Alert.Link>
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => window.location.reload(false)} variant="outline-success">
                                Dismiss
                            </Button></div>
                            <hr/>
                            <div>
                                <Image src="data_refresh.png" fluid />
                            </div>
                    </Alert>
                </div>
            </div>
        );
    }
}

export default SuccessMessage;