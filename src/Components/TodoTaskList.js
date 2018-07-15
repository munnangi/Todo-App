import React from 'react';
import {connect} from 'react-redux';
import TodoTaskListItem from './TodoTaskListItem';

class TodoTaskList extends React.Component {

  render() {
    return (
      <table>
        <thead>
          <tr width='100%'>
            <th width='50%'>Task Name</th>
            <th width='50%'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => <TodoTaskListItem key={index} id={index} task={task}/>)}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => (
  {
      tasks: state.tasks
  }
);


export default connect(mapStateToProps)(TodoTaskList);
