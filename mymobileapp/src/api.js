import VueFire from 'vuefire'
import Firebase from 'firebase'

var userOn = sessionStorage.getItem("user");
console.log(userOn);

let db;

// if(userOn == 'Phuong-Nghi'){
// 	db = Firebase.initializeApp({
//         databaseURL: 'https://oraiprezvide.firebaseio.com/'
//      });
// } else if(userOn == 'Véro') {
// 	db = Firebase.initializeApp({
//         databaseURL: 'https://orai-c91c3.firebaseio.com/'
//      });
// }

db = Firebase.initializeApp({
        databaseURL: 'https://orai-c91c3.firebaseio.com/'
     });


export default db.database(); 
