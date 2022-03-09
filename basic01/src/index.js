import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './styles/style.css'


const App = () => (
    // <React.Fragment>
    //     <h1>Hello</h1>
    //     <h2>Hello Kaleb</h2>
    // </React.Fragment>
    <>
        <Header />
    </>

)





ReactDOM.render(<App />, document.getElementById('root'))

