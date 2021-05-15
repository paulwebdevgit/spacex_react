import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import './css/style.css';
// import Calendar from './Components/Calendar/Calendar';
// import Details from './Components/Details/Details';

class App extends React.Component{
  render(){
    return (
      <>
        <Header/>
        <Main/>
        <Features/>
        <Footer/>
      </>
    );
  }
}

export default App;
