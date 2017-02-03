import VueFire from 'vuefire'
import Firebase from 'firebase'

sessionStorage.setItem("user", "Véro");
var userOn = sessionStorage.getItem("user");

let db;

if(userOn == 'Phuong-Nghi'){
	db = Firebase.initializeApp({
        databaseURL: 'https://orai-c91c3.firebaseio.com/'
     });
} else if(userOn == 'Véro') {
	db = Firebase.initializeApp({
        databaseURL: 'https://oraiprezvide.firebaseio.com/'
     });
}

// db = Firebase.initializeApp({
//         databaseURL: 'https://orai-c91c3.firebaseio.com/'
//      });


export default db.database(); 
