import React, { useState, useEffect } from 'react'
import useEfffectTutor  from './tutorials/useEffectTutor'
import SimpleSelect  from './components/simpleSelect'

class App extends React.Component() {
  constructor(props) {
    super(props)
    this.state = {tutorial: null}
  }
  
  createTutorial = (tutor) => {
    this.setState({tutorial:tutor})
    console.print('inside app' + tutor)
  }

  render() {
    return(
      <>
        <div>
          <SimpleSelect createTutorial = {() => thicreateTutorial}/>
          {tutorial == 'useEffect' && <useEffectTutor />}
        </div>
      </>
    );   
  }
});

