import './home.css';
import { Button, TextField, Dialog } from '@material-ui/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const count = useSelector((state: RootState) => state.counter.value);

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      navigate('/home');
    } else {
      alert('User name is require');
    }
  };

  return (
    <div className="container">
      <form className="form" noValidate={false} autoComplete="off">
        <div>{count}</div>
        <div className="margin-top">
          <TextField
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            className="input"
            id="outlined-basic"
            label="Account"
            variant="outlined"
          />
        </div>
        <div className="margin-top">
          <TextField
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="input"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
      </form>
      <div className="center">
        <Button className="button margin-top" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
