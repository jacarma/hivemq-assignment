import { connect as mqttConnect } from 'mqtt/dist/mqtt';

export function connect(hostname: string, username: string, password: string) {
  return mqttConnect(hostname, {
    clientId: Math.random().toString(16).substr(2, 8),
    protocol: 'wss',
    hostname,
    protocolVersion: 4,
    port: 8884,
    path: '/mqtt',
    clean: true,
    resubscribe: false,
    keepalive: 60,
    reconnectPeriod: 0,
    username,
    password,
  });
}
