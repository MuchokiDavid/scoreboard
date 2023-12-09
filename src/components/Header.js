import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timer from './Timer';

function Header() {
  return (
    <div >
        <Container>
            <Row className='bg-blue-300'>
                <Col>Totals</Col>
                <Col><h1>SCOREBOARD</h1></Col>
                <Col className='pe-8'><Timer/></Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default Header