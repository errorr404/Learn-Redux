import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS,SHOW_LIST_REMINDERS} from '../constant';
import { bake_cookie, read_cookie} from 'sfcookies'

const reminder = (action)=>{
  let { text,dueDate } = action;
  return {
    //text: action.text,
    id: Math.random(),
    text,
    dueDate
  }
}

const removeById = (state=[],id) =>{
  const reminders = state.filter(reminder =>reminder.id!==id);
  console.log('4.1 new reduced remindrs calling the DELETE_REMINDER case', reminders);
  return reminders;
}
const showList = (state=[],id) =>{
  const reminders = state.filter(reminder =>reminder.id!==-1)
  console.log('list are',reminders);
  return reminders;
}

const reminders = (state=[],action)=>{
  let reminders = null;
//  let lists = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state,reminder(action)];
      bake_cookie('reminders',reminders);
      console.log('4.reminders as state',reminders);
      return reminders;

      case DELETE_REMINDER:
        reminders = removeById(state,action.id);
        bake_cookie('reminders',reminders);
        return reminders;

        case CLEAR_REMINDERS:
        reminders = [];
        bake_cookie('reminders',reminders);
        console.log('4.reminders as state',reminders);
        return reminders;

        case SHOW_LIST_REMINDERS:
        reminders = showList(state,action.id);
        return reminders;

    default:
    return state;

  }

}

export default reminders;
