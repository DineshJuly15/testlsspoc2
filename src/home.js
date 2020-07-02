import React from 'react';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import ModelPopup from './containers/modelPopup';
import Footer from '../src/containers/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/containers/header';
import { products, responsive } from '../src/containers/constants';
import {
    Link
  } from "react-router-dom";

  
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      productId: 0
    }
  }

  open = (id) => {
    console.log("product id : "+id)
    this.setState({
      showDialog: true,
      productId: id
    });
  }

  close = () => {
    this.setState({
      showDialog: false
    });
  }

  render() {

    return (

        
      <div className="App">
      <Header />
      <div className="content">
        <div className="videoContent" >
          <iframe height="500" width="100%" frameBorder="0" title="videoStream" allow="fullscreen"
            src="https://dist.bambuser.net/player/?resourceUri=https%3A%2F%2Fcdn.bambuser.net%2Fgroups%2F94328%2Fbroadcasts%3Fby_authors%3D%26title_contains%3D%26has_any_tags%3D%26has_all_tags%3D%26da_id%3D36ef677f-c66d-ee44-dfc7-ec93ea33240d%26da_timestamp%3D1592919665%26da_signature_method%3DHMAC-SHA256%26da_ttl%3D0%26da_static%3D1%26da_signature%3D8554e87c1ac54888ab7c49730e0f0bf8c8418d503abf0b10ee13c2e559ea1e4a"
            webkitallowfullscreen="true"></iframe>
        </div>
        <div className="productCarousel">

          <Carousel responsive={responsive} autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={2000} infinite={true}>
            {products.map(el => (

              <button onClick={() => this.open(el.id)}>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td><img src={require('./images/'+el.image)} className="carouselImg" alt="" style={{width:"10em",height:"10em"}}/></td>
                        <td style={{ textAlign: "left" }}>
                          <span style={{ fontWeight: "bold" }}>Description:</span> {el.shortDescription}<br></br>
                          <span style={{ fontWeight: "bold" }}> Category: </span>{el.Category}<br></br>
                          <span style={{ color: "red" }}>Actual Price: ${el.listprice}</span> <br></br>
                          <span style={{ color: "green" }}>Selling Price: ${el.sellingprice}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </button>
            ))}

          </Carousel>
          <Dialog aria-label="" isOpen={this.state.showDialog} onDismiss={this.close} style={{ marginTop: '50vh' }}>
            <ModelPopup productId= {this.state.productId }/>
          </Dialog>

        </div>
      </div>
      <Footer />
    </div>

    );
  }
}

export default Home;
