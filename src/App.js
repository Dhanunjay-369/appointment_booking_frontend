import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'; 
import Home from './components/Home.js';
import Guide from './components/Guide.js';
import Bookings from './components/Bookings.js';
import BookNow from './components/BookNow/BookNow.js';
import Contact from './components/Contact.js';

import LoginValidation from './components/LoginValidation.js';

import GeneralPhysician from './components/BookNow/Doctors/general_physician.js';
import Pediatrician from './components/BookNow/Doctors/pediatrician.js';
import Dentist from './components/BookNow/Doctors/dentist.js';
import Cardiologist from './components/BookNow/Doctors/cardiologist.js';
import Dermatologist from './components/BookNow/Doctors/dermatologist.js';
import Gynaecologist from './components/BookNow/Doctors/gynaecologist.js';
import GeneralSurgeon from './components/BookNow/Doctors/general_surgeon.js';
import Radiologist from './components/BookNow/Doctors/radiologits.js';
import Gastroentologist from './components/BookNow/Doctors/gastroentologist.js';

import SlotBooking from './components/BookNow/SlotBooking.js';

import Login from './components/Login.js';
import Details from './Register/Details.js';
import SignUp from './Register/SignUp.js';

// import Login from './components/Login.js';




// import slotBooking from './components/BookNow/slotBooking.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/newpage" element={<SlotBooking/>}/>

          <Route path="/header" element={<Header/>}/>;
          <Route path="/" element={<Home/>}/>;
          <Route path="/home" element={<Home/>}/>;
          <Route path="/guide" element={<Guide/>}/>;
          <Route path="/bookings" element={<Bookings/>}/>;
          <Route path="/booknow" element={<BookNow/>}/>;
          <Route path="/contact" element={<Contact/>}/>;

          <Route path="/login-validation" element={<LoginValidation/>}/>;

          <Route path="/booknow/generalphysician" element={<GeneralPhysician/>}/>;
          <Route path="/booknow/pediatrics" element={<Pediatrician/>}/>;
          <Route path="/booknow/dental" element={<Dentist/>}/>;
          <Route path="/booknow/cardiology" element={<Cardiologist/>}/>;
          <Route path="/booknow/dermatology" element={<Dermatologist/>}/>;
          <Route path="/booknow/gynaecology" element={<Gynaecologist/>}/>;
          <Route path="/booknow/generalsurgery" element={<GeneralSurgeon/>}/>;
          <Route path="/booknow/labreportanalysis" element={<Radiologist/>}/>;
          <Route path="/booknow/gastroentology" element={<Gastroentologist/>}/>;

          <Route path="/login" element={<Login/>}/>;
          <Route path="/filldetails" element={<Details/>}/>;
          <Route path="/signup" element={<SignUp/>}/>;

          {/* <Route path="/booknowpage/gastroentology/slotBooking" element={<slotBooking/>}/>; */}
          
          {/* <Route path="/loginpage" element={<Login/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
