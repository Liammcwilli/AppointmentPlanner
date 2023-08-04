import React from "react";
import { useState } from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  onAdd
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
        <div>
          <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Contact Name</label>
            <input type='text' placeholder='Add Contact'
            value={text} onChange={(e) => setText(e.target.value) }
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Phone Number</label>
            <input type='text' placeholder='Phone Number'
            value={day} onChange={(e) => setDay(e.target.value) }
            />
        </div>
        <div className='form-control'>


            <input type='submit' value='Save Contact'
            className='btn btn-block'/>
        </div>
    </form>
    </div>
   </div>
  );
};

