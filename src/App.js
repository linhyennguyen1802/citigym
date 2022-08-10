import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Banner_Form from './Banner_Form/Banner_Form';
import Infor from './Infor/Infor';
import Equiment from './Equipment/Equipment'
import Service from './Service/Service';
import Club from './Club/Club';
import Footer_Form from './Footer_Form/Footer_Form';
class App extends Component {
  render() {
    return(
      <div>
        <Header/>
        <Banner_Form/>
        <Infor/>
        <Equiment/>
        <Service/>
        <Club/>
        <Footer_Form/>
      </div>
    )
  };
};

export default App;