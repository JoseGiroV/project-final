import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, updateDoc, collection, getDocs, addDoc, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";


const email = document.getElementById('email');
const password = document.getElementById('password');
const name = document.getElementById('name');
const emailR =document.getElementById('emailR');
const userR = document.getElementById('userR');
const admin = document.getElementById('admin');
const user = document.getElementById('user');
const passwordR = document.getElementById('passwordR');
const btnRegister = document.getElementById('btnRegister')



const firebaseConfig = {
    apiKey: "AIzaSyCYp6Dc1NnKFUMLjnduo6INFEJWQSv4k-0",
    authDomain: "sky-code-999e7.firebaseapp.com",
    projectId: "sky-code-999e7",
    storageBucket: "sky-code-999e7.appspot.com",
    messagingSenderId: "810365930758",
    appId: "1:810365930758:web:3a1da8184e290d8285e287",
    measurementId: "G-0YXE3SLS3F"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function getUsers(database){
    const userCollection = collection(database, 'users');
    const result = await getDocs(userCollection);
    const userList = result.docs.map(doc => doc.data());
    return userList;
}

try {
    getUsers(db).then(response => console.log(response));
}catch (err){
    console.log(err)
}

//create new user

async function createNewUser(database, userDb){
    const newUser = await addDoc(collection(database, 'users'), userDb);
    return newUser;

}

//actualizar usuarios
const userRef = doc(db, 'users', 
'mQ1iPxo7mEp1W7Pr2ltf');
async function updateUser(user) {
    const updateUserRole = await updateDoc(userRef, {
        role: admin
    })
}


// function sendData(name, emailR, passwordR, userR){
//     const user = {
//         emailR:emailR.value,
//         name: name.value,
//         passwordR: passwordR.value,
//         userR:userR.value,
//     }
//  }

btnRegister.addEventListener('click', ()=> {
    try{
        const userObj = {
            email: emailR.value,
            name: name.value,
            password: passwordR.value,
            admin: admin.value,
            user: user.value,
        }        
        createNewUser(db,userObj).then(response => console.log('este es el id de referencia ' + response.id))
    }catch(error){
        console.error(error)
    }
})


