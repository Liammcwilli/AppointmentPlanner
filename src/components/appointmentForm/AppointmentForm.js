import React from "react";
import { useState } from 'react'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  onAdd,
}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

    }
    

  return (
    <div>
          <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Appointment Name</label>
            <input type='text' placeholder='Add Appointment'
            value={text} onChange={(e) => setText(e.target.value) }
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day & Time'
            value={day} onChange={(e) => setDay(e.target.value) }
            />
        </div>
        <div className='form-control'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} 
            onChange={(e) => setReminder(e.currentTarget.checked) }
            />

            <input type='submit' value='Save Appointment'
            className='btn btn-block'/>
        </div>
    </form>
    </div>
  );
};
