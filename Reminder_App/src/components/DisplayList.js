import React from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders, showReminders } from '../actions';
class Display extends React.Component {
  showList() {
    console.log('showing the list wait...');
    console.log('this.props in display',this.props.showReminders(-1));
    this.props.showReminders(-1);
    console.log('this.props fom display',this.props);



  }
  renderList() {
      const { reminders } = this.props;
        console.log('reminders from display', reminders);
        return(
          reminders.map(reminder=>{
            return(
              <ul key={reminder.id}>
                <li key={reminder.id}>
                  {reminder.text}
                </li>
              </ul>
            )
          })
        );

  }

  render() {
    console.log('hello world');
    return(
      <div>
        <p onClick={()=>this.showList()}>Display form Display</p>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('5.mapStateToProps stats',state);
  return {
    reminders: state
  }
}

export default connect(mapStateToProps,{addReminder, deleteReminder, clearReminders, showReminders})(Display);
