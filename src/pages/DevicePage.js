import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 13pro', price: 35000, rating: 5, img: 'data:image/jpeg;base64,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'}
    const description = [
        {id: 1, title: "Оперативная память", description: '5 гб'},
        {id: 2, title: "Камера", description: '12 мп'},
        {id: 3, title: "Процессор", description: ''},
        {id: 4, title: "Кол-во ядер", description: 'Пентиум 3'},
        {id: 5, title: "Аккамуоятор", description: '4000'},
    ]

    return (
        <Container className='mt-3 '>
          <Row>
          <Col md={4} className='d-flex flex-column align-items-center'>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4} className='d-flex flex-column justify-content-center align-items-center'>
                <Row className='d-flex flex-column align-items-center'>
                    <h2>{device.name}</h2>
                    <div className='d-flex align-item-center justify-content-center' style={{fontSize: 64}}>{device.rating}</div>
                </Row>
            </Col>
            <Col md={4}>
                <Card 
                style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                className='d-flex flex-column justify-content-center align-items-center'>
                    <h3>от: {device.price} руб.</h3>
                    <Button variant='outline-dark'>Добавить в корзину</Button>
                </Card>
            </Col>
          </Row>
          <Row className='d-flex flex-column m-3'>
            <h2>Характеристики:</h2>
            {description.map((info, index) =>
                <Row key={info.id} style={{padding: 10, background: index % 2 === 0? 'lightgray' : 'transparent'}}>
                    {info.title}: {info.description}
                </Row>)}
          </Row>
        </Container>
    );
};

export default DevicePage;