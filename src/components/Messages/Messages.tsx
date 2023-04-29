import { MqttClient } from 'mqtt/dist/mqtt';
import PublishMessageForm from './PublishMessageForm';
import { Message } from '../../Home';
import MessageList from './MessageList';

export default function Messages({ client, messages }: { client: MqttClient; messages: Message[] }) {
  return (
    <div className="ml-16 w-96">
      <h2 className="text-2xl font-semibold flex-1">Messages</h2>
      <PublishMessageForm client={client} />
      <div className="mt-4">
        <MessageList messages={messages} />
      </div>
    </div>
  );
}
