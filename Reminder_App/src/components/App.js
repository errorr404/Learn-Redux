import React from 'react';

//to connect a component to store we use connect functions
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    // here we add a state for initialization
    this.state = {
      text: '',
      dueDate:''
    }
  }

  addReminder() {

 //console.log('state',this.state);
 console.log('state djuedate',this.state.dueDate);
    this.props.addReminder(this.state.text,this.state.dueDate);
  }

  deleteReminder(id) {
    // console.log('deleting in application',id);
    // console.log('this.props in application', this.props);
    this.props.deleteReminder(id);
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
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>

                <div className="list-item delete-button"
                  onClick={()=>this.deleteReminder(reminder.id)}
                  >
                  &#x2715;
                </div>
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
          <input
              className="form-control"
              type="datetime-local"
              onChange={(event)=>this.setState({dueDate:event.target.value})}
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
          <div
            className="btn btn-danger"
            onClick={() => this.props.clearReminders()}
            >
              Clear Reminders
          </div>
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



export default connect(mapStateToProps,{addReminder, deleteReminder,clearReminders})(App);
