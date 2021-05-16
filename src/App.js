import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import './css/style.css';
// import Calendar from './Components/Calendar/Calendar';
// import Details from './Components/Details/Details';
import FetchData from './Service/FetchData';

class App extends React.Component{
  fetchData = new FetchData();
  // constructor(props){
  //   super(props);
  //   console.log(this.fetchData);
  // }
  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: []
  }
  componentDidMount(){
    this.updateRocket();
  }

  updateRocket(){
    console.log(this.state)
    this.fetchData.getRocket()
    .then((rockets)=>{
     rockets = rockets.map(item => item.name);
    //  [rockets[0], rockets[1]] = [rockets[1], rockets[0]]; change array elements
      this.setState({rockets: rockets})
      return rockets.find(item => {return item.name === this.state.rocket;})})
    .then((rocket) =>{
      this.setState({rocketFeatures: rocket}, ()=>{
        console.log(this.state) 
      });
     })
    
  }

  changeRocket = (rocket) => {
    this.setState({
      rocket: rocket
    }, this.updateRocket)
  }

  render(){
    console.log(this.state)
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        <Main rocket={this.state.rocket}/>
        <Features/>
        <Footer/>
      </>
    );
  }
}

export default App;
