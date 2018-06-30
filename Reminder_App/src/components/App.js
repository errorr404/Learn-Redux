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
 //   console.log('state',this);
    this.props.addReminder(this.state.text);
  }

  render() {
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




export default connect(null,{addReminder})(App);
