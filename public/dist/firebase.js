"use strict";
exports.__esModule = true;
var firebase_1 = require("firebase");
var firebaseConfig = {
    apiKey: 'AIzaSyCXaLLjJ5qhQDstEXnL0oD4mhTvjHGcqq0',
    authDomain: 'vaganonder-43c52.firebaseapp.com',
    databaseURL: 'https://vaganonder-43c52.firebaseio.com',
    projectId: 'vaganonder-43c52',
    storageBucket: 'vaganonder-43c52.appspot.com',
    messagingSenderId: '1024962984993',
    appId: '1:1024962984993:web:98e9b8b7b0ce28ac727760'
};
exports["default"] = !firebase_1["default"].apps.length
    ? firebase_1["default"].initializeApp(firebaseConfig).firestore()
    : firebase_1["default"].app().firestore();
