import React from 'react';
import '../App.css';
import './pdp.css'
import Button from 'react-bootstrap/Button';
import { products } from './constants'

export default class Pdp extends React.Component {

    el = products.find(product => product.id === this.props.productId)

    addToCartCount(props) {
        props.addCartCount();
    }

    render() {

        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="breadCrumb">../{this.el.Category}/{this.el.shortDescription}</div>
                </div>
                <div className="row">
                    <div className="col-sm-3" >
                        <div><img src={require('../images/' + this.el.image)} className="carouselImg" alt="" /></div>
                    </div>
                    <div className="col-sm-9">
                        <div style={{ textAlign: "left" }}>
                            <span style={{ fontWeight: "bold" }}>Description:</span> {this.el.shortDescription}<br></br>
                            <span style={{ fontWeight: "bold" }}> Category: </span>{this.el.Category}<br></br>
                            <span style={{ color: "red" }} className="strikeprice">Actual Price: ${this.el.listprice}</span> <br></br>
                            <span style={{ color: "green" }}>Selling Price: ${this.el.sellingprice} - (Savings : ${this.el.listprice - this.el.sellingprice})</span>
                        
                            <div>
                                <Button variant="primary" onClick={() => this.addToCartCount(this.props)}>Add To Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
