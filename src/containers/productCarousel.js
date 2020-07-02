import React from 'react';
import '../App.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export default class ProductCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //      dialogPage : 'pdp',
                showDialogState : false,
              setShowDialogState : false
        }
    }


    render() {
        
            const responsive = {
                superLargeDesktop: {
                    // the naming can be any, depends on you.
                    breakpoint: { max: 4000, min: 3000 },
                    items: 5
                },
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 3
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1
                }
            };

            function Example() {
                const [showDialog, setShowDialog] = React.useState(false);
                const open = () => setShowDialog(true);
                const close = () => setShowDialog(false);
                return (
                  <div>
                    
                    <Dialog style={{ color: "red" }} isOpen={showDialog} onDismiss={close}>
                      <p>My text is red because the style prop got applied to the div</p>
                      <button onClick={close}>Okay</button>
                    </Dialog>
                  </div>
                );
              }

            return (
        
            <Carousel responsive={responsive}>
            <div><table>
                <tbody>
                    <tr>
                        
        <button onClick={Example}>Show Dialog</button>
                     <td><img src={require('../images/shirt1.jpg')} className="carouselImg" alt="" /></td>
                        <td>
                            Mensshirt
                                </td>
                    </tr>
                </tbody>
            </table></div>
            <div><table>
                <tbody>
                    <tr>
                        <td><img src={require('../images/shirt1.jpg')} className="carouselImg" alt="" /></td>
                        <td>
                            Mensshirt
                                </td>
                    </tr>
                </tbody>
            </table></div>
            <div><table>
                <tbody>
                    <tr>
                        <td><img src={require('../images/shirt1.jpg')} className="carouselImg" alt="" /></td>
                        <td>
                            Mensshirt
                                </td>
                    </tr>
                </tbody>
            </table></div>
            <div><table>
                <tbody>
                    <tr>
                        <td><img src={require('../images/shirt1.jpg')} className="carouselImg" alt="" /></td>
                        <td>
                            Mensshirt
                                </td>
                    </tr>
                </tbody>
            </table></div>
        </Carousel>                   
        )
    }
}
