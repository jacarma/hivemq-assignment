import { MqttClient } from 'mqtt/dist/mqtt';
import { useEffect, useState } from 'react';
import PublishMessageForm from './PublishMessageForm';

export type Message = {
  topic: string;
  message: string;
  qos: number;
};

export default function Messages({ client }: { client: MqttClient }) {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    client.on('message', (topic, message, packet) => {
      setMessages((prev) => [...prev, { topic, message: message.toString(), qos: 0 }]);
    });
  }, [client]);

  return (
    <div className="ml-8 w-96">
      <h2 className="text-2xl font-semibold flex-1">Messages</h2>
      <PublishMessageForm client={client} />
      <div>
        {messages.map(({ topic, message }, i) => (
          <div className="border-b last:border-b-0 py-2" key={i}>
            {topic} {message}
          </div>
        ))}
      </div>
    </div>
  );
}
