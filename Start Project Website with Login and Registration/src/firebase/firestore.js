import app from "./firebase.config";
import {  getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc, } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const db = getFirestore(app);

