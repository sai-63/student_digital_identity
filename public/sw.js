self.addEventListener("push", (event) => {
  console.log("Push received:", event);

  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    console.error("Push parse error:", e);
  }

  const title = data.title || "Notification";
  const options = {
    body: data.body || "",
    icon: "/icon.png",
    badge: "/badge.png",
    data: {
      url: data.url || "/",
      dateOfArrival: Date.now()
    }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url || "/")
  );
});
