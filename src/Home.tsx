import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConnectionForm from './components/ConnectionForm/ConnectionForm';
import Subscriptions from './components/Subscriptions/Subscriptions';
import { useState } from 'react';
import { MqttClient } from 'mqtt/dist/mqtt';
import Messages from './components/Messages/Messages';
export type Message = {
  topic: string;
  message: string;
  qos: number;
};

export default function Home() {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <>
      <div className="flex">
        <div>
          <ConnectionForm
            onConnect={(client) => {
              setClient(client);
              client.on('message', (topic, message, { qos }) => {
                setMessages((prev) => [...prev, { topic, message: message.toString(), qos }]);
              });
            }}
          />
          {client && <Subscriptions client={client} />}
        </div>
        {client && <Messages client={client} messages={messages} />}
      </div>
      <ToastContainer />
    </>
  );
}
