import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCq4uiWNKduAj9gmCsmvt7p0wUyRtHV894",
    authDomain: "project-67-20e63.firebaseapp.com",
    projectId: "project-67-20e63",
    storageBucket: "project-67-20e63.appspot.com",
    messagingSenderId: "521681071878",
    appId: "1:521681071878:web:5fc28fbc04557fd552f887"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();

