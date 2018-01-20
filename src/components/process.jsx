import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { generateLetters, checkLetter, resetLetters } from "../actions/letters";
import { timerTick, resetInfo } from "../actions/timer";

import Letters from "./process/letters";
import Info from "./process/info";

export class Process extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFinished: false,
      timer: null
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.finishProcess = this.finishProcess.bind(this);
    this.startProcess = this.startProcess.bind(this);
  }

  componentWillMount() {
    this.startProcess();
  }

  componentWillUnmount() {
    this.finishProcess()
  }

  onKeyPress(event) {
    this.props.checkLetter(event.key);
    if(this.props.items.length < 1) {
      this.finishProcess();
    }
  }

  startProcess() {
    this.props.resetProcess();
    this.props.generateLetters();

    this.setState({});

    clearInterval(this.state.timer);

    this.setState({
      'isFinished': false,
      'timer': setInterval(this.handleTimerTick.bind(this), 1000)
    });

    document.addEventListener("keydown", this.onKeyPress);
  }

  finishProcess() {
    document.removeEventListener("keydown", this.onKeyPress);
    clearInterval(this.state.timer);

    this.setState({
      'isFinished': true,
      'timer': null
    });
  }

  handleTimerTick() {
    this.props.timerTick();
    if(this.props.timeLimit < 1) {
      this.finishProcess();
    }
  }

  render() {
    return (
      <div className='main-container'>
        <div className="main-container__info">
          <Info timeLimit={ this.props.timeLimit }
                timeSpent={ this.props.timeSpent }
                wrongKeys={ this.props.wrongKeys }
                items={ this.props.items } />
        </div>
        <div className="main-container__letters">
          <Letters items={ this.props.items}
                   active={ !this.state.isFinished } />
        </div>
        <div className="main-container__buttons">
          <a href="#"
             className={ "btn " + (this.state.isFinished ? 'btn--green' : 'btn--orange') }
             onClick={ this.state.isFinished ? this.startProcess : this.finishProcess }>
            { this.state.isFinished ? 'Начать' : 'Завершить' }
          </a>
        </div>
      </div>
    )
  }
}

Process.propTypes = {
  timeLimit: PropTypes.number.isRequired,
  timeSpent: PropTypes.number.isRequired,
  wrongKeys: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  checkLetter: PropTypes.func.isRequired,
  resetProcess: PropTypes.func.isRequired,
  generateLetters: PropTypes.func.isRequired,
  timerTick: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    items: state.letters.items,
    wrongKeys: state.letters.wrongKeys,
    timeLimit: state.timer.timeLimit,
    timeSpent: state.timer.timeSpent
  }
};

const mapDispatchToProps = dispatch => {
  return {
    checkLetter: letter => {
      dispatch(checkLetter(letter));
    },
    generateLetters: () => {
      dispatch(generateLetters());
    },
    resetProcess: () => {
      dispatch(resetInfo());
      dispatch(resetLetters());
    },
    timerTick: () => {
      dispatch(timerTick())
    }
  }
};

const ConnectedProcess = connect(
  mapStateToProps,
  mapDispatchToProps
)(Process);

export default ConnectedProcess;
