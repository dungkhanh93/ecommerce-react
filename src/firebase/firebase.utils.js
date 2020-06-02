import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCvB3vMFnAj9nOPR-NO_bCw2DLPt2y7kd4',
  authDomain: 'ecommerce-react-4b38b.firebaseapp.com',
  databaseURL: 'https://ecommerce-react-4b38b.firebaseio.com',
  projectId: 'ecommerce-react-4b38b',
  storageBucket: 'ecommerce-react-4b38b.appspot.com',
  messagingSenderId: '1087642245496',
  appId: '1:1087642245496:web:87d24c4b85c3f000add08d',
  measurementId: 'G-NC0115H18S',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
