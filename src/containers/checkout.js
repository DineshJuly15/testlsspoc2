import React, { Component } from 'react';
import './common.css';
import {Button, Form} from 'react-bootstrap';

class Checkout extends Component {

    submitOrder (props) {
        props.placeOrder('orderConfirmation');
    }

    render() {
        return (
            <div>
                <Form className="textalignleft">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="firstName" placeholder="First Name" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="LastName" placeholder="Last Name" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicAddress1">
                        <Form.Label>Address1</Form.Label>
                        <Form.Control type="address1" placeholder="Address 1" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicAddress2">
                        <Form.Label>Address2</Form.Label>
                        <Form.Control type="address2" placeholder="Address 2" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="city" placeholder="City" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="state" placeholder="State" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicZipcode">
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control type="zipcode" placeholder="Zipcode" />
                    </Form.Group>
                    
                </Form>
                <Button variant="primary" type="submit" onClick={() => this.submitOrder(this.props)}>
                        Submit and Place Order
                    </Button>
            </div>
        )
    }
}

export default Checkout; 