import React from 'react'
import PlayerForm from './PlayerForm'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer({handleForm}) {

  return (
    <div>
            <Container>
                <Row className='bg-blue-300 mt-5 h-12'>
                    <Col className='m-1'><PlayerForm handleForm = {handleForm}/></Col>
                </Row>
            </Container>
    </div>
  )
}

export default Footer