import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constant';
export const addReminder = (text,dueDate) =>{
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }

  console.log('actions in action folder are',action);
  return action;
}

export const deleteReminder = (id) =>{
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in action',action);
  return action;
}

export const clearReminders = () =>{
return {
  type: CLEAR_REMINDERS
}
}
