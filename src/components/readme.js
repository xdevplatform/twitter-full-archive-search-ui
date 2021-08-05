import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


class Readme extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <h3>A demo app for Twitter Enterprise API</h3>
                    <p>
                        Powered by DevRel - Developer Platform
                    </p>
                    <CardDeck>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>How it works?</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Search</Card.Subtitle>
                                <Card.Text>
                                    Put in a Twitter handle you want to analyze and click 'Search'. Thats it.
                             </Card.Text>
                                <Card.Link href="#/home">Try it out</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>What is the output?</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Search Results</Card.Subtitle>
                                <Card.Text>
                                    The search results are captured in a report
                             </Card.Text>
                                <Card.Link href="#/analytics">Sample Report</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>What's the big deal?</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Demo Tweets that really matter, for your customer and prospects</Card.Subtitle>
                                <Card.Text>
                                    We sell Tweets via Enterprise API. Slice and dice the Tweets with Annotations (Topics of Interest), Public Metrics, Followers and illustrate the Tweets which could make an impact.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <p></p>
                    <CardDeck>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>What type of Reports can I see?</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Twitter Handle Reports</Card.Subtitle>
                                <Card.Text>

                                </Card.Text>
                                <Card.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5/page/ZMC7B">Context Annotations</Card.Link>
                                <Card.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5/page/zyD9B">Entity Annotations</Card.Link>
                                <Card.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5/page/EhC7B">Annotations Slice N Dice</Card.Link>
                                <Card.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5/page/YgWKC">Followers - Topic of Interest</Card.Link>
                                <Card.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5/page/bsC7B">Hashtags and Mentions</Card.Link>
                                <Card.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5/page/FlC9B">Search Tweets</Card.Link>
                                <Card.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5/page/FnD7B">Tweet Resonance</Card.Link>
                                <Card.Link href="https://datastudio.google.com/reporting/1975351a-f4cd-43fc-942a-3a8d496dccd5/page/8njIC">Twitter Handles Report</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>How many Tweets does the report show up?</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">50K - 200K Tweets</Card.Subtitle>
                                <Card.Text>
                                    Depends on the search handle, sometimes for a business handle like @McDonalds it can be upto 200K Tweets. The app searches the Twitter handle timeline from yesterday to 2021 Jan 01.
                             </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>My Twitter handle is not showing up in the report filter/dropdown</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Please wait for 2-3 minutes and do a hard referesh of the report</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <p></p>
                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title>How do I hard refresh the report?</Card.Title>
                                <Card.Text>
                                    On the report (DataStudio) click the stacked dots icon and refresh data as highlighted in the red rectangle below
      </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src="hard-refresh.png" />
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>This is great, but not useful, I need a verticalized / industry specific app</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Solution Architects</Card.Subtitle>
                                <Card.Text>
                                    Please get in touch with DevRel - Solution Architects / Nikki Golding & team
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