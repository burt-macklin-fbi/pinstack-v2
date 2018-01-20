import Rebase from 're-base';
import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyB0wUyjGVaANFUriy7BiCIXvHcd7Mq3EX0",
    authDomain: "pinstack-burt-macklin-fbi.firebaseapp.com",
    databaseURL: "https://pinstack-burt-macklin-fbi.firebaseio.com",
    projectId: "pinstack-burt-macklin-fbi",
    storageBucket: "pinstack-burt-macklin-fbi.appspot.com",
    messagingSenderId: "613641889158"
}

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;