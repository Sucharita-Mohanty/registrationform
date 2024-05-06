import React from "react";
import "./Registrationform.css";
import Button from "./Button";
import { useState } from "react";
import { HiArchiveBox } from "react-icons/hi2";

function Registrationform() {
  let [counter, setCounter] = useState(0)
  
  const addValue = () =>{
    
    setCounter(counter + 1)
    
    console.log(counter ,Math.random())

  }

  const removeValue = () =>{
    setCounter(counter-1)
    
    console.log(counter, Math.random())
  }
  return (
    <>
      <div className="main">
        <div className="registration-part1">
          <h1 className="register">Registration</h1>
          <div className="form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="contener1">
                <label htmlFor="text">Enter text</label>
                <input type="test" id="text" className="input-box" />

                <label htmlFor="number2">Enter number</label>
                <input
                  type="number"
                  name=""
                  id="number2"
                  className="input-box"
                />

                <label htmlFor="number">Enter Number</label>
                <input
                  type="number"
                  name=""
                  id="number"
                  className="input-box"
                />
              </div>
              <div className="contener2">
                <label htmlFor="text2">Enter text</label>
                <input type="test" id="text2" className="input-box" />

                <label htmlFor="email">Enter email</label>
                <input type="email" name="" id="email" className="input-box" />
              </div>
            </form>
          </div>
        </div>
        <div className="registration-part2">
          <h1 className="details">Additional Details</h1>

          <div className="box-contener">
            <select className="catagory" name="catagory" id="catagory">
              <option value="Aqua">Select Your Catagory</option>
              <option value="Aqua">Aqua</option>
              <option value="saab">Water Body</option>
              <option value="mercedes">3D Printing</option>
            </select>
            <input type="test" id="text" className="input-box input-text" />
          </div>
          <div className="deviceBtn-section">
            <div className="device">
              <label className="device-label" htmlFor="DeviceType">
                DeviceType
              </label>
              <select className="catagory" name="DeviceType" id="DeviceType">
                <option value="Aqua">Select Your Catagory</option>
                <option value="Aqua">Aqua</option>
                <option value="saab">Water Body</option>
                <option value="mercedes">3D Printing</option>
              </select>
            </div>

            <div className="counter-section">
              <div className="para">
                <p>Device Quantity</p>
              </div>
              <div className="btns">
                <Button ></Button>
             
              </div>
             
            </div>
            <div className="icon">
              <p>Action</p>
              <HiArchiveBox />
              </div>
            
          </div>
          <div className="add-btn">
            
              <button className="btn-green">Add+</button>
            </div>
          <div className="btn">
            <button className="button" type="submit">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrationform;
