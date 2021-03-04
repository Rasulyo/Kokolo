import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const About = () => {
    return (
        <div style={{ padding: '25px', paddingBottom: "100px"}}>

        <CardGroup style={{borderRadius: '80%', padding: '25px', paddingBottom: "100px"}}>
            <Card>
                <Card.Img style={{ cursor: 'pointer'}} variant="top" src="https://www.masala.com/public/images/2020/02/04/balloon2.jpg" />
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>More than 3000 thousand satisfied customers</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img style={{ cursor: 'pointer' }} variant="top" src="https://million-wallpapers.ru/wallpapers/4/37/14501089269842545955/ogromnoe-kolichestvo-vozdushnyx-sharov-na-vzletnoj-polose.jpg" />
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>More than 15 types of balloons on the base</Card.Title>
                    <Card.Text>
                        We have more than 15 types of different balloons at our base, which differ in size, flight power and design. Each balloon has a unique beauty{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img style={{ cursor: 'pointer' }} variant="top" src="https://www.absolutelankatours.com/wp-content/uploads/2019/03/Hot-Air-Ballooning-Sri-Lanka.jpg" />
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>Safe equipment guarantee</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
            </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
        </div>
    );
};

export default About;