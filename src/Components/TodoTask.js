import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../ActionCreators/todotask';
import Input from '@material-ui/core/Input';

class TodoTask extends React.Component {

  constructor() {
      super();
      this.state = {
        taskName: '',
      };
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange({ target }) {
     this.setState({
       [target.name]: target.value
     });
   }
  render() {
    return (
      <div style={this.props.styleProps}>
        <Input style={this.props.inputStyles}
          value= {this.state.taskName}
          name="taskName"
          onChange={ this.handleChange }
          placeholder="Add todo task"
        />
        <button onClick={()=>this.props.addTask(this.state.taskName)}>Add Task</button>
      </div>
    );
  }
}

TodoTask.defaultProps = {
    styleProps: {
      display:"flex",
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
    },
    inputStyles: {
      marginRight: 20,
    }
}

const mapDisptachToProps = (dispatch) => (
  bindActionCreators({addTask}, dispatch)
);

export default connect(()=>({}), mapDisptachToProps)(TodoTask);
