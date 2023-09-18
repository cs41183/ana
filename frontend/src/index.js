import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // e importojm Providerin prej reactit
import Store from "./redux/store"; // e importojm storen prej folderit redux
import { GoogleOAuthProvider } from '@react-oauth/google'; // importojme google auth providerin
// import 'bootstrap/dist/css/bootstrap.min.css';

// komponenten kryesore App.js e mbeshtjellim me Provider store , per me pas qasje ne store ne te gjithe aplikacionin
// ketu ReactDOMi e renderon pamjen e React Aplikacionit ne html fajllin qe gjendet te public/index.html
// brenda body tagut te fajlli index.html e kemi divin me id="root"

//1078643768856-i3b0kmdn444jbag7fas9obnh5foblnik.apps.googleusercontent.com


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
        <GoogleOAuthProvider clientId="1078643768856-i3b0kmdn444jbag7fas9obnh5foblnik.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);  

reportWebVitals();
