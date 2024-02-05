import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Appbar from './components/Appbar';
import Book from './components/Book';
import aero from './components/aero.jpg';
import Home from './components/Home';
import Footer from './components/Footer'; // Import the Footer component
import ShowFlights from './components/ShowFlights';

function App({ store }) {
  function Page() {
    switch (store.getState().NavReducer) {
      case 'Login':
        return <div><Login store={store} /></div>;
      case 'Registration':
        return <div><Registration /></div>;
      case 'Book':
        return <div><Book /></div>;
      case 'ShowFlights':
        return <div><ShowFlights/></div>
      default:
        return <div><Home /></div>;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={aero} className="App-logo" alt="aero" />
        <center><p>AIRLINE RESERVATION SYSTEM</p></center>
      </header>
      <div className="App-body">
        <Appbar store={store} />
        <Page />
        <Footer /> {/* Add the Footer component here */}
      </div>
    </div>
  );
}

export default App;
