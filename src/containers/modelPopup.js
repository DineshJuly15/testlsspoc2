import React from 'react';
import '../App.css';
import './pdp.css'
import Pdp from './pdp';
import Footer from './footer';
import Cart from './cart'
import Checkout from './checkout'
import OrderConfirmation from './orderConfirmation';

export default class ModelPopup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dialogPage: 'pdp',
      cartCount: 0
    }
  }

  cartClicked = () => {
    if (this.state.cartCount === 0) {
      return false;
    }
    this.setState({
      dialogPage: 'cart'
    });
  }


  setCheckoutPageName = pageName => {
    this.setState({
      dialogPage: pageName
    });
  }

  placeOrder = pageName => {
    this.setState({
      dialogPage: pageName
    });
  }

  setCartCount = () => {
    this.setState({
      cartCount: this.state.cartCount + 1
    });
  }

  render() {
    return (
      <div className="App">
        <div class="container-fluid header-popup">
          <div className="row">
            <div className="col-sm-1 col-lg-6 header-logo-popup" >
              <span>livestreamshop.com</span>
            </div>
            
            <div className="col-sm-1 col-lg-3 header-content-popup" >
              <span className="signIn">
                SignIn</span>
            </div>
            <div className="col-sm-1 col-lg-3 header-content-popup" >
              {this.state.dialogPage === 'pdp' && (<span className="cart" onClick={this.cartClicked}>Cart({this.state.cartCount})</span>)}
            </div>
          </div>
        </div>

        <div className="content">
          {this.state.dialogPage === 'pdp' && <Pdp productId={this.props.productId} addCartCount={this.setCartCount} />}
          {this.state.dialogPage === 'cart' && <Cart productId={this.props.productId} qty={this.state.cartCount} checkoutClicked={this.setCheckoutPageName} />}
          {this.state.dialogPage === 'checkout' && <Checkout productId={this.props.productId} placeOrder={this.placeOrder} />}
          {this.state.dialogPage === 'orderConfirmation' && <OrderConfirmation />}
        </div>
        <Footer />
      </div >

    )
  }
}
