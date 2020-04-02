import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  constructor() {
    super();

    this.state = {
      tasksToPerform : []
    }
  }

  onAddTask = (event) => {
    if(event.keyCode === 13 && event.target.value != null) {
      let tasksAvailable = [...this.state.tasksToPerform];
      tasksAvailable.push({"taskName" : event.target.value, "isCompleted" : false});
      event.target.value = "";
      this.setState({
        tasksToPerform : [...tasksAvailable]
      })
    }
  }

  onMarkAsCompleted = (index) => {
    let tasksAvailable = [...this.state.tasksToPerform];
    tasksAvailable.map(task => console.log(task.taskName));
    let updatedTasks = tasksAvailable.filter((task, i) => {
      return index != i;
    })
    console.log(updatedTasks);

    this.setState({
      tasksToPerform : [...updatedTasks]
    })
  }


  render() {
    return(
      <div className = "container-fluid">

        <div className = "row header-row">

          <div className = "offset-md-4 col-md-4">

            <h4 className = "display-4"> What to Do..? </h4>

            <p className = "emoji">
              <span role = "img" aria-label = "emoji">
              🤔
              </span>
            </p>

          </div>

        </div>

        <div className = "row tasks-row">

          <div className = "offset-md-4 col-md-4">

            <div className = "form-group">

              <input type = "text" className = "form-control inputTask" name = "taskName" id = "taskName" placeholder = "Type task here..!!" onKeyUp = {this.onAddTask}/>

            </div>

          </div>

        </div>

        <div className = "row available-tasks">

          <div className = "offset-md-4 col-md-4">

            <ul className = "list-group">
              {
                this.state.tasksToPerform.map((task, index) => {
                  if(task.isCompleted === false) {
                    return <li className = "list-group-item clearfix" key = {index}> { task.taskName } <span className = "close-button" onClick = {() => this.onMarkAsCompleted(index)}>&#x274C;</span></li>
                  } else {
                    return null;
                  }
                })
              }
            </ul>

          </div>

        </div>

      </div>

    );
  }
}

export default App;
