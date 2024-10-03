import { initializeApp } from "firebase/app";
import {
  collection,
  setDoc,
  doc,
  getFirestore,
  getDocs,
  writeBatch,
  serverTimestamp,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeS0W4jHS6-MsgfwSsc4MuVzUxcwXu30I",
  authDomain: "ecommerce-shop-37833.firebaseapp.com",
  projectId: "ecommerce-shop-37833",
  storageBucket: "ecommerce-shop-37833.appspot.com",
  messagingSenderId: "505191154734",
  appId: "1:505191154734:web:c2b0d75dc52b1e3e1b8bbf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function createStorage(key) {
  return {
    key,
    db,
    read: async function () {
      const ref = collection(this.db, this.key);
      const querySnapshot = await getDocs(ref);

      const items = [];

      querySnapshot.forEach((doc) => {
        items.push({
          model: doc.data().model,
          series: doc.data().series,
          price: doc.data().price,
          img: doc.data().imageURL,
          id: doc.data().id,
          description: doc.data().description,
          descriptionShort: doc.data().descriptionShort,
        });
      });

      return items;
    },

    readById: async function (cartItems) {
      const ref = collection(this.db, this.key);
      const querySnapshot = await getDocs(ref);

      const items = [];

      querySnapshot.forEach((doc) => {
        cartItems.forEach((cartItem) => {
          if (doc.data().id == cartItem.id) {
            items.push({
              model: doc.data().model,
              series: doc.data().series,
              price: doc.data().price,
              img: doc.data().imageURL,
              id: doc.data().id,
              description: doc.data().description,
              descriptionShort: doc.data().descriptionShort,
              amount: cartItem.amount,
            });
          }
        });
      });

      return items;
    },
  };
}
