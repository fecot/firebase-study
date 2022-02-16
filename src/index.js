import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

import firebaseConfig from './config/firebase-config'
import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore/lite'

const app = firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
