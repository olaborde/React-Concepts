import React, {Component} from 'react';
import "./Header.css"

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            title: 'React App',
            desc: 'An app built with Reactjs',
            keyword: 'User Text Here'
        }

    }

    //Event binding
    inputChanges(event){
        console.log(event.target.value);
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }

    render(){
        const myData = this.state;
        
        return(
            <header>
                <center>
                    <div >
                    <p className="logo">{this.state.title}</p>
                    </div>
                     <h3>{myData.desc}</h3>
                    <input onChange={this.inputChanges.bind(this)}/>
                    <p>{this.state.keyword}</p>
                </center>
                <hr />
            </header>
    
        )
    }
}

// const Header = () =>{
//     return(
//         <header>
//             <center>
//                 <h1>React App</h1>
//             </center>
//             <hr />
//         </header>
//     )
// }

export default Header;