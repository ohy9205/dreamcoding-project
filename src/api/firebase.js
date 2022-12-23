import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const database = getDatabase(app);

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
  onAuthStateChanged(auth, async (user) => {
    //adminUser가 비동기 함수이므로 여기서도 비동기 처리해준다
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

// user데이터 읽기 (promise를 반환하므로 async붙여야함)
async function adminUser(user) {
  const dbRef = ref(database);
  return get(child(dbRef, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

// products 추가
export async function addNewProduct(product, imageUrl) {
  const id = Date.now();
  return set(ref(database, "products/" + id), {
    ...product,
    id: id,
    price: parseInt(product.price),
    image: imageUrl,
    options: product.options.trim().split(","),
  });
}
