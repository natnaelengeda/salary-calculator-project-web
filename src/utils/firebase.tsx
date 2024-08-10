import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXtiZ4d3z-_i_bvnhkbUdzLvw20MGQFSw",
  authDomain: "ethiopia-salary-calculator.firebaseapp.com",
  projectId: "ethiopia-salary-calculator",
  storageBucket: "ethiopia-salary-calculator.appspot.com",
  messagingSenderId: "633765127360",
  appId: "1:633765127360:web:d84329cfed7e0232af3925",
  measurementId: "G-SZ1FTS4K70"
};

// Initialization
const firebase = initializeApp(firebaseConfig);

// Analytics
const analytics = getAnalytics(firebase);

export { firebase, analytics };