import './App.scss';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { LandingPage, NotFound } from './pages';
import { inject } from '@vercel/analytics';

function App() {
  inject();
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        {/* TODO add Not Found */}
      </Routes>
    </div>
  )
}

export default App;
