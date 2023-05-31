var firebaseConfig = {
      apiKey: "AIzaSyACODEdUCqJiMYjMuq7SSsf2pTd_c7xd6g",
      authDomain: "kwitter-93bc5.firebaseapp.com",
      databaseURL: "https://kwitter-93bc5-default-rtdb.firebaseio.com",
      projectId: "kwitter-93bc5",
      storageBucket: "kwitter-93bc5.appspot.com",
      messagingSenderId: "500188193273",
      appId: "1:500188193273:web:a9859dec1f9b88ec5a5d28",
      measurementId: "G-9JYWWHFKJS"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
document.getElementsById("user_name").innerHTML="welcome"+user_name+"!"; 
    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name", name);
      localStorage.removeItem("room_name", name);
      window.location = "kwitter.html";
}