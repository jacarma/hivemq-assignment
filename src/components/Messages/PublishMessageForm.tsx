import { useCallback, useState } from 'react';
import Button from '../Button';
import TextInput from '../TextInput';
import { MqttClient } from 'mqtt/dist/mqtt';
import { toast } from 'react-toastify';

export default function PublishMessageForm({ client }: { client: MqttClient }) {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const handlePublish = useCallback(() => {
    client.publish(topic, message, {}, (err) => {
      if (err) {
        toast.error(err.message);
      }
    });
  }, [client, topic, message]);

  return (
    <form className="mt-2 grid grid-cols-2 gap-2">
      <TextInput
        label="Topic"
        id="topic"
        autoComplete="topic"
        className="col-span-2"
        value={topic}
        onChange={setTopic}
      />
      <TextInput
        type="textarea"
        label="Message"
        id="message"
        autoComplete="message"
        className="col-span-2"
        value={message}
        onChange={setMessage}
      />

      <Button label="Publish Message" onClick={handlePublish} />
    </form>
  );
}
