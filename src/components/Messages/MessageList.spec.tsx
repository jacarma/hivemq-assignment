import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MessageList from './MessageList';

const messages = [
  {
    topic: 'test/topic/1',
    message: 'Test Message 1',
    qos: 0,
  },
  {
    topic: 'test/topic/2',
    message: 'Test Message 2',
    qos: 1,
  },
];

describe('MessageList', () => {
  it('renders the correct number of messages', () => {
    render(<MessageList messages={messages} />);
    const messageRows = screen.queryAllByTestId('message-row');
    expect(messageRows.length).toEqual(messages.length);
  });

  it('renders the correct message data', () => {
    render(<MessageList messages={messages} />);
    const messageRows = screen.queryAllByTestId('message-row');
    messages.forEach((message, idx) => {
      expect(messageRows[idx]).toHaveTextContent(message.message);
      expect(messageRows[idx]).toHaveTextContent(message.topic);
      expect(messageRows[idx]).toHaveTextContent(`${message.qos}`);
    });
  });
});
