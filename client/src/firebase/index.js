import firebase from 'firebase/app';
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyB1TuX7FfcNPTpOhU6p_gaTlaMhTulQieU",
    authDomain: "wemeet-7b05f.firebaseapp.com",
    projectId: "wemeet-7b05f",
    storageBucket: "wemeet-7b05f.appspot.com",
    messagingSenderId: "572296914574",
    appId: "1:572296914574:web:5ea0c7aa1aaa93b6894bdf",
    measurementId: "G-DXVJ64QRVD"
};

firebase.initializeApp(firebaseConfig)

const storage=firebase.storage();

export {storage, firebase as default};
