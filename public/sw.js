self.addEventListener("push", (event) => {
  console.log("PUSH RAW EVENT:", event);

  let data = { title: "🔥 IT WORKS!", body: "You finally got a notification!" };

  try {
    if (event.data) {
      const text = event.data.text();
      console.log("PUSH RAW TEXT:", text);
      data = JSON.parse(text || "{}");
    }
  } catch (err) {
    console.error("PUSH PARSE ERROR:", err);
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/icon.png",
    })
  );
});
