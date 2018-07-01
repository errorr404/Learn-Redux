import { ADD_REMINDER, DELETE_REMINDER } from '../constant';
export const addReminder = (text) =>{
  const action = {
    type: ADD_REMINDER,
    text
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
