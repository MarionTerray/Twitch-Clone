import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChatLive from './components/ChatLive';
import LiveStream from './components/LiveStream';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<><Header /><main><Nav /> <LiveStream /> <ChatLive /></main>  </>} />

        </Routes> 
      </div>
    </Router>
    
  );
}

export default App;
