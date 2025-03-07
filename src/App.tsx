import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Notification } from './components/Notification';

function App() {

  return (
    <div className="min-w-80 flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow relative flex flex-col w-full h-max text-gray-700">
        <Outlet/>
        <Notification />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
