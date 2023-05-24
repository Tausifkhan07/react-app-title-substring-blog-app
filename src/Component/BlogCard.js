import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap';
// BlogCardData api call belwo 
import { BlogCardData } from '../Component/Api';

const BlogCard = () => {
    return (
        <div>
            <Container>
                <div className='text-[#333] text-4xl text-center my-[30px] font-bold'>Blogs</div>
                <Row xs={2} md={3} className="g-5 my-2 justify-center md:justify-start">
                    {
                        BlogCardData.map(({id, title, dec, image}) => {
                            return (
                                <Col key={id} style={{ width: '18rem' }}>
                                    <Card>
                                        <Card.Img variant="top" src={image} />
                                        <Card.Body>
                                            <Card.Title title={title} className='fw-bold'>{(title.length >= 18) ? `${title.slice(0, 18)}...` : title}</Card.Title>
                                            <Card.Text title={dec}>{(dec.length >= 60) ? `${dec.slice(0, 60)}...` : dec}</Card.Text>
                                            <Link className='text-decoration-none text-white bg-danger d-inline-block py-2 px-3' to={`/blogdetails/${id}`}>Red more</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div >
    )
}

export default BlogCard;
