import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Nav/NavBar';

import Home from './Pages/Home';
import RSVP from './Pages/RSVP';
import Events from './Pages/Events';
import WeddingDetails from './Pages/WeddingDetails';
import Registry from './Pages/Registry';
import FAQs from './Pages/FAQs';
import './App.css';

import { useState } from 'react';

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
        return <Home />
    }
  };

return (
  <div>
    <Header />
    {/* Pass the state value and the setter as props to NavBar */}
    <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
    {/* Call the renderPage function passing in the currentPage */}
    <div>{renderPage(currentPage)}</div>
    <main>

    </main>
    <Footer />
  </div>
)
};

export default App;
