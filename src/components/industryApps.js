import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


class Readme extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <h3>Industry / Verticalized Reports built with this app</h3>
                    <p>
                        Powered by DevRel - Developer Platform
                    </p>
                    <CardDeck>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>How Quick Service Restaurants leverage Twitter?</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Burger Wars</Card.Subtitle>
                                <Card.Text>
                                    Did you know? McDonalds upcoming BTS meal launch, with just 4 tweets McD generated 1.2M likes on Twitter
                             </Card.Text>
                                <Card.Link href="https://datastudio.google.com/reporting/b2f7ed43-c7a3-4096-8d14-817e0c607aa2">Check it out</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>$TSLA cashtag analysis with Yahoo financials</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Financial Services</Card.Subtitle>
                                <Card.Text>
                                    Get the Tweets when $TSLA surges and plummets from Mar-Apr 21
                             </Card.Text>
                                <Card.Link href="https://datastudio.google.com/reporting/29570222-52e0-4fdc-95b2-316a34f77dc0">$TSLA here</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tweets on Hotels and Airlines during pandemic</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Travel - Crappy app</Card.Subtitle>
                                <Card.Text>
                                    Uses geo signals and surfaces not so useful Tweets, so go ahead and take a look and tell us how this can be improved
                             </Card.Text>
                             
                             <Card.Link href="https://datastudio.google.com/reporting/7a21ef31-64dc-4877-b4a1-afa3bcd434b4">Crap here</Card.Link>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <p></p>
                    <CardDeck>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>S&P 100 $Cashtags by the hour</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Finacial Services - Trend Analysis</Card.Subtitle>
                                <Card.Text>
                                    You won't see any cashtags on this app. Know why? This app streams ~400K Tweets/hour and we need to pay for the infra. So if you have a demo, we will turn it on
                             </Card.Text>
                                <Card.Link href="https://datastudio.google.com/reporting/4c6e5683-071a-4d71-8eb5-d255bf8b5a3c">S&P 100</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>How Airlines use Twitter?</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Travel</Card.Subtitle>
                                <Card.Text>
                                    Get the Tweets from popular Airline handles!
                             </Card.Text>
                                <Card.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5">Fly here</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>CPG - Analysis</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">CPG</Card.Subtitle>
                                <Card.Text>
                                    Coming soon
                             </Card.Text>
                             
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Jumbotron>
            </div>
        );
    }
}

export default Readme;