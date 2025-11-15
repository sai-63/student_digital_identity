self.addEventListener("push", (event) => {
  console.log("Push received:", event);

  let data = {};

  try {
    data = event.data ? JSON.parse(event.data.text()) : {};
  } catch (e) {
    console.error("Push parse error:", e);
  }

  const title = data.title || "Notification";
  const options = {
    body: data.body || "No body",
    icon: "/icon.png",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
