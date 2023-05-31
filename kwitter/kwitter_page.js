//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyA8lAwICLo3b-7aIyrS5XoIEDxkduRSvYY",
      authDomain: "class-test-2d6ab.firebaseapp.com",
      databaseURL: "https://class-test-2d6ab-default-rtdb.firebaseio.com",
      projectId: "class-test-2d6ab",
      storageBucket: "class-test-2d6ab.appspot.com",
      messagingSenderId: "920495711131",
      appId: "1:920495711131:web:717e93d9bc48e69274773e",
      measurementId: "G-11YSKRWLT6"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data ['name'];
message = message_data['message'];
like = message_data('like');
name_with_tag = "<h4>"+ name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4' id="+ message + "</h4>";
like_button ="<button class='btn btn-warning'"+firebase_message_id+"value"+like+"onclick='updateLike(this.id)'>";
span_with_tag = "'<span class='glyhicon glyhicon-thumbs-up'>Like:"+ like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();



function send()
{
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      
      });

      document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
      console.log("clicked on like buttin - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      })
}

function logout(){
      localStorage.removeItem("user_name");     q
      localStorage.removeItem("user_name");
      window.location.replace("kwitter.html");
}