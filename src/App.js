import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    //let email = 'lbiernacki@agh.edu.pl';
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    //const [message, setMessage] = useState("");

    function handleChange(event) {
            //console.log(event.target.value);
            setEmail(event.target.value);
            //if (event.target.value.length > 10 {
            // setMessage =
        }

    function displayEmail() {
        alert(email);
    }

    let message;

    if (email.length < 10) {
        message = <p>"Ale masz któtki mail"</p>;
    } else if (email.length >= 10 && email.length <15) {
        message = <p>"Tówj email jest w sam raz"</p>;
    } else {
        message = <p>"Tówj email jest stanowczo za długi"</p>;
    }

  return (
    <div>
         <h1>System do zapisów na zajęcia</h1>
          <h2>Twój e-mail to {email}</h2>
          {message}
          <input type="text" value={email} onChange={handleChange}/>
          <button onClick={displayEmail}>Wyświetl mój e-mail</button>
    </div>
  );
}

export default App;
