import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// export interface IFirebaseContext {
//     firebase: firebase.app.App,
// }

// export const FirebaseContext = createContext({} as IFirebaseContext)



const config = {
    apiKey: "AIzaSyChFFP283yktXz0zv7WfSyZPRufZjGVAew",
    authDomain: "open-mic-fb413.firebaseapp.com",
    projectId: "open-mic-fb413",
    databaseURL: "https://open-mic-fb413.firebaseapp.com",
    storageBucket: "open-mic-fb413.appspot.com",
    messagingSenderId: "220606658196",
    appId: "1:220606658196:web:27faa77a2369f621146681",
    measurementId: "G-NES508N9XS"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


export default firebase;

// const initFirebase = () => {
//     if (!firebase.apps.length) {
//       firebase.initializeApp(config);
//     }
// }

// export const FirebaseProvider = ({ children }: any) => {
//     initFirebase();
// }