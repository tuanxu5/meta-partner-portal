import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt_mOQ7CPM-iEzIzDqgehI7VxUodAOCcI",
  authDomain: "meta-partner-abfd4.firebaseapp.com",
  projectId: "meta-partner-abfd4",
  storageBucket: "meta-partner-abfd4.appspot.com",
  messagingSenderId: "988018734294",
  appId: "1:988018734294:web:bcc4b79943d296f9ea4577",
  measurementId: "G-DMVWH6Z8D2",
};

// 🔥 Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

// ✅ Hàm khởi tạo reCAPTCHA
const setupRecaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("✅ reCAPTCHA verified!", response);
        },
        "expired-callback": () => {
          console.log("⚠️ reCAPTCHA expired, resetting...");
          window.recaptchaVerifier = null;
          setupRecaptcha(); // Reset lại nếu hết hạn
        },
      },
      auth // 🔥 Quan trọng: Phải truyền `auth` vào đây
    );
    window.recaptchaVerifier.render().then((widgetId) => {
      console.log("🟢 reCAPTCHA Widget ID:", widgetId);
    });
  }
};

export { auth, setupRecaptcha, signInWithPhoneNumber };
