// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
// import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-functions.js";
// import { getFirestore, collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp, doc, setDoc, getDocs, query, orderBy, limit, getDoc, where, startAfter, writeBatch, arrayUnion } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthStore } from '@/store/authStore.js';

// * Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuDjpceffnrO39m_HnA4qw0dXYIuDm-pQ",
  authDomain: "this-is-me-c59ca.firebaseapp.com",
  projectId: "this-is-me-c59ca",
  storageBucket: "this-is-me-c59ca.appspot.com",
  messagingSenderId: "67646428514",
  appId: "1:67646428514:web:950eeb0e2b6173626c083b",
  measurementId: "G-C3X11M59YZ"
};

// * Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
const firestore = getFirestore(app);
const auth = getAuth();
auth.useDeviceLanguage();
export { auth, onAuthStateChanged }

// * Sign in with email and password
export async function signInWithEP(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const idTokenResult = await userCredential.user.getIdTokenResult(true);
      console.log(idTokenResult.claims.role);
      const role = idTokenResult.claims && idTokenResult.claims.role ? idTokenResult.claims.role : 'user';
      return { success: true, role };
    }).catch((error) => {
      console.error('Error signing in :', error);
      return { success: false, error: error.message || 'An error occurred' };
    });
}

// TODO Sign in with google 
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  return signInWithPopup(auth, provider)
    .then(async (userCredential) => {
      const idTokenResult = await userCredential.user.getIdTokenResult(true);
      console.log(idTokenResult.claims.role);
      const role = idTokenResult.claims && idTokenResult.claims.role ? idTokenResult.claims.role : 'user';
      return { success: true, role };
    }).catch((error) => {
      console.error('Error signing in :', error);
      return { success: false, error: error.message || 'An error occurred' };
    });
}

// * signout
export async function signout() {
  return signOut(auth).then(() => {
    return { success: true };
  }).catch((error) => {
    return { success: false, error: error.message || 'An error occurred' };
  });
}

// * Subscribe to newsletters
export async function subscribe(email) {
  try {
    // Reference to the "Email" collection
    const emailsCollection = collection(firestore, 'subscribers');

    const queryRef = query(emailsCollection, where("email", "==", email), limit(1));
    const querySnapshot = await getDocs(queryRef);
    if (querySnapshot.docs.length === 0) {
      // Add the email to the collection
      await addDoc(emailsCollection, { email });
      return { success: true };
    } else {
      return { success: false, error: 'You are already subscribed' };
    }

  } catch (error) {
    console.error('Error subscribing email:', error);
    return { success: false, error: error.message || 'An error occurred' };
  }
}

// * Unsubscribe from newsletters
export async function callUnsubscribe(email) {
  try {
    const unsubscribe = httpsCallable(functions, 'unsubscribe');
    const result = await unsubscribe({ email });
    return { ...result.data };
  } catch (error) {
    console.log(error);
    return { success: false, error: error.message || 'An error occurred' };
  }
}

// * Send contact message
export async function sendMessage(name, email, phone, message) {
  try {
    const messagesCollection = collection(firestore, 'contactMessages');

    await addDoc(messagesCollection, {
      name,
      email,
      phone,
      message,
      status: 'new',
      timestamp: Timestamp.now()
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending message:', error);
    return { success: false, error: error.message || 'An error occurred' };
  }
}
