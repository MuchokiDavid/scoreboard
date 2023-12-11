import React from 'react'
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header';
import { FaCrown } from "react-icons/fa";//black
import { LuCrown } from "react-icons/lu";//white
import { playerList } from '../data/ListPlayers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';


function Player() {
  const [player, setPlayer] = useState(playerList);
  const [count , setCount]= useState(0)

  const handleSubmit = (data) => {
    setPlayer ((prevList) => [...prevList, data])
  }

  //function handle increase
  const handleAdd= () => {
    setCount(count + 1)
  }

  // function handle Subtract
  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const playersList= player.map((p, index)=> {
    return (
      <div key={index} className="bg-white divide-y divide-dashed">
        <Container>
          <Row>
            <Col><LuCrown /></Col>
            <Col><p>{p}</p></Col>
            <Col><Button onClick={handleAdd}>+</Button>{count}<Button onClick={handleSubtract}>-</Button></Col>
            <Col><Button>Remove</Button></Col>
          </Row>
        </Container>
        
      </div>
    )
  })
  
  return (
    <div>
      <Header/>
      <div>
        <h1>Player</h1>
        {playersList}
      </div>
      <Footer handleForm = {handleSubmit}/>
    </div>
  )
}

export default Player

// import React, { useState } from 'react';
// import Footer from './Footer';
// import Header from './Header';
// import { LuCrown } from 'react-icons/lu'; // white
// import { playerList } from '../data/ListPlayers';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Button } from 'react-bootstrap';

// function Player() {
//   const [players, setPlayers] = useState(playerList.map(() => ({ count: 0 })));

//   const handleSubmit = (data) => {
//     setPlayers((prevPlayers) => [...prevPlayers, data{ count: 0 }]);
//   };

//   const handleAdd = (index) => {
//     setPlayers((prevPlayers) =>
//       prevPlayers.map((player, i) =>
//         i === index ? { ...player, count: player.count + 1 } : player
//       )
//     );
//   };

//   const handleSubtract = (index) => {
//     setPlayers((prevPlayers) =>
//       prevPlayers.map((player, i) =>
//         i === index && player.count > 0
//           ? { ...player, count: player.count - 1 }
//           : player
//       )
//     );
//   };

//   const playersList = players.map((player, index) => (
//     <div key={index} className="bg-white divide-y divide-dashed">
//       <Container>
//         <Row>
//           <Col>
//             <LuCrown />
//           </Col>
//           <Col>
//             <p>{playerList[index]}</p>
//           </Col>
//           <Col>
//             <Button onClick={() => handleAdd(index)}>+</Button>
//             {player.count}
//             <Button onClick={() => handleSubtract(index)}>-</Button>
//           </Col>
//           <Col></Col>
//         </Row>
//       </Container>
//     </div>
//   ));

//   return (
//     <div>
//       <Header />
//       <div>
//         <h1>Player</h1>
//         {playersList}
//       </div>
//       <Footer handleForm={handleSubmit} />
//     </div>
//   );
// }

// export default Player;
