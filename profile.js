// let account = localStorage.getItem('_account');
// if(account == null){
//   document.location.href ="login.html"
// }
// localStorage.removeItem('_account');
// console.log(account)
// account = atob(account);
// account = JSON.parse(account);
// console.log(account)

let database = firebase.database().ref("posts")
database.once("value",function(result){
    console.log(result.val())
})
let container = document.getElementById("main_user");
let mama = document.getElementById("sidebar");
let face = document.getElementById("post");
let insta = document.getElementById("feed");


let user = {
    name: "Yo Mama",
    email: "YoMamaSoFine@damnson.org",
    location: "Brooklyn,NY",
}


function userUser(user){
    let userElement = document.createElement("h1");
    userElement.innerHTML = user.name;
    container.appendChild(userElement);
}


function userMom(user){
    let userMom = document.createElement("h1");
    userMom.innerHTML = user.email;
    container.appendChild(userMom);
}



function userLoser(user){
    let userLoser = document.createElement("h1");
    userLoser.innerHTML = user.location;
    container.appendChild(userLoser);
}



function buttonUse(){
    let press = document.createElement("button");
    let walk = document.createElement("button");
    press.id = "follow";
    walk.id = "follow";
    press.innerHTML = "Follow";
    walk.innerHTML = "Message";
    container.appendChild(press);
    container.appendChild(walk);
}



function menu(){
    let eventElement = document.createElement("h2");
    let petitionElement = document.createElement("h2");
    let watchElement = document.createElement("h2");
    let settingsElement = document.createElement("h2");
    eventElement.id = "event";
    petitionElement.id = "petitions";
    watchElement.id = "watch";
    settingsElement.id = "settings";
    eventElement.innerHTML = "Events/Protests";
    petitionElement.innerHTML = "Petitions";
    watchElement.innerHTML = "Watch";
    settingsElement.innerHTML = "Settings";
    mama.appendChild(eventElement);
    mama.appendChild(petitionElement);
    mama.appendChild(watchElement);
    mama.appendChild(settingsElement);
}

function userFeed(){
    let autoElement = document.createElement("h2");
    autoElement.id = "enter";
    autoElement.innerHTML = "Let your voice be heard..."
    face.appendChild(autoElement);
    let postElement = document.createElement("TEXTAREA");
    postElement.cols = "50";
    postElement.rows = "5";
    postElement.id = "book";
    postElement.innerHTML = "";
    face.appendChild(postElement);
    let click = document.createElement("button");
    click.id = "click";
    click.innerHTML = "Submit";
    face.appendChild(click);
    let messageElement = document.getElementById("book");
    click.addEventListener("click", userWrite);

    function userWrite(){
        let message = messageElement.value;
        messageElement = "";
        console.log(message);
        let id = "";
        for(let i = 0; i<5; i++){
            id += Math.floor(Math.random() * 10);
        }
        //Update database here
        let value = {
            NAME: user.name,
            MESSAGE: message,
            ID: id
        }
        let database = firebase.database().ref("posts/" + id)
        database.update(value);
    }
    database.on("child_added", addMessagetoBoard,);


    // let messageContainer = document.getElementById("book");

    function addMessagetoBoard(rowData){
        let row = rowData.val();
        let message = row.MESSAGE;
        let mainContainer = document.createElement("div");
        mainContainer.id = "facebook"
        let pElement = document.createElement("p");
        pElement.id = "yeet";
        pElement.innerText = message;
        let proPic = document.createElement("img");
        proPic.id = "generic";
        proPic.src = "Profile_Pic.jpg";
        let profileElement = document.createElement("h2");
        profileElement.id = "luis";
        profileElement.innerHTML = user.name;
        mainContainer.appendChild(profileElement);
        mainContainer.appendChild(proPic);
        mainContainer.appendChild(pElement);   
        insta.appendChild(mainContainer);
    }   

}

function addPost(user){
    let mainContainer = document.createElement("div");
    mainContainer.id = "facebook"
    // let pElement = document.createElement("p");
    // pElement.id = "yeet";
    // pElement.innerText = profile.name;
    let imageElement = document.createElement("img");
    imageElement.id = "news";
    imageElement.href = "https://medium.com/all-star-code/forget-work-life-balance-its-all-about-work-life-harmony-a6841eeb4ad6";
    imageElement.src = "NewsArticle.jpeg";
    let proPic = document.createElement("img");
    proPic.id = "generic";
    proPic.src = "Profile_Pic.jpg";
    let profileElement = document.createElement("h2");
    profileElement.id = "luis";
    profileElement.innerHTML = user.name;
    let articleElement = document.createElement("a");
    articleElement.id = "article";
    articleElement.href = "https://medium.com/all-star-code/forget-work-life-balance-its-all-about-work-life-harmony-a6841eeb4ad6";
    articleElement.innerHTML = "Forget Work Life Balance, It's All About Work Life Harmony";
    mainContainer.appendChild(profileElement);
    mainContainer.appendChild(proPic);
    // mainContainer.appendChild(pElement);   
    mainContainer.appendChild(imageElement);
    mainContainer.appendChild(articleElement);
    insta.appendChild(mainContainer);
}  





userUser(user);
userMom(user);
userLoser(user);
buttonUse();
menu();
userFeed();
addPost(user);
