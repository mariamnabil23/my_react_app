import React from "react";

class Welcomecc extends React.Component{
    state = {
        fname : "mariam",
        lname : "nabil"
    }
    render(){
        console.log(this.state);
        return(
            <>
            <h3>hello {this.props.name} !</h3>
            <h1>created by {this.state.fname} {this.state.lname} </h1>
            </>
        )
    }
}

export default Welcomecc;