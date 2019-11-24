import React from 'react';
import { Card } from 'react-bootstrap';
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CardPrice({ title, price, img }) {
    return (
        <Card className="card text-center mx-auto" style={{ width: '16rem', marginBottom: '2rem', boxShadow: '0 5px 6px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }} >
            <Card.Img variant="top" src={img} style={{ height: "10rem" }} />
            <Card.Body>

                <Card.Title>{title}</Card.Title>
                <Card.Subtitle ><FontAwesomeIcon style={{color: '#009432', fontSize: '1.5rem',marginRight:'0.02rem'}} icon={faCoins}></FontAwesomeIcon><span style={{ color: '#009432', fontWeight: 700, fontSize: '1.5rem',marginRight:'0.02rem' }}>:$</span><span style={{ color: '#F79F1F', fontWeight: 700, fontSize: '1.7rem' }}>{price}</span><span style={{ color: '#2c3e50',fontWeight: 700,fontSize:'1.4rem' }} > x Kg</span></Card.Subtitle>

            </Card.Body>
        </Card >
    );

};

export default CardPrice;