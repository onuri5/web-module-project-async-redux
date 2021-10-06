import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getName, fetchStart } from './actions';

function App(props) {

 const getRandomName = () => {
    props.getName()
  }

  if(fetchStart === true) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <button onClick={getRandomName}>Get Random Name</button>
      {<h1>The average age for a person named: {props.person.name ? props.person.name : ''} {props.person.name ? `is ${props.person.age}` : 'unkown to us :('}</h1>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };  
}

export default connect(mapStateToProps, { getName, fetchStart })(App);
