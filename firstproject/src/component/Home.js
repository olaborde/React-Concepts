import React, {Component, Fragment} from 'react';
import Header from './Header';
import JSON from '../db.json';
import Newsfeed from './Newsfeed'

class Home extends Component{
    constructor(){
        super();

        this.state={
            news:JSON
        }
    }

    render(){
       
        return(
            <Fragment>
                <Header />
                <Newsfeed datalist={this.state.news} />

            </Fragment>
        )
    }
}

export default Home;


