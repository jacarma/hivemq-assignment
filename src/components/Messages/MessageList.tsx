import { Message } from '../../Home';

export default function MessageList({ messages }: { messages: Message[] }) {
  return (
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
          <tr key={i} className="border-b hover:bg-gray-50" data-testid="message-row">
            <td className="p-4">{message}</td>
            <td className="p-4">{topic}</td>
            <td className="p-4">{qos}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
