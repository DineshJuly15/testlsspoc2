import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    //  handleSetCartDialogPage  (props) {
    //    props.setDialogPageName('cart');
    //}

    render() {
        return (

            <div class="container-fluid header">
                <div className="row">
                    <div className="col-sm-1 col-lg-2 header-logo" >
                        <span>livestreamshop.com</span>
                    </div>
                    <div className="col-sm-1 col-lg-4 header-logo" >
                    </div>
                    <div className="col-sm-1 col-lg-4 header-logo" >
                    </div>
                    <div className="col-sm-1 col-lg-2 header-content" >
                    <span className="signIn">
                        SignIn</span>
                    <span className="cart" >Cart(0)</span>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Header;
