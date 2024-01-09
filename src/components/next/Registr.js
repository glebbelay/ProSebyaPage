import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

import '../../css/components/_classes.scss'
import '../../css/components/_header.scss'

import '../../css/reg.css'

function Registr() {
    const [showError, setShowError] = useState(false);

    const [formData, setFormData] = useState({ 
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  return (
    <div style={{marginTop: "200px"}}>
    <Container>
    <Row>
        <Col>
        <div className="form-container-login">
            <div style={{textAlign: 'center'}}>
                <a href='/reg' className="navbar-links">Регистрация</a>
                <a><p style={{fontWeight: 'bold', marginRight: '5px', marginLeft: '5px'}}>/</p></a>
                <a href='/login' className="navbar-links">Вход</a>
            </div>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail" seze="lg" >
                    <div className="title">
                        <Form.Label>Войдите, чтобы начать работу</Form.Label>
                    </div>
                    <Form.Control
                    style={{height: '50px', borderRadius: '25px'}}
                        seze="lg"
                        type="text"
                        name="username"
                        placeholder="Email"
                        className='login'
                        value={formData.username}
                        onChange={handleInputChange}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" seze="lg" >
                    <Form.Control
                        style={{height: '50px', borderRadius: '25px'}}
                        seze="lg"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        className='login'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" seze="lg" >
                    <Form.Control
                        style={{height: '50px', borderRadius: '25px'}}
                        seze="lg"
                        type="password"
                        name="password"
                        placeholder="Повторите пароль"
                        className='login'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Row>
                <Col>
                <Alert show={showError} variant="danger" className='custom-alert' onClose={() => setShowError(false)} dismissible>
                            Неправильный логин или пароль
                        </Alert>
                </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'right', }}>
                        <Button className='button' variant="dark" size='lg' type="submit">
                            Зарегистрироваться
                        </Button>
                    </Col>
                </Row>

            </Form>
        </div>
        </Col>
        </Row>
        
    </Container>
    </div>
  )
}

export default Registr