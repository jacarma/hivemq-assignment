import { MqttClient } from 'mqtt/dist/mqtt';
import PublishMessageForm from './PublishMessageForm';
import { Message } from '../../Home';

export default function Messages({ client, messages }: { client: MqttClient; messages: Message[] }) {
  return (
    <div className="ml-16 w-96">
      <h2 className="text-2xl font-semibold flex-1">Messages</h2>
      <PublishMessageForm client={client} />
      <div className="mt-4">
        <table className="table-auto w-full">
          <thead className="border-b">
            <tr className="bg-gray-100">
              <th className="text-left p-4 font-medium">Message</th>
              <th className="text-left p-4 font-medium">Topic</th>
              <th className="text-left p-4 font-medium">QoS</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(({ topic, message, qos }, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-4">{message}</td>
                <td className="p-4">{topic}</td>
                <td className="p-4">{qos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
