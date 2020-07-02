import React, { Component } from 'react';
import './cart.css';
import { Button } from 'react-bootstrap';
import { products } from './constants'

class Cart extends Component {

    handleProceedToCheckout(props) {
        props.checkoutClicked('checkout');
    }

    el = products.find(product => product.id === this.props.productId)

    render() {
        return (
            <div className="container-fluid">
                <div className="row textalignleft">
                    <div className="col-sm-3">
                        <img src={require('../images/' + this.el.image)} alt='smiley' className="carouselImg" />
                    </div>
                    <div className="col-sm-3">
                        <span style={{ fontWeight: "bold" }}> {this.el.shortDescription}</span><br />
                        <div ><input type="checkbox" id="shipit" value="true" />
                            <label >Ship It</label><br></br></div>
                        <div >In stock</div>
                    </div>

                    <div className="col-sm-3">
                        <div>Qty</div>
                        <div><input id="qty" value={this.props.qty} className="qtyBox" readOnly></input></div>
                        <div className="textalignleft">Price  <div className="strikeprice">${this.el.listprice}</div> <span>${this.el.sellingprice}</span></div>
                    </div>

                    <div className="col-sm-3">
                        
                    <div>Sub Total : ${this.el.sellingprice * this.props.qty}</div>
                            <div><Button variant="primary" onClick={() => this.handleProceedToCheckout(this.props)}>Proceed to checkout</Button></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;