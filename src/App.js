import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import './css/style.css';
import Calendar from './Components/Calendar/Calendar';
import Details from './Components/Details/Details';
import FetchData from './Service/FetchData';
// в зависимости от Location показывает какой Компонент рендерить
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component{
  fetchData = new FetchData();
  // constructor(props){
  //   super(props);
  //   console.log(this.fetchData);
  // }

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    company: null
  }

  componentDidMount(){
    this.updateRocket();
    this.getCompany();
  }

  updateRocket(){
    this.fetchData.getRocket()
    .then((rockets)=>{ 
    //  [rockets[0], rockets[1]] = [rockets[1], rockets[0]]; change array elements
      this.setState({rockets: rockets.map(item => item.name)})
      return rockets.find(item => {return item.name === this.state.rocket;})})
    .then((rocketFeatures) =>{
      return this.setState({rocketFeatures}, ()=>{
        console.log(rocketFeatures) 
      });
     })
  }

  changeRocket = (rocket) => {
    this.setState({
      rocket: rocket
    }, this.updateRocket)
  }
  getCompany(){
    this.fetchData.getCompony().then(company => {
      console.log(company)
      this.setState({company})})
  }
  render(){
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        <Route exact path='/info' 
        render={() =>  this.state.company && <Home company= {this.state.company}/>}/>
    
        <Route exact path='/'>
          <Main rocket={this.state.rocket}/>
           {/* условия если есть данные в rocketFeatures */}
           {this.state.rocketFeatures && 
            <Features {...this.state.rocketFeatures}/>}
        </Route>
        
        <Route path='/calendar' component={Calendar}>
        </Route>
        {/* :id это то куда мы указали в url в компоненте Calendar */}
        <Route path='/details/:id' component={Details}>
          {/* <Details/> */}
        </Route>
        
        {this.state.company && <Footer {...this.state.company}/>}
      </BrowserRouter>
    );
  }
}

export default App;
