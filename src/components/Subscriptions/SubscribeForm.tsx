import { useState } from 'react';
import Button from '../Button';
import TextInput from '../TextInput';
import { MqttClient } from 'mqtt/dist/mqtt';
import { toast } from 'react-toastify';

export default function SubscribeForm({
  client,
  onSubscribe,
}: {
  client: MqttClient;
  onSubscribe: (topic: string) => void;
}) {
  const [topic, setTopic] = useState('');
  const handleSubscribe = () => {
    client.subscribe(topic, (err) => {
      if (err) {
        toast.error(err.message);
      } else {
        onSubscribe(topic);
      }
    });
  };

  return (
    <div>
      <TextInput
        label="Topic"
        id="topic"
        autoComplete="topic"
        className="col-span-2"
        value={topic}
        onChange={setTopic}
      />
      <Button label="Subscribe" onClick={handleSubscribe} />
    </div>
  );
}
