import React, { Component } from 'react';
import Header from '../Component/Header';
import ImgBanner from '../Component/ImgBanner';
import Footer from '../Component/Footer';
import imgBanner from '../Img/PricesBaner.png';
import imgBanner2 from '../Img/Prices.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPrice from '../Component/CardPrice';
import { Container, Row, Col } from 'react-bootstrap';
import  firebaseWord from '../Constant/ConfigFirebases';
import TitleSection from '../Component/Titlesection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Prices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prices: [],
            contRight: 1,
            contLeft: 1,
            imgBan:imgBanner,
            styleLeft: { fontSize: '6rem', color: '#95a5a6' },
            styleRight: { fontSize: '6rem', color: '#27ae60' }
        };
        this.outputEventRight = this.outputEventRight.bind(this);
        this.outputEventLeft = this.outputEventLeft.bind(this);
    }
   
    NavegactionPage(childPague) {
        const dataPrices = firebaseWord.database().ref('Prices').child(childPague);
        const addPrices = [];

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
    }
    componentDidMount() {
        this.NavegactionPage('PricesPage1')

    }
    outputEventRight(right) {

        this.setState({ styleLeft: { fontSize: '6rem', color: '#27ae60' }, contRight: (this.state.contRight + 1),imgBan:imgBanner2 })
        this.NavegactionPage('PricesPage2')

        if ((this.state.contRight === 1)) {
            this.setState({ styleRight: { fontSize: '6rem', color: '#95a5a6' }, styleLeft: { fontSize: '6rem', color: '#27ae60' }, contRight: 1 })

        }


    }
    outputEventLeft(left) {
        this.NavegactionPage('PricesPage1')
        this.setState({ styleLeft: { fontSize: '6rem', color: '#27ae60' }, contLeft: (this.state.contLeft + 1),imgBan:imgBanner })
        if ((this.state.contLeft === 1)) {
            this.setState({ styleLeft: { fontSize: '6rem', color: '#95a5a6' }, styleRight: { fontSize: '6rem', color: '#27ae60' }, contLeft: 1 })

        }


    }
    render() {
        const PricesPro = this.state.Prices.map(prices => {
            return (
                <Col md={3}>
                    <CardPrice title={prices.name} price={prices.price} img={prices.src}></CardPrice>
                </Col>
            )
        })
        return (<div>
            <Header active={"#Precios"}></Header>
            <ImgBanner srcImg={this.state.imgBan}></ImgBanner>
            <TitleSection titleSection={" los Precios  de los produtos agricolas "} ></TitleSection>
            <Container fluid className="d-flex justify-content-center">
                <Row>
                    {PricesPro}
                </Row>
            </Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Pagina contL={this.state.styleLeft} contR={this.state.styleRight} styleLeft={this.state.styleLeft} styleRight={this.state.styleRight} clickHandlerRight={this.outputEventRight} clickHandlerLeft={this.outputEventLeft}></Pagina>
            </div>
            <Footer></Footer>
        </div>
        )
    }


}
class Pagina extends Component {


    render() {
        const { styleRight, styleLeft, contR, contL } = this.props;
        console.log("Contador R" + contR)
        console.log('Contador L' + contL)

        return (<div className="o-pagination">
            <FontAwesomeIcon style={styleLeft} className="mr-4" onClick={this.props.clickHandlerLeft} icon={faAngleLeft} />


            <FontAwesomeIcon style={styleRight} className="mr-4 o-right" onClick={this.props.clickHandlerRight} icon={faAngleRight} />

        </div>

        )
    }
}

export default Prices;