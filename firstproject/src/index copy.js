import React from 'react'; 
import ReactDom from 'react-dom';
import Header from './component/Header';

// functional component
const App = ()=> {
    return(
        <React.Fragment>
            <Header />
            <h1>Hello from earth</h1>
            <p>Let's do it</p>
        </React.Fragment>
    )
}

ReactDom.render(<App />, document.getElementById('root'));

