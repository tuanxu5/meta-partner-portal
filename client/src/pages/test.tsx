import FacebookLogin from "@greatsumini/react-facebook-login";

export default function LoginFacebook() {
  const handleClick = () => {
    const facebookLoginUrl = `${window.location.origin}/login-facebook?https://www.facebook.com/login.php?skip_api_login=1`;

    const width = 600;
    const height = 650;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
      facebookLoginUrl,
      "CustomWindowName", // Đặt tên tuỳ chỉnh cho cửa sổ mới
      `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=no,resizable=no`
    );
  };

  return (
    <>
      <button onClick={handleClick}>12312</button>;
      <FacebookLogin
        appId="1459174828275528"
        onSuccess={(response) => {
          console.log("Login Success!", response);
        }}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
          console.log("Get Profile Success!", response);
        }}
        style={{
          backgroundColor: "#4267b2",
          color: "#fff",
          fontSize: "16px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "4px",
        }}
      />
    </>
  );
}
