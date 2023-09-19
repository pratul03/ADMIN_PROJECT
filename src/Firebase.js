import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCVMnj2_1FlqlDMLgT30GJSeXRtYPj0ucI",
  authDomain: "admin-dashboard-c3fa6.firebaseapp.com",
  projectId: "admin-dashboard-c3fa6",
  storageBucket: "admin-dashboard-c3fa6.appspot.com",
  messagingSenderId: "375128907309",
  appId: "1:375128907309:web:75f087238d4b82ea3a22a4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app