import { useState } from 'react';
import axios from 'axios';

const projectID = '501888d8-e13d-4b85-acaf-41a61c9d4991';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect email or password.');
    }
  };

  return (
    <div className='wrapper'>
      <div className="form">
        <h1 className='title'>SYB</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Begin a Conversation</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  )
}

export default LoginForm;