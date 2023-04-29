import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConnectionForm from './components/ConnectionForm/ConnectionForm';
import Subscriptions from './components/Subscriptions/Subscriptions';
import { useState } from 'react';
import { MqttClient } from 'mqtt/dist/mqtt';

export default function Home() {
  const [client, setClient] = useState<MqttClient | null>(null);
  return (
    <>
      <div className="flex">
        <div>
          <ConnectionForm onConnect={setClient} />
          {client && <Subscriptions client={client} />}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
