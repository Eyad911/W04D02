import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Todo from './components/Todo';


class App  extends React.Component {
  
  render(){
    return(
  <div className="App">
      <Header/>
      <Todo/>
      <Footer/>
    </div>);
  }
  
}

export default App;
