import { ToastContainer } from 'react-toastify';
import { PageRoutes } from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
     <PageRoutes/>
     <ToastContainer  position="top-right" autoClose={3000} />
    </>
  )
}

export default App
