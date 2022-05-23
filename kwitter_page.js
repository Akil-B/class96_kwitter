//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCjZnMRlhhB2F1_pB5YTU21jLdogSdv4tY",
      authDomain: "kwitter-252ba.firebaseapp.com",
      databaseURL: "https://kwitter-252ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-252ba",
      storageBucket: "kwitter-252ba.appspot.com",
      messagingSenderId: "716260051274",
      appId: "1:716260051274:web:4862e707d02d3f0fca99b3",
      measurementId: "G-271YEL8MHK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
