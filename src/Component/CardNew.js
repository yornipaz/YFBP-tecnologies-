import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardNew({ title, desCard, urlNew,srcNew } ) {
  return (
    <Card className="card text-center mx-auto" style={{ width: '16rem',height:'26rem',marginBottom:'2rem', boxShadow: '0 5px 6px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }} >
      <Card.Img variant="top" src={srcNew} style={{ height: "10rem", overflow: "hidden" }} />
      <Card.Body style={{ height: "10rem",justifyContent:'center'}} >
        <Card.Title style={{ textAlign: 'initial', fontSize:'.8rem',textTransform: 'uppercase',fontWeight:700}}>{title}</Card.Title>
        <Card.Text style={{textAlign:'justify', fontSize:'.8rem'  }}>{desCard}</Card.Text>
        <Button href={urlNew} target="_blank"  style={{ justifyContent: 'center' }} variant="outline-success" >Ver Noticia</Button>
      </Card.Body>
    </Card >
  );


};

export default CardNew;