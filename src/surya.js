import React from 'react';


//function based props
// function Surya(props){
// 	return(
// 		<h2>{props.name} Role is :{props.role}</h2>

// 		);
// }

//class based on props
// class Surya extends React.Component{
// 	render(){
// 		return(
// 			<h2>{this.props.name} Role is :{this.props.role}</h2>


// 			);
// 	}
// }


//class using in state component

class Surya extends Component{

    constructor(){
    	super();
    	this.state={
    		//name:"surya",
    		//bestfriend:"me",
    		count:0
    	}
    }

    changestate=()=>{
    	this.setState({
    		//name:"venkat",
    		//bestfriend:"narla",
    		count:this.state.count+1
    	})

    }

	render(){
		return(
            <div>
            //<h2>{this.stats.name}</h2>
           // <h3>{this.state.bestfriend}</h3>
            //<h3>{this .state.number++}</h3>
            //<button onClick={this.changestate}>change</button>
            <h2>{this.state.count}</h2>
            <button onClick={this.changestate}>Incriment</button>
            </div>
			);
	}
}
export default Surya;