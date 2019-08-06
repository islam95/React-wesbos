import Rebase from "re-base";
import firebase from "firebase";

// This private information would be encrypted in real world app
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBL9kar5ICxsGf-jXxGfAKfh-sQB6xUa48",
  authDomain: "react-wesbos-islam.firebaseapp.com",
  databaseURL: "https://react-wesbos-islam.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
