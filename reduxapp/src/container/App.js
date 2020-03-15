import React, {Component} from 'react';
import {movieList} from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Display from '../components/displayComponent';

class App extends Component {

    componentDidMount() {
        // will invoke action
        this.props.movieList()
    }
    render(){
        return(
            <div>
                <h1>Redux</h1>
                <Display datalist={this.props.mydata}></Display>

            </div>
        )
    }
}
// will receive the state
function mapStateToProps(state) {
    console.log(state)
    return{
        mydata:state.movies
    }
}
// will dispatch action
function mapDispatchToProps(dispatch) {
    return bindActionCreators({movieList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)