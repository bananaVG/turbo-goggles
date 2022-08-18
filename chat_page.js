//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDmhBmh5AwC4feLC3LoFqrpkbc9uAxUgLo",
      authDomain: "i-don-t-want-to-kwit.firebaseapp.com",
      databaseURL: "https://i-don-t-want-to-kwit-default-rtdb.firebaseio.com",
      projectId: "i-don-t-want-to-kwit",
      storageBucket: "i-don-t-want-to-kwit.appspot.com",
      messagingSenderId: "628667822531",
      appId: "1:628667822531:web:06f525df8b432b11474d76",
      measurementId: "G-6HH72JV12Q"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                
                        //End code
                  }
            });
      });
}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}