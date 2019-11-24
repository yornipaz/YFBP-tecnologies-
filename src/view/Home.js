import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Component/Header';
import ImgBanner from '../Component/ImgBanner';
import imgBanner from '../Img/u18.png';
import CardNew from '../Component/CardNew';
import CardPrice from '../Component/CardPrice';
import Footer from '../Component/Footer';
import TitleGrafic from '../Component/TitleGrafic';
import ProductGrafic from '../Component/ProductGrafic';
import TitleSection from '../Component/Titlesection';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { arrayProductHome } from '../Constant/ProductStatis';
import  firebaseWord from '../Constant/ConfigFirebases';
import {Link} from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Statictis: [],
            News: [],
            Prices: []

        }
    }
   
   
    componentDidMount() {
        const dataNews = firebaseWord.database().ref('Home').child('News');
        const dataPrices = firebaseWord.database().ref('Home').child('Products');
        const addNews = [];
        const addPrices = [];
        this.setState({Statictis:arrayProductHome})


        dataPrices.on('value', (snapchot) => {
            const dataPrice = snapchot.val()
            for (const key in dataPrice) {
                addPrices.push(
                    {
                        name: dataPrice[key].Nombre,
                        price: dataPrice[key].Precio,
                        src: dataPrice[key].src

                    }
                )

            }
            this.setState({
                Prices: addPrices
            })
        });
        dataNews.on('value', (snapchot) => {
            const dataNew = snapchot.val();

            for (const key in dataNew) {
                addNews.push(
                    {
                        title: dataNew[key].titulo,
                        src: dataNew[key].src,
                        desc: dataNew[key].desc,
                        url: dataNew[key].url

                    }
                )

            }
            this.setState({
                News: addNews
            })


        });


    }
    render() {

        const stactisPro = this.state.Statictis.map(stacti => {
            return (
                <Col md={4}>
                    <TitleGrafic title={stacti.title} ></TitleGrafic>
                    <ProductGrafic data={stacti} ></ProductGrafic>
                </Col>

            )
        })
        const NewsPro = this.state.News.map(news => {
            return (
                <Col md={3}>
                    <CardNew title={news.title} desCard={news.desc} urlNew={news.url} srcNew={news.src}></CardNew>

                </Col>

            )
        })
        const PricesPro = this.state.Prices.map(prices => {
            return (
                <Col md={3}>
                    <CardPrice title={prices.name} price={prices.price} img={prices.src}></CardPrice>
                </Col>
            )
        })
        return (<div>
            <Header active={"#home"}></Header>
            <ImgBanner srcImg={imgBanner}></ImgBanner>
            <TitleSection titleSection={"Noticias destacadas"} ></TitleSection>
            <Container fluid className="d-flex justify-content-center">

                <Row>
                    {NewsPro}

                </Row>
            </Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
             <Link to="/News">   <Button  style={{ marginTop: '2rem', textAlign: 'center', color: '#212529', textTransform: 'uppercase', fontWeight: 700 }} variant="success">Ver Todas las Noticias</Button></Link>
            </div>

            <TitleSection titleSection={"Precios destacadas"} ></TitleSection>
            <div fluid className="d-flex justify-content-center">

                <Row>
                    {PricesPro}
                </Row>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/Prices">  <Button  style={{ marginTop: '2rem', textAlign: 'center', color: '#212529', textTransform: 'uppercase', fontWeight: 700 }} variant="success">Ver Todos Los Precios</Button></Link>
            </div>

            <TitleSection titleSection={"Estadisticas de los precios destacados"} ></TitleSection>
            <Container fluid className="d-flex justify-content-center">
                <Row>
                    {stactisPro}

                </Row>
            </Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/Statistics">   <Button  style={{ marginTop: '2rem', textAlign: 'center', color: '#212529', textTransform: 'uppercase', fontWeight: 700 }} variant="success">Ver Todas Las Estadisticas</Button> </Link>

            </div>

            <Footer></Footer>

        </div>);
    }
}
export default Home;