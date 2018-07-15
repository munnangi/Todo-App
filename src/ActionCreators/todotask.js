// Action creaters

const addTask = (task) => {
 return {
   type: 'ADD_TASK',
   payload: task,
 };
},
deleteTask = (taskID) => {
  return {
    type: 'DELETE_TASK',
    payload: taskID,
  };
};

export  { addTask, deleteTask };
