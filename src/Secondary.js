import React from 'react';

class Secondary extends React.Component {

 handleSetCartDialogPage  (props) {
      props.setDialogPageName('cart');
  }

    render() {
        return (
            <div className="header">
                <br></br>
                <div className="header-logo">
                    <span>e-site</span>
                
                </div>
                <div className="header-content">                    
                    <span className="signIn">
                    Sign In</span>
                    <span className="cart" ><button onClick={() => this.handleSetCartDialogPage(this.props)}>Cart(0)</button></span>
                </div>
            </div>
        )
    }
}
export default Secondary;
