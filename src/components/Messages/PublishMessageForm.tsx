import { useCallback, useState } from 'react';
import Button from '../Button';
import TextInput from '../TextInput';
import { MqttClient, QoS } from 'mqtt/dist/mqtt';
import { toast } from 'react-toastify';
import Select from '../Select';

const QoSOptions = [
  { value: 0, label: '0 - at most once' },
  { value: 1, label: '1 - at least once' },
  { value: 2, label: '2 - exactly once' },
];

export default function PublishMessageForm({ client }: { client: MqttClient }) {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [qos, setQoS] = useState<QoS>(0);

  const handlePublish = useCallback(() => {
    client.publish(topic, message, { qos }, (err) => {
      if (err) {
        toast.error(err.message);
      } else {
        setMessage('');
      }
    });
  }, [client, topic, message]);

  return (
    <form className="mt-2 grid grid-cols-2 gap-2">
      <TextInput label="Topic" id="message-topic" autoComplete="topic" value={topic} onChange={setTopic} />
      <Select<QoS> label="QoS" id="qos" options={QoSOptions} value={qos} onChange={setQoS} />
      <TextInput
        type="textarea"
        label="Message"
        id="message"
        autoComplete="message"
        className="col-span-2"
        value={message}
        onChange={setMessage}
      />
      <Button label="Publish Message" onClick={handlePublish} disabled={!topic || !message} />
    </form>
  );
}
