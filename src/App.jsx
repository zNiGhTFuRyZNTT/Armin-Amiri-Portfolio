import './App.scss';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { LandingPage, NotFound } from './pages';
import { Analytics } from '@vercel/analytics/react';
inject();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        {/* TODO add Not Found */}
      </Routes>
      <Analytics />
    </div>
  )
}

export default App;
