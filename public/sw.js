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

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const urlToOpen = event.notification.data?.url || "https://youtube.com";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === urlToOpen && "focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});

