import {
getFirestore,
collection,
addDoc,
getDocs,
doc,
deleteDoc,
updateDoc,
db,
} from "./firbase.js";

const feedbck = document.getElementById("feedbck");
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  keyboard: false
})
var userbtn = document.getElementById("userbtn");
var feedbtn = document.getElementById("feedbtn");

// if user already login on same pc
window.addEventListener("DOMContentLoaded", function () {
  var uid = localStorage.getItem("uid");
  if (!uid) {
    window.location.href = "index.html";
  }
  console.log(uid, "uid");
});


// fucntion for getting data from firebase
async function feed() {

  feedbck.innerHTML = "";
  console.log("blog load");
  var uid = localStorage.getItem("uid");
  console.log(uid, "uid");

  if (!uid) {
    location.replace("./index.html");
    return;
  }
  var BlogArr = [];
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach(function (doc) {
    BlogArr.push({
      title: doc.data().title,
      desc: doc.data().description,
      uid: doc.data().uid,
      image: doc.data().image,
      blogId: doc.id,

    });
  });
  console.log(BlogArr, "BlogArr");


  for (var i = 0; i < BlogArr.length; i++) {
    var blog = BlogArr[i];
    // console.log(blog);

    feedbck.innerHTML += createUI(blog.title, blog.desc, blog.image, blog.uid, blog.blogId);

  }

  //user button is ative
  feedbtn.classList.add("active");
  userbtn.classList.remove("active");
  console.log(userbtn);
}
window.feed = feed;

async function OnlyUserPost() {
  feedbck.innerHTML = "";

  console.log("OnlyUserPost");
  var uid = localStorage.getItem("uid");
  console.log(uid, "uid");

  if (!uid) {
    location.replace("./index.html");
    return;
  }
  var BlogArr = [];
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach(function (doc) {
    BlogArr.push({
      title: doc.data().title,
      desc: doc.data().description,
      uid: doc.data().uid,
      image: doc.data().image,
      blogId: doc.id,

    });
  });
  // console.log(BlogArr, "BlogArr");
  for (var i = 0; i < BlogArr.length; i++) {
    var blog = BlogArr[i];
    // console.log(blog);
    if (blog.uid == uid) {
      console.log("conndition matched");
      feedbck.innerHTML += createUIforUser(blog.title, blog.desc, blog.image, blog.uid, blog.blogId);
    }
  }

  userbtn.classList.add("active");
  feedbtn.classList.remove("active");


}
window.OnlyUserPost = OnlyUserPost;


// logout function
function logout() {
  localStorage.removeItem("uid");
  window.location.href = "index.html";
}
window.logout = logout;



document.getElementById('close-btn').addEventListener('click', function (event) {
  event.preventDefault();
  // Additional code if needed
});

// like button function
function likebtn(uniqueId) {
  var like = document.getElementById(`${uniqueId}_likebtn`);
  // console.log(like);
  if (like.style.background == "red") {
    like.style.background = "";
  }
  else {
    like.style.background = "red";
  }

}
window.likebtn = likebtn;


// readmore button function
function readmore(uniqueId) {
  var dots = document.getElementById(`${uniqueId}_dots`);
  var moreText = document.getElementById(`${uniqueId}_more`);
  var btnText = document.getElementById(`${uniqueId}_myBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`
    moreText.style.display = "inline";
  }
}
window.readmore = readmore;


async function deletePost(uniqueId) {
  console.log(uniqueId);
  await deleteDoc(doc(db, "posts", uniqueId));
  OnlyUserPost();
}
window.deletePost = deletePost;


// upload image function
document.getElementById('upload-btn').addEventListener('click', function (event) {
  // Prevent the default button behavior, which may be closing the modal
  event.preventDefault();

  // Trigger click on the hidden file input
  document.getElementById('file-input').click();
});

// Handle file selection
document.getElementById('file-input').addEventListener('change', function () {
  // Access the selected file(s) using this.files
  var selectedFiles = this.files;

  // Display the file name
  var fileNameDisplay = document.getElementById('file-name');
  if (selectedFiles.length > 0) {
    fileNameDisplay.textContent = 'Selected File: ' + selectedFiles[0].name;
  } else {
    fileNameDisplay.textContent = 'No file selected';
  }
});



// add post function
async function addpost() {
  event.preventDefault();
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  var file = document.getElementById("file-input");
  var uid = localStorage.getItem("uid");

  var postObj = {
    title: title.value,
    description: description.value,
    uid: uid,
    // file:file.files[0],
    image: ""
  }
  const docRef = await addDoc(collection(db, "posts"), postObj);
  // creatUI(title.value, description.value, "", uid);
  console.log(docRef.id);
  feedbck.innerHTML += createUI(title.value, description.value, "", uid, docRef.id);
  myModal.hide();
  title.value = "";
  description.value = "";
  file.value = "";
}
window.addpost = addpost;


// function for creating UI
function createUI(title, description, image, uid, unID) {
  var length = description.length;
  var uniqueId = unID; // Unique ID for each card
  console.log(unID);
  if (length > 100) {
    var des = description.slice(0, 100);
    var des2 = description.slice(100, length);
  } else {
    var des = description;
    var des2 = "";
  }

  var UI = `
    <div class="card">
      <form class="form">
        <div class="picture-blk">
          <img src="img/screen-shot-2023-04-13-at-10-35-31-am.webp" alt="">
        </div>
        <div class="title">${title}</div>
        <div class="description">
          <p>
            ${des}<span id="${uniqueId}_dots">...</span><span id="${uniqueId}_more">${des2}</span>
          </p>
        </div>
        <div class="login-with">
          <div class="button-log" id="${uniqueId}_likebtn" onclick="likebtn('${uniqueId}')">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="button-log" onclick="readmore('${uniqueId}')" id="${uniqueId}_myBtn">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </form>
    </div>
  `;

  return UI;
}

window.createUI = createUI;

function createUIforUser(title, description, image, uid, unID) {
  var length = description.length;
  var uniqueId = unID; // Unique ID for each card
  console.log(unID);
  if (length > 100) {
    var des = description.slice(0, 100);
    var des2 = description.slice(100, length);
  } else {
    var des = description;
    var des2 = "";
  }

  var UI = `
    <div class="card">
      <form class="form">
        <div class="picture-blk">
          <img src="img/screen-shot-2023-04-13-at-10-35-31-am.webp" alt="">
        </div>
        <div class="title">${title}</div>
        <div class="description">
          <p>
            ${des}<span id="${uniqueId}_dots">...</span><span id="${uniqueId}_more">${des2}</span>
          </p>
        </div>
        <div class="login-with">
          <div class="button-log" id="${uniqueId}_likebtn" onclick="likebtn('${uniqueId}')">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="button-log" onclick="readmore('${uniqueId}')" id="${uniqueId}_myBtn">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div class="button-log" onclick="deletePost('${uniqueId}')" id="${uniqueId}_delbtn">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </form>
    </div>
  `;
  return UI;
}

window.createUIforUser = createUIforUser;


