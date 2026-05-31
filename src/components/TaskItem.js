function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      {task.completed ? (
        <s>{task.title}</s>
      ) : (
        task.title
      )}

      <button onClick={() => toggleTask(task.id)}>
        Виконано
      </button>

      <button onClick={() => deleteTask(task.id)}>
        Видалити
      </button>
    </li>
  );
}

export default TaskItem;