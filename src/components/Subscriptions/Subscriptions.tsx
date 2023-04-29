import { MqttClient } from 'mqtt/dist/mqtt';
import SubscribeForm from './SubscribeForm';
import { useCallback, useState } from 'react';

export default function Subscriptions({ client }: { client: MqttClient }) {
  const [subscriptions, setSubscriptions] = useState<string[]>([]);
  const addSubscription = useCallback((topic: string) => {
    setSubscriptions((prev) => [...prev, topic]);
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold flex-1 mt-8">Subscriptions</h2>
      <SubscribeForm onSubscribe={addSubscription} client={client} />
      <div>
        {subscriptions.map((topic) => (
          <div className="border-b last:border-b-0 py-2" key={topic}>
            ✅ {topic}
          </div>
        ))}
      </div>
    </>
  );
}
