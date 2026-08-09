import { useState } from 'react';
import UserProfile from './components/UserProfile.jsx';
import TaskFilterButtonGroup from './components/TaskFilterButtonGroup.jsx';
import TaskItem from './components/TaskItem.jsx';
import filterTasks from './utils/filterTasks.js';
import useTasks from './hooks/useTasks.js';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');
  let visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name={'John Doe'} />

      <div>
        <TaskFilterButtonGroup onClick={setFilter} />
        <p>Current filter: {filter}</p>
      </div>

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
