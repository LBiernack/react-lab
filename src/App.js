import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    //let email = 'lbiernacki@agh.edu.pl';
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    //const [message, setMessage] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    let content;

    function handleChange(event) {
            //console.log(event.target.value);
            setEmail(event.target.value);
            //if (event.target.value.length > 10 {
            // setMessage =
        }

    let message;

    if (isAuthenticated) {
        content =
                <div>
                    <h2>Twój email to {email}</h2>
                    <button onClick={() => setIsAuthenticated(false)}>Wyloguj się</button>
                </div>
    } else {
        content =
                <div>
                <label htmlFor="email">Zaloguj się emailem </label>
                <input type="text" id="email" onChange={handleChange}/>
                <button onClick={() => setIsAuthenticated(true)}>Wchodzę</button>
                </div>
    }

  return (
    <div>
         <h1>Witaj w systemie do zapisów na zajęcia</h1>
          {content}
    </div>
  );
}

export default App;
