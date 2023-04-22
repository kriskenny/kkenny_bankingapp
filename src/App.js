import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/home';
import NavBar from './Components/navbar';
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import AllData from './Components/alldata';

export default function App() {

  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/createAccount"
              element={
                <>
                <CreateAccount
                />
                </>
              }
            />
            <Route
              path="/deposit"
              element={<Deposit />}
            />
            <Route
              path="/withdraw"
              element={<Withdraw />}
            />
            <Route
              path="/allData"
              element={<AllData />}
            />
          </Routes>
        </div>
      </Router>
      </>
  )};