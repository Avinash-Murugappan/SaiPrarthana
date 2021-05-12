import React from 'react'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import NagaSaiLive from './pages/NagaSaiLive'
import{Route, BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer'
import Home from './pages/Home'
import AudioPlayer from './components/AudioPlayer'

const Body = styled.section`
  background-color: #eef0f1;
`;
const Div = styled.section`
 background-color: #eef0f1;

`;

function App() {
  return (
    <Router>
    <Div style={{minHeight:'100vh', paddingBottom:'100px', position:'relative'}} >
      <NavBar/>
      <Body>
      <Route path='/' exact component={Home}/>
     <Route path='/NagaSaiLive' component={NagaSaiLive}/>
     <Route path='/a' component={AudioPlayer}/>
      </Body>
      <br/>
      <Footer/>
    </Div>
    </Router>
  )
}

export default App;
