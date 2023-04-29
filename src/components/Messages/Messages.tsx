import { MqttClient } from 'mqtt/dist/mqtt';
import PublishMessageForm from './PublishMessageForm';
import { Message } from '../../Home';

export default function Messages({ client, messages }: { client: MqttClient; messages: Message[] }) {
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
