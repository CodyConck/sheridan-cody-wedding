import './App.css';

import { useState } from 'react';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NavBar from './Components/Nav/NavBar';
import Events from './Pages/Events';
import FAQs from './Pages/FAQs';
import Home from './Pages/Home';
import Registry from './Pages/Registry';
import RSVP from './Pages/RSVP';
import WeddingDetails from './Pages/WeddingDetails';

function App() {
  const [currentPage, handlePageChange] = useState('Home');
  const renderPage = () => {
    switch (currentPage) {
      case 'RSVP':
        return <RSVP />;
      case 'Events':
        return <Events />;
      case 'Wedding Details':
        return <WeddingDetails />;
      case 'Registry':
        return <Registry />;
      case 'FAQs':
        return <FAQs />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header />
      {/* Pass the state value and the setter as props to NavBar */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
