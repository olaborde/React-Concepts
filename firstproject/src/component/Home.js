import React, {Component, Fragment} from 'react';
import Header from './Header';
import JSON from '../db.json';
import Newsfeed from './Newsfeed'

class Home extends Component{
    constructor(){
        super();

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keyword){
        const output = this.state.news.filter((data)=>{
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1 || 
            data.feed.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
       
        return(
            <Fragment>
                <Header userText={(userInput)=>{this.filterNews(userInput)}}/>
                <Newsfeed datalist={this.state.filtered} />

            </Fragment>
        )
    }
}

export default Home;


