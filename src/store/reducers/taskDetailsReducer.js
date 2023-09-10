import { TaskDetailsActionType } from '../actionTypes/taskDetailsActionType';

const initialState = {
  taskData: [
    {
      id: 1,
      title: 'First Task',
      description: 'This is my first task',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Second Task',
      description: 'This is my second task',
      status: 'Open'
    },
    {
      id: 3,
      title: 'Third Task',
      description: 'This is my third task',
      status: 'Done'
    },
  ],
  filtered: ''
};

const taskDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TaskDetailsActionType.GET_DETAILS:
      return { ...state, taskData: action.payload };
    case TaskDetailsActionType.ADD_DETAILS:
        return { ...state, taskData: action.payload}
    case TaskDetailsActionType.FILTERED:
      return { ...state, filtered: action.payload}    
    default:
      return state;
  }
};

export default taskDetailsReducer;
