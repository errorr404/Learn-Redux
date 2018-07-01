import React from 'react';

//to connect a component to store we use connect functions
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { addReminder } from '../actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    // here we add a state for initialization
    this.state = {
      text: ''
    }
  }

  addReminder() {
 console.log('state',this.state);
    this.props.addReminder(this.state.text);
  }

  render() {
    console.log('this.props in render function',this.props);
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className='form-inline'>
          <div className="form-group">
            <input
            className="form-control"
            placeholder="I have to..."
            onChange={event=>this.setState({text: event.target.value})}
          />
          {'  '}
          <button
            type="button"
            className="btn btn-success"
            onClick={()=>this.addReminder()}
            >
              Add Reminder
          </button>
          </div>
        </div>
      </div>
    );
  }
}

// here we write a mapDispatchToProps frunction for bind the action

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addReminder},dispatch);
// }

// here we write the mapStateToProps frunction to update our state

function mapStateToProps(state) {
  //console.log('mapStateToProps stats',state);
  return {
    reminders: state
  }
}



export default connect(mapStateToProps,{addReminder})(App);
