// fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
// .then((response)=>console.log(response,"response"))
// .catch((error)=>console.log(error,"error"))


// const getdata = async () => {
//     try {
//         const data = await fetch('https://emojihub.yurace.pro/api/all')
//             .then((res) => res.json());
//         console.log(data, "data");

//     }
//     catch (error) {
//         alert("api");
//     }
//     console.log("yes I am running even api is not correct");


// }
var count;
var emojicon = document.getElementById("emojiInfo");
var emojicode = document.getElementById("emojiCode");
const getdata = async () => {
    try {
        const data = await fetch('https://emojihub.yurace.pro/api/all')
            .then((res) => res.json());

        console.log("Emoji Data:", data);

        // Map and display the data as needed
        if (data && Array.isArray(data)) {
            for (let i = 0; i < Math.min(20, data.length); i++) {
                const emoji = data[i];
                console.log(emoji);
                emojicon.innerHTML += `
                    <div class="emoji-info">
                        <h2>Emoji Information</h2>
                        <ul>
                            <li><strong>Name:</strong> ${emoji.name}</li>
                            <li><strong>Category:</strong> ${emoji.category}</li>
                            <li><strong>Group:</strong> ${emoji.group}</li>
                            <h2>Emoji Code</h2>
                            <p><strong>HTML Code:</strong>['${emoji.htmlCode}']</p>
                            <p><strong>Unicode:</strong> ${emoji.unicode}</p>
                        </ul>
                    </div>
                `;
                emojicode.innerHTML += `
                
                `;
            }
        } else {
            console.error("Invalid data format from the API.");
        }
    } catch (error) {
        console.error("Error fetching data from the API:", error);
        alert("API error");
    }
}

getdata();

// Constants for categories and groups
const categories = ['Category1', 'Category2', 'Category3']; // Replace with actual categories from the API
const groups = ['Group1', 'Group2', 'Group3']; // Replace with actual groups from the API

// Function to filter and display emojis based on selected category or group
const filterEmojis = (filterType, filterValue) => {
const filteredData = data.filter(emoji => emoji[filterType] === filterValue);
    
    // Clear existing emoji display
    emojicon.innerHTML = '';

    // Display filtered emojis
    for (let i = 0; i < Math.min(20, filteredData.length); i++) {
        const emoji = filteredData[i];
        // ... (same display logic as before)
    }
};

// Function to create buttons for categories and groups
const createButtons = () => {
    // Create category buttons
    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.addEventListener('click', () => filterEmojis('category', category));
        document.getElementById('categoryButtons').appendChild(categoryButton);
    });

    // Create group buttons
    groups.forEach(group => {
        const groupButton = document.createElement('button');
        groupButton.textContent = group;
        groupButton.addEventListener('click', () => filterEmojis('group', group));
        document.getElementById('groupButtons').appendChild(groupButton);
    });
};

// Call createButtons function to initialize buttons
createButtons();

// Call the getdata function to fetch and display initial data
getdata();

// Call the function to fetch and display data
// const getdata= async()=>{
//    const data=await fetch('https://fakestoreapi.com/products');
//    console.log(data,"data");
// }

// class std{
//     constructor(name, age)
//     {
//         this.name=name;
//         this.age=age;
//     }
// }

// const myname= new std("abdullah",45);
// console.log(myname);
