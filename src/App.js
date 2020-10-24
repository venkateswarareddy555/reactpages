import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';
// import Surya from './surya.js';
// import Cards from './card.js';
// import {BrowserRouter,Route} from 'react-router-dom';
// import Resume from './resume.js';
import Hooksdemo from './hooksdemo';
// import Header from './header.js';
// import Footer from './footer.js';
// import StateComponent from './state.js';
// import Head from './props.js';

// function App() {
//   return React.createElement("div",{id:'pocha'},React.createElement('h2','null',React.createElement('p','null','pocha1')));
//  return React.createElement("h2",{style:{color:"red"}},'venkat');
//   return (
//     <div className="App">
//     <h1>good evening sir</h1>
//     <p>welcome to apssdc</p>
//     <Header></Header>  
//     <Footer></Footer>
//     <StateComponent/>
//     <Head name="pocha">
//     <p>this is pocha</p>
//     <p>hai all</p>
//     </Head>
//     <Head name="reddy">
//     <p>this is reddy</p>
//     <p>hai all</p>
//     </Head>
//     </div>
//   );
// }

// class App extends React.Component{
//   render(){
//     return(
//     <div>
//     <Surya/>
//     </div>
//     );
//   }
// } 

function App(){
  return(
    <Hooksdemo/>
    // <div className="App">
    // <BrowserRouter>
    // <Route exact path="/" component={Cards}/>
    // <Route exact path="/resume"  component={Resume}/>

    // </BrowserRouter>

    // </div>
    );
}

export default App;