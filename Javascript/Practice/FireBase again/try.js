const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const listCont = document.getElementById('list-cont');
const auth = getAuth();
let currentUser = null;

// Initialize Firebase authentication state listener
onAuthStateChanged(auth, (user) => {
    currentUser = user;
    if (user) {
        // User is signed in
        console.log('User is signed in:', user);
        // Load tasks for the signed-in user
        pageLoad();
    } else {
        // User is signed out
        console.log('User is signed out');
        // Clear the list for signed-out users
        listCont.innerHTML = '';
    }
});

async function addTask() {
    if (currentUser) {
        if (input.value === '') {
            alert('Please enter a task');
        } else {
            const todobject = { todo: input.value, userId: currentUser.uid };
            const docRef = await addDoc(collection(db, 'todos'), todobject);

            let list = document.createElement('li');
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
    } else {
        console.log('User not authenticated');
    }
}

listCont.addEventListener('click', function (e) {
    if (currentUser) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
        } else if (e.target.classList.contains('fa-pen')) {
            // Handle edit (pen) button click
            const newTodo = prompt('Enter new todo');
            if (newTodo) {
                const listItem = e.target.closest('#span1').querySelector('li');
                listItem.textContent = newTodo;

                // Update the document in the database
                const docId = e.target.closest('#span1').dataset.docid;
                const docRef = doc(collection(db, 'todos'), docId);
                updateDoc(docRef, { todo: newTodo });
            }
        } else if (e.target.classList.contains('fa-circle-xmark')) {
            // Handle delete (cross) button click
            const docId = e.target.closest('#span1').dataset.docid;
            const docRef = doc(collection(db, 'todos'), docId);
            deleteDoc(docRef);

            e.target.closest('#span1').remove();
        }
    } else {
        console.log('User not authenticated');
    }
}, false);

// for getting data from firebase to print on the screen
async function pageLoad() {
    if (currentUser) {
        const querySnapshot = await getDocs(query(collection(db, 'todos'), where('userId', '==', currentUser.uid)));
        querySnapshot.forEach((doc) => {
            let list = document.createElement('li');
            list.dataset.docid = doc.id; // Store the document ID in the dataset for later use
            list.innerHTML = `
                <div id="span1">
                    <li>${doc.data().todo}</li>
                    <span id="span-inner">
                        <i class="fa-solid fa-pen" id="edit"></i>
                        <i class="fa-regular fa-circle-xmark" id="dlt"></i>
                    </span>
                </div>`;
            listCont.appendChild(list);
        });
    }
}

addBtn.addEventListener('click', addTask);
