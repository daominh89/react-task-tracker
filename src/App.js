import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      tasks: [
        {
          id: 1,
          text: "Doctors Appointment",
          day: "Feb 5th at 2:30pm",
          reminder: true,
        },
        {
          id: 2,
          text: "Meeting at School",
          day: "Feb 6th at 1:30pm",
          reminder: true,
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <Header></Header>
      <Tasks task={tasks}></Tasks>
    </div>
  );
}

export default App;
 