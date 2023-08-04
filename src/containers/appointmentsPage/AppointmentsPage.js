import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import Tasks from "../../components/ItemList/ItemList";

export const AppointmentsPage = ({ onAdd }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Dentist",
      day: "Feb 7th at 7:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Client Meeting",
      day: "Feb 10th at 10:30pm",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
  
  
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
    }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm onAdd={addTask} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <Tasks tasks={tasks}
        onDelete={deleteTask} onToggle={toggleReminder}/>
      </section>
    </div>
  );
};