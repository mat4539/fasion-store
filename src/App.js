import './App.css';
import {useState} from "react";
import {LoginForm} from "./LoginForm/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log("App rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
      <div>
        <LoginForm
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
        />
      </div>
  );
}

export default App;