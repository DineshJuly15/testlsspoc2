import React, { Component } from 'react';
import './common.css';
import { Button, Badge } from 'react-bootstrap';

export default class Checkout extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 col-lg-12" >
                        Your Order has been placed successfully <Badge variant="light">Order Id : 123456</Badge>
                    </div>
                </div>

            </div>
        )
    }
}