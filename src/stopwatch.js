import React from 'react';
import './stopwatch.css'


class Stopwatch extends React.Component {
    
    constructor(props) {
    super(props);

    this.state = {
      timeCount: 0,
      isRunning: false,
      intervalID: null
    };
  }

    
    watchStart = () => {
      this.setState({
      isRunning: true,
      timeCount: this.state.timeCount + 1,
      intervalID: setInterval(() => {
        this.setState({timeCount: this.state.timeCount + 1})}, 1000)
      })}
      

    watchPause = () => {
      this.setState({
        timeCount: this.state.timeCount,
        isRunning: false,
        intervalID: clearInterval(this.state.intervalID)
       })
      }
    
    watchReset = () => {
      this.setState({
        timeCount: 0,
        isRunning: false,
        intervalID: clearInterval(this.state.intervalID)
       })
      }
    
     
      render(){
        const {timeCount, isRunning} = this.state;
        
    return (
      <div className='stopwatch'>
        <div className='count'>{timeCount} seconds</div>
        <div className='button'>
        {isRunning ? 
          (<button className='dynamicButton' onClick={this.watchPause}>Pause</button>) :
          (<button className='dynamicButton' onClick={this.watchStart}>Start</button>)}
        <button className='resetButton' onClick={this.watchReset}>Reset</button>
        </div>
      </div>
    );
  }
}
    

export default Stopwatch;
