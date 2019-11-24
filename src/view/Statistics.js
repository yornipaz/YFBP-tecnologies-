import React, { Component } from 'react';
import Header from '../Component/Header';
import ImgBanner from '../Component/ImgBanner';
import Footer from '../Component/Footer';
import imgBanner2 from '../Img/Prices.jpg';
import imgBanner from '../Img/StatiBaner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleGrafic from '../Component/TitleGrafic';
import { arrayProductStatic1, arrayProductStatic2 } from '../Constant/ProductStatis';
import ProductGrafic from '../Component/ProductGrafic';
import { Container, Row, Col } from 'react-bootstrap';
import TitleSection from '../Component/Titlesection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Statictis: [],
            contRight: 1,
            contLeft: 1,
            imgBan:imgBanner,
            styleLeft: { fontSize: '6rem', color: '#95a5a6' },
            styleRight: { fontSize: '6rem', color: '#27ae60' }
        };
        this.outputEventRight = this.outputEventRight.bind(this);
        this.outputEventLeft = this.outputEventLeft.bind(this);
    }
    NavegactionPage(arrayStatics) {
        this.setState({ Statictis: arrayStatics });
    }
    componentDidMount() {
        this.NavegactionPage(arrayProductStatic1)

    }
    outputEventRight(right) {

        this.setState({ styleLeft: { fontSize: '6rem', color: '#27ae60' }, contRight: (this.state.contRight + 1),imgBan:imgBanner2  })
        this.NavegactionPage(arrayProductStatic2)

        if ((this.state.contRight === 1)) {
            this.setState({ styleRight: { fontSize: '6rem', color: '#95a5a6' }, styleLeft: { fontSize: '6rem', color: '#27ae60' }, contRight: 1 })

        }


    }
    outputEventLeft(left) {
        this.NavegactionPage(arrayProductStatic1)
        this.setState({ styleLeft: { fontSize: '6rem', color: '#27ae60' }, contLeft: (this.state.contLeft + 1),imgBan:imgBanner })
        if ((this.state.contLeft === 1)) {
            this.setState({ styleLeft: { fontSize: '6rem', color: '#95a5a6' }, styleRight: { fontSize: '6rem', color: '#27ae60' }, contLeft: 1 })

        }


    }
    render() {

        const stactisPro = this.state.Statictis.map(stacti => {
            return (
                <Col md={4}>
                    <TitleGrafic title={stacti.title}></TitleGrafic>
                    <ProductGrafic data={stacti} ></ProductGrafic>
                </Col>

            )
        })
        return (<div><Header active={"#Estadistica"}></Header>
            <ImgBanner srcImg={this.state.imgBan}></ImgBanner>
            <TitleSection titleSection={"Las Estadisticas del mungo agro del pais"} ></TitleSection>
            <Container fluid className="d-flex justify-content-center">
                <Row>
                    {stactisPro}
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

export default Statistics;