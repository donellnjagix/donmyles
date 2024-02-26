// AdminDashboard.tsx
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]); // Tasks assigned to the admin

  // Function to simulate fetching tasks for the admin
  const fetchTasks = () => {
    // Simulate fetching tasks from backend
    const tasksData = [
      { id: 1, description: 'Review new user registrations', status: 'Pending' },
      { id: 2, description: 'Generate monthly report', status: 'Pending' },
    ];
    setTasks(tasksData);
  };

  // Function to mark a task as completed
  const handleCompleteTask = (taskId) => {
    // Simulate updating task status to 'Completed'
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: 'Completed' } : task
    );
    setTasks(updatedTasks);
  };

  // Fetch tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Admin Dashboard</h1>
      <div className="row mt-4">
        {tasks.map((task) => (
          <div key={task.id} className="col-lg-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{task.description}</h5>
                <p className="card-text">Status: {task.status}</p>
                {task.status === 'Pending' && (
                  <Button variant="success" onClick={() => handleCompleteTask(task.id)}>
                    Mark as Completed
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
