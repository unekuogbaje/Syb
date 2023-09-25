// import { ChatEngine, ChatFeed } from 'react-chat-engine';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <div className="App">
      <ChatEngine
      height="100vh"
      projectID="501888d8-e13d-4b85-acaf-41a61c9d4991"
      userName="Flo"
      userSecret="qwertyuiop"
      renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
