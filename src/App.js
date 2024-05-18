import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";

function App() {
    //let email = 'lbiernacki@agh.edu.pl';
//    const [email, setEmail] = useState('fracz@agh.edu.pl');
    //const [message, setMessage] = useState("");
//    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authenticatedUserName, setAuthenticatedUserName] = useState("");
    let content;

//    function handleChange(event) {
//            //console.log(event.target.value);
//            setEmail(event.target.value);
//            //if (event.target.value.length > 10 {
//            // setMessage =
//        }

//    let message;

    if (authenticatedUserName) {
        content =
                <div>
                    <h2>Twój email to {authenticatedUserName}</h2>
                    <button onClick={() => setAuthenticatedUserName("")}>Wyloguj się</button>
                </div>
    } else {
        content =
                  <LoginForm onLogin={(email) => setAuthenticatedUserName(email)}
                  buttonLabel="Zaloguj się"/>
    }

  return (
    <div>
         <h1>Witaj w systemie do zapisów na zajęcia</h1>
          {content}
    </div>
  );
}

export default App;
