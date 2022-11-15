import './home.css';
import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostLoginMutation } from 'Service/Auth';

const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [
    distpath,
    { data: dataLogin, isLoading: isLoadingLogin, isSuccess: isSuccessLogin },
  ] = usePostLoginMutation();

  useEffect(() => {
    console.log('data', dataLogin);
  }, [dataLogin, isLoadingLogin, isSuccessLogin]);

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      distpath({ username: 'quyle1222', password: 'admin' });
    } else {
      alert('User name is require');
    }
  };

  return (
    <div className="container">
      <form className="form" noValidate={false} autoComplete="off">
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
