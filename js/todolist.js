var ToDoList = React.createClass({
    getInitialState: function() {
        return {
            tasks: [
                '1',
                '2',
                '3',
                '4'
            ]
        }
    },
    addToList: function(newText) {
        var tasksArr = this.state.tasks;
        tasksArr.push(newText);
        this.setState({tasks: tasksArr});
    },
    savelist: function(newText, i) {
        var tasksArr = this.state.tasks;
        tasksArr[i] = newText;
        this.setState({tasks: tasksArr});
    },

    deleteFromList: function(i) {
        var tasksArr = this.state.tasks;
        tasksArr.splice(i,1);
        this.setState({tasks: tasksArr});
    },

    eachTask: function(task, i) {
        return (
            <ToDo index={i} onSave={this.savelist} onDelete={this.deleteFromList}>{task}</ToDo>
        )
    },
    render: function() {
        return (
            <div className="todo-list">
                {this.state.tasks.map(this.eachTask)}
                <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.addToList.bind(null , "New Task")}> </button>
            </div>
        )
    }
})
