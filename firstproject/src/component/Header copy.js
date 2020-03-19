import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            title: 'React App',
            desc: 'An app built with Reactjs'
        }

    }
    render(){
        const myData = this.state;
        const myStyle ={
            headers:{
                backgroundColor:'teal'
            },
            logo:{
                fontSize: '30px',
                color: '#fff',
                textAlign:'center'
            }
        }
        return(
            <header style={myStyle.headers }>
                <center>
                    <div style={myStyle.logo }>
                    <p>{this.state.title}</p>
                    </div>
                     <h3>{myData.desc}</h3>
                    <input />
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