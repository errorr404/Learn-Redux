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

  renderReminders() {
    const { reminders } = this.props;
    //console.log('this is form renderReminders',reminders);
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-name">
                <div>{reminder.text}</div>
              </li>
            )
          })
        }

      </ul>
    );
  }

  render() {
    //console.log('this.props in render function',this.props);
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className='form-inline reminder-form'>
          <div className="form-group">
            <input
            className="form-control"
            placeholder="I have to..."
            onChange={event=>this.setState({text: event.target.value})}
          />

          </div>
          {'  '}
          <button
            type="button"
            className="btn btn-success"
            onClick={()=>this.addReminder()}
            >
              Add Reminder
          </button>
        </div>
          { this.renderReminders() }
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
