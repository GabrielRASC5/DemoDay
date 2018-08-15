let profile = {
    name: "All Star Code",
    ceo: "Christina Lewis",
    address: "All Star Code, 60 Broad Street, 25th Floor, Suite 2503, New York, NY 10004",
    company: "All Star Code",
    goal:"Diversify the tech industry"
};

// let container = document.getElementById("main_profile");


let database = firebase.database().ref("posts")
database.once("value",function(result){
    console.log(result.val())
})
let container = document.getElementById("main_user");
let mama = document.getElementById("sidebar");
let face = document.getElementById("post");
let insta = document.getElementById("feed");
let name =  document.getElementById("info");

// let user = {
//     name: "Yo Mama",
//     email: "YoMamaSoFine@damnson.org",
//     location: "Brooklyn,Ny",
// }


function userUser(profile){
    let userElement = document.createElement("h1");
    userElement.innerHTML = profile.name;
    let linkElement = document.createElement("a");
    linkElement.id = "link";
    linkElement.href = "https://www.allstarcode.org/"
    linkElement.innerHTML = "https://www.allstarcode.org/";
    container.appendChild(userElement);
    container.appendChild(linkElement);
}


// function userMom(profile){
//     let userMom = document.createElement("h1");
//     userMom.innerHTML = profile.ceo;
//     container.appendChild(userMom);
// }



// function userLoser(profile){
//     let userLoser = document.createElement("h1");
//     userLoser.innerHTML = profile.address;
//     container.appendChild(userLoser);
// }



function buttonUse(){
    let press = document.createElement("button");
    let walk = document.createElement("button");
    let donate = document.createElement("button");
    press.id = "follow";
    walk.id = "follow";
    donate.id = "follow";
    press.innerHTML = "Follow";
    walk.innerHTML = "Message";
    donate.innerHTML = "Donate";
    container.appendChild(press);
    container.appendChild(walk);
    container.appendChild(donate);
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
    let autoElement = document.createElement("h1");
    autoElement.id = "enter";
    autoElement.innerHTML = "About: "
    face.appendChild(autoElement);
}

function orgBio(profile){
    let ceoElement = document.createElement("h2");
    ceoElement.id = "ceo";
    ceoElement.innerHTML = "CEO: " + profile.ceo;
    face.appendChild(ceoElement);
    let addElement = document.createElement("h2");
    addElement.id = "ceo";
    addElement.innerHTML = "ADDRESS: " + profile.address;
    face.appendChild(addElement);
    let goalElement = document.createElement("h2");
    goalElement.id =  "ceo";
    goalElement.innerHTML = "GOAL: " +  profile.goal;
    face.appendChild(goalElement);
}

function addMessagetoBoard(profile){
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
    proPic.src = "AllStarCodeLogo.jpg";
    let profileElement = document.createElement("h2");
    profileElement.id = "luis";
    profileElement.innerHTML = profile.name;
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

function newPost(profile){
    let mainPost = document.createElement("div");
    mainPost.id = "kik"
    // let pElement = document.createElement("p");
    // pElement.id = "yeet";
    // pElement.innerText = profile.name;
    let imageElement = document.createElement("img");
    imageElement.id = "news";
    imageElement.href = "https://medium.com/all-star-code/forget-work-life-balance-its-all-about-work-life-harmony-a6841eeb4ad6";
    imageElement.src = "NewsArticle_2.jpeg";
    let proPic = document.createElement("img");
    proPic.id = "generic";
    proPic.src = "AllStarCodeLogo.jpg";
    let profileElement = document.createElement("h2");
    profileElement.id = "luis";
    profileElement.innerHTML = profile.name;
    let articleElement = document.createElement("a");
    articleElement.id = "ligma";
    articleElement.href = "https://medium.com/all-star-code/announcing-all-star-codes-corporate-partners-for-the-2017-summer-intensive-program-a1e3f72f6f5";
    articleElement.innerHTML = "Announcing All Star Code’s Corporate Partners for the 2017 Summer Intensive Program";
    mainPost.appendChild(profileElement);
    mainPost.appendChild(proPic);
    // mainContainer.appendChild(pElement);   
    mainPost.appendChild(imageElement);
    mainPost.appendChild(articleElement);
    name.appendChild(mainPost);
} 

function anotherOne(profile){
    let mainPost = document.createElement("div");
    mainPost.id = "khaled"
    // let pElement = document.createElement("p");
    // pElement.id = "yeet";
    // pElement.innerText = profile.name;
    let imageElement = document.createElement("img");
    imageElement.id = "news";
    imageElement.href = "https://medium.com/all-star-code/forget-work-life-balance-its-all-about-work-life-harmony-a6841eeb4ad6";
    imageElement.src = "NewsArticle_3.jpeg";
    let proPic = document.createElement("img");
    proPic.id = "generic";
    proPic.src = "AllStarCodeLogo.jpg";
    let profileElement = document.createElement("h2");
    profileElement.id = "luis";
    profileElement.innerHTML = profile.name;
    let articleElement = document.createElement("a");
    articleElement.id = "dj";
    articleElement.href = "https://medium.com/all-star-code/all-star-code-expands-into-pittsburgh-increasing-access-to-the-tech-industry-for-black-and-latino-44e688976883";
    articleElement.innerHTML = "All Star Code Expands into Pittsburgh, Increasing Access to the Tech Industry for Black and Latino Young Men";
    mainPost.appendChild(profileElement);
    mainPost.appendChild(proPic);
    // mainContainer.appendChild(pElement);   
    mainPost.appendChild(imageElement);
    mainPost.appendChild(articleElement);
    name.appendChild(mainPost);
} 




userUser(profile);
// userMom(profile);
// userLoser(profile);
buttonUse();
menu();
userFeed();
orgBio(profile);   
addMessagetoBoard(profile); 
newPost(profile);
anotherOne(profile);