
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAqYTl2fNmdx4OAA_HQPFmnSuNCy0Oh_mE",
    authDomain: "todolist-14f08.firebaseapp.com",
    projectId: "todolist-14f08",
    storageBucket: "todolist-14f08.appspot.com",
    messagingSenderId: "237538176515",
    appId: "1:237538176515:web:441e209bc3d75e94346836"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  console.log(db);
  console.log(app);

// const input = document.getElementById('input');
// const list_cont = document.getElementById('listCont');
// const addbutton = document.getElementById('add').addEventListener('click', addTask);

const input = document.getElementById('input');
const addBtn = document.getElementById('add').addEventListener('click', addTask);
const listCont = document.getElementById('list-cont');
// const editBtn = document.getElementById('edit').addEventListener('click', editTask);



async function addTask() {
    if (input.value === '') {
        alert('Please enter a task');
    } else {
        let list = document.createElement('li');
        var todobject = { todo: input.value };
        var docRef = await addDoc(collection(db, 'todos'), todobject);
        list.innerHTML = `
            <div id="span1">
                <li>${input.value}</li>
                <span id="span-inner">
                    <i class="fa-solid fa-pen" id="edit"></i>
                    <i class="fa-regular fa-circle-xmark" id="dlt"></i>
                </span>
            </div>`;
        listCont.appendChild(list);
    }
    input.value = '';
}

async function editTask(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.classList.contains('fa-pen')) {
        // Handle edit (pen) button click
        const newTodo = prompt('Enter new todo');
        if (newTodo) {
            const listItem = e.target.closest('#span1').querySelector('li');
            listItem.textContent = newTodo;

            // Update the document in the database
            const docId = e.target.closest('li').id;
            console.log(docId);
            const docRef = doc(collection(db, 'todos'), docId);
            updateDoc(docRef, { todo: newTodo });
        }
    } 
    // else if (e.target.classList.contains('fa-circle-xmark')) {
    //     // Handle delete (cross) button click
    //     e.target.closest('#span1').remove();
    // }
};

window.editTask = editTask;


// for getting data from firebase to print on the screen
window.addEventListener('load', pageLoad);

async function pageLoad() {
    const querySnapshot = await getDocs(collection(db, 'todos'));
    querySnapshot.forEach((doc) => {
        let list = document.createElement('li');
        list.innerHTML = `
            <div id="span1">
                <li>${doc.data().todo}</li>
                <span id="span-inner">
                    <i class="fa-solid fa-pen" id="edit"></i>
                    <i class="fa-regular fa-circle-xmark" id="dlt"></i>
                </span>
            </div>`;
        
        // Check if the task is checked and apply the appropriate class
        // if (doc.data().checked) {
        //     list.querySelector('li').classList.add('checked');
        // }

        listCont.appendChild(list);
    });
}


