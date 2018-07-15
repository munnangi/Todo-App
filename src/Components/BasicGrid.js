import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TodoTaskHeader from './TodoTaskHeader';
import TodoTask from './TodoTask';
import TodoTaskList from './TodoTaskList';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function BasicGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={9}>
          <div className={classes.paper}>
            <TodoTaskHeader />
            <TodoTask />
            <TodoTaskList />
          </div>
       </Grid>
     </Grid>
  </div>
  );
}

BasicGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicGrid);
