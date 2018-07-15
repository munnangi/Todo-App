import React from 'react';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../ActionCreators/todotask';
import {connect} from 'react-redux';

class TodoTaskListItem extends React.Component {

  render () {
    return (
      <tr>
        <td>
          {this.props.task}
        </td>
        <td>
          <button onClick={()=> {this.props.deleteTask(this.props.id)}}> Delete </button>
        </td>
      </tr>
    );
  }
}

const mapDisptachToProps = (dispatch) => (
  bindActionCreators({deleteTask}, dispatch)
);


export default connect(()=>({}), mapDisptachToProps)(TodoTaskListItem);
