import { Footer, Header } from './components';
import { AllRoutes } from './routes/AllRoutes';

import './App.css';
import "./assets/css/print.css"
import "./assets/css/styles-l.css"
import "./assets/css/db1a46befb94c2815fc30166a44ea4b5.css"

function App() {
  return (
    <>
      <Header />
      
      <AllRoutes />

      <Footer />
    </>
  );
}

export default App;