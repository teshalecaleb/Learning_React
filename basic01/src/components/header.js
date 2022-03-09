import React, { Component } from "react";

// const Header = () =>{
//     const getTheYear = () => {
//         const newDate = new Date();
//         return newDate.getFullYear();
//     }
//     return(
//         <div>
//             The date is {Date.now()}
//         </div>
//     )


// }
class Header extends Component {

    state = {
        name: 'kaleb',
        title: 'developer',
        keywords:'',
        count:0
    }

    inputChangeHandler = (event) => {
        // console.log(name)
        this.setState({
            keywords: event.target.value
        })
    }

    addOne(){
        this.setState((state,props)=>({
            count:state.count + 1
        }))
    }
    
    render() {
        return (
            <header>
                <div className="logo">Logo</div>
                <input
                    onChange={ (e) => this.inputChangeHandler(e,'hi kaleb')}
                />
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
                <br/>
                <div>{this.state.count}</div>
                <button onClick={()=> this.addOne()}>Add One</button>
            </header>

        )


    }
}
export default Header;