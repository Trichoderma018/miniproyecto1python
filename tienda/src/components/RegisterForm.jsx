import React from 'react'

function RegisterForm() {
  return (
    <form>
      <div>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm