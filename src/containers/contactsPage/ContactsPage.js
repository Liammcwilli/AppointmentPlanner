import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/ItemList/ItemList";
import Tasks from "../../components/ItemList/ItemList";

export const ContactsPage = ({ onAdd }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Steven Smith",
      day: "559-267-2784",
      reminder: false,
    },
    {
      id: 2,
      text: "Mark Simpson",
      day: "529-679-7626",
      reminder: false,
    },
    {
      id: 3,
      text: "Mark Gregory",
      day: "564-785-8754",
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
        <h2>Add Contact</h2>
        <ContactForm onAdd={addTask} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <Tasks tasks={tasks}
        onDelete={deleteTask} onToggle={toggleReminder}/>
      </section>
    </div>
  );
};