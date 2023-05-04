import React from 'react';


class Stopwatch extends React.Component {

    constructor(props) {
    super(props);

    this.state = {
      timeCount: 0,
      isRunning: false
    };

    // eslint-disable-next-line no-undef
    watchStart = () => {
      this.setState({
      isRunning: true,
      timeCount: this.timeCount + 1
      })

      // eslint-disable-next-line no-undef
      intervalID = setInterval(() => {
      this.setState(this.state.timeCount, 1000)
     })
    }

    // eslint-disable-next-line no-undef
    watchPause = () => {
      // eslint-disable-next-line no-undef
      clearInterval(this.intervalID);
      this.setState({
        timeCount: this.state.timeCount,
        isRunning: false
       })
      }
    }

    watchReset = () => {
      // eslint-disable-next-line no-undef
      clearInterval(this.intervalID);
      this.setState({
        timeCount: 0,
        isRunning: false
       })
      }
    
      render() {
        const {timeCount, isRunning} = this.state;

        return(
          <div className='stopwatch'>
            <div className='count'>Stopwatch:{timeCount} milliseconds</div>
            {isRunning? 
            (<button onClick={this.watchPause}>Pause</button>) :
            (<button onClick={this.watchStart}>Start</button>)}
            <button onClick={this.watchReset}>Reset</button>
          </div>
        )
      }
    }

export default Stopwatch;
