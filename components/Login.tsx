import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState("");

  const onClickLogin = () => { };
  const onClickLogout = () => { };
  const onClickToggle = () => { };

  return (
    <div>
      <input type='text' onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button onClick={onClickLogin}>Login</button>
      <br />
      <button onClick={onClickLogout}>Logout</button>
      <br />
      <button onClick={onClickToggle}>Toggle Moderator</button>
    </div>
  )
}

export default Login