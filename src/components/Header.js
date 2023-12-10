import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timer from './Timer';
import Total from './Total';

function Header() {
  return (
    <div >
        <Container>
            <Row className='bg-blue-300'>
                <Col className='pe-8 bg-blue-900'><Total/></Col>
                <Col><h1>SCOREBOARD</h1></Col>
                <Col className='pe-8 bg-blue-900'><Timer/></Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default Header