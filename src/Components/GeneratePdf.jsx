import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core'
import '../Styles/style.css';
import Pdf from '../utils/PdfGen';

export default class GeneratePdf extends Component {
    constructor(props){
        super(props);
        this.bodyRef = React.createRef();
    }
    render() {
        const { sign1, sign2, name1, name2, title1, title2, venueName, selectedDate, generate } = this.props.details;
        console.log("generate: " + generate)
        if(generate===true){
            Pdf.createPdf(this.bodyRef.current)
        }
        return (
            <Container ref={this.bodyRef} maxWidth="lg">
                <div className="agreement-container" >
                   <h2>Agreement between VenueMonk.com and {venueName} </h2>
                    
                   <p>We are delighted to have partnered with {venueName} for all event enquiries that <b>Venue Monk</b> shall generate for {venueName} in future as per the below points:</p>
                    <ol>
                        <li><p><b>Venue Monk</b>&nbsp; shall share all qualifying leads for {venueName} through an Email/ WhatSapp/ SMS to the hotel.</p></li>
                        <li><p>{venueName} shall also do its best to give utmost efforts to help close leads generated by VenueMonk.</p></li>
                        <li><p>This agreement is effective from Date {selectedDate.toString()}, and shall remain effective for (01) year from the date of signing</p></li>
                        <li><p>Commission rate of per person will be paid by {venueName} to Venue Monk for all confirmed business as per the Grid below:</p></li>
                    </ol>
                    <table>
                        <thead>
                            <tr>
                                <th>Venue</th>
                                <th>Rate Grid</th>
                                <th>Applicable Commission</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{venueName}</td>
                                <td>As per Closure Rate</td>
                                <td>10% + GST of Total Revenue</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="payment-terms">
                        <div className="left-heading">
                            <h3>Payment Terms</h3>
                        </div>
                        <div className="content">
                            <span className="content-data"><span className="bold">Payment needs to be done by the Merchant to VenueMonk within 7 working days from the date of the event </span>&nbsp; by either through cheque issued in favour of "PURPLEPATCH ONLINE SERVICES PRIVATE LIMITED" or by making online account transfer to the following account:</span>
                            <div className="bank-details">
                                <span><span className="bold">Account Name:</span>&emsp; PurplePatch Online Services Private Limited</span>
                                <span><span className="bold">Account Number:</span>&emsp; 103105001509</span>
                                <span><span className="bold">IFSC Code:</span>&emsp; ICIC0001031</span>
                                <span><span className="bold">Bank:</span>&emsp; ICICI</span>
                            </div>
                            <p><b>Important Note:</b>&nbsp; After 7 working days, a late payment fine of 1% for every 15 days of delay would be levied.</p>
                            
                            <p>This agreement may be extended automatically unless otherwise informed by either party.</p>
                        </div>
                        <Grid container spacing={2} className="content">
                            <Grid item xs={6}>
                                <div>
                                    <h4>For Behalf Venue Monk</h4>
                                    <div className="agreement-bottom">
                                        <span><span className="bold">Name: </span> {name1}</span>
                                        <span><span className="bold">Title: </span> {title1}</span>
                                        <span><span className="bold">Signature: </span><br /> <img className="agreement-signature" src={sign1} /></span>
                                        <span><span className="bold">Date: </span> {selectedDate.toString()}</span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>
                                    <h4>For Behalf of Venue</h4>
                                    <div className="agreement-bottom">
                                        <span><span className="bold">Name: </span> {name2}</span>
                                        <span><span className="bold">Title: </span> {title2}</span>
                                        <span><span className="bold">Signature: </span><br /> <img className="agreement-signature" src={sign2} /></span>
                                        <span><span className="bold">Date: </span> {selectedDate.toString()}</span>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        )
    }
}