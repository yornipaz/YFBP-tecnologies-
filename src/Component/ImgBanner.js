import React from 'react';
import {Image} from 'react-bootstrap';

function ImgBanner({srcImg}) {
    return(<Image style={{height:'14rem',backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',backgroundPosition: 'center',width:'100%'}} src={srcImg} fluid></Image>);
    
};

export default ImgBanner;