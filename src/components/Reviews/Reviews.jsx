import React from 'react';
import {Carousel,Container,Image} from 'react-bootstrap';
import './Review.css';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    reviews: {
        margin: '50px 80px',
        display: 'flex',
        justifyContent: 'flex-end'
    }
})

const Reviews = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <Image
                        className="d-block w-100"
                        src="https://myeasol.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWt4T0dSaVkyRTJaUzAwWmpsakxUUXhNRE10T0dNMllTMHdZelE0TXpJME9USTVNR1lHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--60d97334cc9520b715199b9cf6d56ac79581e5d9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lKZURZd01BWTZCa1ZVIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--1dd59bcaa66971738b1a98296ccf469b4cc1b5fd/Balloons-Cappadocia%20(1).jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Client</h3>
                        <p>Review from</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Image
                        className="d-block w-100 "
                        src="https://wacdn-img1.secure.footprint.net/media/20320/ballon-race_feature.jpg?v=635858861340000000"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second Client</h3>
                        <p>Review from them</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0032/2430/5773/files/assistance_8.png?v=1573502401"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third Client</h3>
                        <p>Review from them</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image
                        className="d-block w-100 contain"
                        src="https://www.winetouradventure.com/wta-new/wp-content/uploads/2019/04/wta-baloon-flight.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Four Client</h3>
                        <p>Review from them</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image
                        className="d-block w-100 h-100"
                        src="https://www.laughlinnevada.net/AccountData/150269690/slide6.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Fifth Client</h3>
                        <p>Review from them</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <div classname="reviews" style={{margin: '50px 60px'}}>
                <p>Мне очень понравился воздушный шар</p>
            </div> */}
            </>
    );
};

export default Reviews;