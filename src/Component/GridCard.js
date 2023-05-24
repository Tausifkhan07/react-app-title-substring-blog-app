import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import { GridCardData } from '../Component/Api'; to render item here below 
import {GridCardData} from '../Component/Api';

const GridCard = () => {

    return (
        <div>
            <Container>
            <div className='text-[#333] text-4xl text-center my-[30px] font-bold'>Services</div>
                <Row xs={1} md={2} className="g-4 my-2">
                    {
                        GridCardData.map((item, indx) => {
                            
                            return (
                                <Col key={indx} >
                                    <Card>
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title className='fw-bold'>{ (item.title.length >= 45) ? `${item.title.slice(0, 45)}...` : item.title}</Card.Title>
                                            <Card.Text>{(item.disc.length >= 120) ? `${item.disc.slice(0, 120)}...` : item.disc}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </div>
    )
}

export default GridCard;
