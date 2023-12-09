import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function Timer() {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let timer;
        if (isRunning) {
        timer = setInterval(() => setCounter((prevCounter) => prevCounter + 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const handleStart = () => {
        setCounter(0);
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };
    const handleContinue = () => {
        setIsRunning(true);
    };

  return (
    <div >
        <div className='bg-blue-900 text-white '>
           <Row><h5>STOPWATCH</h5></Row>
            <Row>
                <Col><h1>{counter}</h1></Col>
            </Row>
            <Row>
                <Col><Button onClick={handleStart}>Reset</Button> <Button onClick={handlePause}>Stop</Button> <Button onClick={handleContinue}>Start</Button></Col>
            </Row> 
        </div>
        
        
    </div>
  )
}

export default Timer