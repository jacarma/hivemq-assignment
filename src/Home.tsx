import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConnectionForm from './components/ConnectionForm/ConnectionForm';

export default function Home() {
  return (
    <div className="">
      <ConnectionForm />
      <ToastContainer />
    </div>
  );
}
