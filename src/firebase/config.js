import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAZy9Yx3sjAD7JpQx5828Ec5xTRmIDyZfo',
  authDomain: 'udemyvue-6d96b.firebaseapp.com',
  projectId: 'udemyvue-6d96b',
  storageBucket: 'udemyvue-6d96b.appspot.com',
  messagingSenderId: '368177863676',
  appId: '1:368177863676:web:2cf2817b55ada472327079',
};
//init firebase
firebase.initializeApp(firebaseConfig);
//init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
