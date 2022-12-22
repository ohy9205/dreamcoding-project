import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 로그인, 로그아웃 결과 return하지 않아도 되는 이유?
// onUserStateChange실행하면 자동으로 setUser처리해줌
export function login() {
  signInWithPopup(auth, provider).catch((error) => console.error);
}
export function logout() {
  signOut(auth).catch((error) => console.error);
}
export function onUserStateChange(callback) {
  // 상태가 변경될때마다 실행될 콜백함수 전달
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
