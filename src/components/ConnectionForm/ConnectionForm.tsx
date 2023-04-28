import { useState } from 'react';
import { toast } from 'react-toastify';
import { connect } from '../../mqtt/hivemq';
import Button from '../Button';
import TextInput from '../TextInput';

export default function ConnectionForm({ onConnect }: { onConnect: () => void }) {
  const [host, setHost] = useState(import.meta.env.VITE_HOSTNAME);
  const [userName, setUserName] = useState(import.meta.env.VITE_USERNAME);
  const [password, setPassword] = useState(import.meta.env.VITE_PASSWORD);
  const [connected, setConnected] = useState(false);

  const cnx = () => {
    const cnx = connect(host, userName, password);
    cnx.on('connect', (e) => {
      setConnected(true);
      onConnect(cnx);
    });
    cnx.on('error', (e) => toast.error(e.message));
  };

  return (
    <>
      <div className="flex">
        <h2 className="text-2xl font-semibold flex-1">Connection</h2>
        {connected && <span className="text-green-600 rounded-full text-bold py-1">Connected</span>}
      </div>
      <form className="mt-2 grid grid-cols-2 gap-2">
        <TextInput
          label="Host"
          id="host"
          autoComplete="host"
          className="col-span-2"
          value={host}
          onChange={setHost}
          disabled={connected}
        />
        <TextInput
          label="User Name"
          id="userName"
          autoComplete="user-name"
          value={userName}
          onChange={setUserName}
          disabled={connected}
        />
        <TextInput
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={setPassword}
          disabled={connected}
        />
        <div className="mt-4 col-span-2 text-right">
          <Button label="Connect" onClick={cnx} disabled={connected} />
        </div>
      </form>
    </>
  );
}
