import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAIWaSNpUmfMp6Tjgp2P5SUiDV36YKDLXQ",
    authDomain: "yudhvirrajme.firebaseapp.com",
    databaseURL: "https://yudhvirrajme.firebaseio.com",
    projectId: "yudhvirrajme",
    storageBucket: "yudhvirrajme.appspot.com",
    messagingSenderId: "416339851985"
};

const firebaseApp = firebase.initializeApp (config);

export default class Database {

    static projectsRef = firebase.database ().ref ('projects');

    static genericListenForItems (itemsRef, callback) {
        let items = [];

        return itemsRef.on('value', (snapshot) => {

            if (snapshot.val ()) {
                let val = snapshot.val ();

                callback (val);
            }

        });
    }

    static listenForItems (itemsRef, callback) {

        Database.genericListenForItems (itemsRef, (snapshotVal) => {
            let items = [];
        
            items = Object.keys (snapshotVal).map ((item) => {
                return snapshotVal [item];
            });

            callback (items);
        });

        
    }

    static listenForItemsWithKeys(itemsRef, callback) {

        Database.genericListenForItems (itemsRef, (snapshotVal) => {
            let items = [];
            
            items = Object.keys (snapshotVal).map ((item) => {
                snapshotVal[item].id = item;
                return snapshotVal [item];
            });

            callback (items);
        });

    }



}