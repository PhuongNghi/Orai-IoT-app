import VueFire from 'vuefire'
import Firebase from 'firebase'

var db = Firebase.initializeApp({
            databaseURL: 'https://orai-c91c3.firebaseio.com/'
         });

export default db.database(); 
