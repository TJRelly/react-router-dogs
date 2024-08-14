import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import data from "./db.json";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav dogs={data.dogs.map((dog) => dog.name)} />
                <Routes>
                    <Route path="/dogs" element={<DogList dogs={data.dogs} />} />
                    <Route
                        path="/dogs/:name"
                        element={<DogDetails dogs={data.dogs} />}
                    />
                    <Route path="*" element={<Navigate to="/dogs" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

