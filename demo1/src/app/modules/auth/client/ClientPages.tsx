import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ClientHome } from './ClientHome';
import { About } from './About';

const ClientPages = () => (
    <Routes>
        
        <Route path='/client/about-02' element={<About />} />
     
    </Routes>
  )
  
  export {ClientPages}