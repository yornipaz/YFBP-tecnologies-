import React, { Component } from 'react';
import Header from '../Component/Header';
import ImgBanner from '../Component/ImgBanner';
import Footer from '../Component/Footer';
import imgBanner from '../Img/Stati.jpg';
import imgBanner2 from '../Img/News.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardNew from '../Component/CardNew';
import { Container, Row, Col } from 'react-bootstrap';
import  firebaseWord from '../Constant/ConfigFirebases';
import TitleSection from '../Component/Titlesection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            News: [],
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

        const dataNews = firebaseWord.database().ref('News').child(childPague);
        const addNews = [];
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
    componentDidMount() {
        this.NavegactionPage('NewsPage1')

    }
    outputEventRight(right) {

        this.setState({ styleLeft: { fontSize: '6rem', color: '#27ae60' }, contRight: (this.state.contRight + 1),imgBan:imgBanner2 })
        this.NavegactionPage('NewsPage2')

        if ((this.state.contRight === 1)) {
            this.setState({ styleRight: { fontSize: '6rem', color: '#95a5a6' }, styleLeft: { fontSize: '6rem', color: '#27ae60' }, contRight: 1 })

        }


    }
    outputEventLeft(left) {
        this.NavegactionPage('NewsPage1')
        this.setState({ styleLeft: { fontSize: '6rem', color: '#27ae60' }, contLeft: (this.state.contLeft + 1),imgBan:imgBanner2 })
        if ((this.state.contLeft === 1)) {
            this.setState({ styleLeft: { fontSize: '6rem', color: '#95a5a6' }, styleRight: { fontSize: '6rem', color: '#27ae60' }, contLeft: 1 })

        }


    }

    render() {

        const NewsPro = this.state.News.map(news => {
            return (
                <Col md={3}>
                    <CardNew title={news.title} desCard={news.desc} urlNew={news.url} srcNew={news.src}></CardNew>

                </Col>

            )
        })
        return (<div>
            <Header active={"#Noticias"}></Header>
            <ImgBanner srcImg={this.state.imgBan}></ImgBanner>
            <TitleSection titleSection={"las noticias del mungo agro del pais"} ></TitleSection>
            <Container fluid className="d-flex justify-content-center">
                <Row>
                    {NewsPro}
                </Row>
            </Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Pagina styleLeft={this.state.styleLeft} styleRight={this.state.styleRight} clickHandlerRight={this.outputEventRight} clickHandlerLeft={this.outputEventLeft}></Pagina>
            </div>
            <Footer></Footer>
        </div>);
    }

}

class Pagina extends Component {


    render() {
        const { styleRight, styleLeft } = this.props;
        
        return (<div className="o-pagination">
            <FontAwesomeIcon style={styleLeft} className="mr-4" onClick={this.props.clickHandlerLeft} icon={faAngleLeft} />


            <FontAwesomeIcon style={styleRight} className="mr-4 o-right" onClick={this.props.clickHandlerRight} icon={faAngleRight} />

        </div>

        )
    }
}


export default News;