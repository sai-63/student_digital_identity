import PushNotificationManager from "./PushNotificationManager";
import InstallPrompt from "./InstallPrompt";

export default function Page() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
}
