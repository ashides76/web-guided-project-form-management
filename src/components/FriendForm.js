import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    console.log(evt.target);
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    const name = evt.target.name;
    // b) pull the value of the input from the event object
    const {value} = evt.target;
    // c) use the `update` callback coming in through props
    update(name, value);
  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    evt.preventDefault();
    // c) use the `submit` callback coming in through props
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Username
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
        </label>
        <input 
          type='text'
          value={values.username}
          onChange={onChange}
          name='username'
          placeholder='Enter a username!'
          maxLength={40}
        />
        <label>Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
        </label>
        <input 
          type='email'
          value={values.email}
          onChange={onChange}
          name='email'
          placeholder='Enter email address'
        />
        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
        </label>
        <select value={values.role} name='role' onChange={onChange}>
          <option value={''}>Select a role</option>
          <option value='student'>Student</option>
          <option value='instructor'>Instructor</option>
          <option value='alumni'>Alumni</option>
        </select>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
