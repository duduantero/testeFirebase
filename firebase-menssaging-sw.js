import {  } from "getMessaging, getToken";
importScripts("")
import { getMessaging } from "firebase/compat/app";
const firebaseConfig = {
    apiKey: "AIzaSyAgPrfGRykeL_BFGUDxc4MacUbHPfCHSy0",
    authDomain: "testefirebase-21ad7.firebaseapp.com",
    projectId: "testefirebase-21ad7",
    storageBucket: "testefirebase-21ad7.appspot.com",
    messagingSenderId: "457568077999",
    appId: "1:457568077999:web:05986a6377e87a7060ac5a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();