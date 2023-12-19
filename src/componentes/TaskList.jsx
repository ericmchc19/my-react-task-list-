function TaskList ({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task>key={task.id} name={task.name} completed={task.completed}</Task> 
      ))}
    </div>
  );
};

export default TaskList;
