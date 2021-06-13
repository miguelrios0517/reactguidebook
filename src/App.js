import React from 'react'
import SimpleSelect  from './components/simpleSelect'

import UseEffectTutor  from './tutorials/useEffectTutor'
import UseRefTutor  from './tutorials/useRefTutor'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tutorial: null
    }
  }
  
  createTutorial = (tutor) => {
    console.log('inside app ' + tutor)
    this.setState({tutorial:tutor})
  }

  render() {
    return(
      <>
        <SimpleSelect createTutorial = {this.createTutorial}/>
        {this.state.tutorial == 'useEffect' && <UseEffectTutor />}
        {this.state.tutorial == 'useRef' && <UseRefTutor />}
      </>
    );   
  }
}

export default App;

