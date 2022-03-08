import React from "react";
import './Modal.css'
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Customize</h5>
          </div>
          <div className="modalContent">

            <label htmlFor="colors">Choose a color:</label>
            <input type="color" id="colors" defaultValue="#009999" className="colorPicker"></input>
            <br/>

            <label htmlFor="bgcolor">Choose a background:</label>
            <input type="color" id="bgcolors" defaultValue="#009999" className="colorPicker"></input>
            <br/>

            <label htmlFor="fontSize">Select Font size:</label>
            <select name="colors" id="fontSize">
              <option value="16px">16px</option>
              <option value="20px">20px</option>
              <option value="24px">24px</option>
              <option value="30px">30px</option>
            </select>
            <br/>

            <label htmlFor="fontFamily">Select Font Family:</label>
            <select name="colors" id="fonts">
            <option value="Arial">Arial</option>
              <option value="Poppins">Poppins</option>
              <option value="Roboto">Roboto</option>
              <option value="Courier">TypeWriter</option>
              <option value="Brush Script MT">Cursive</option>
              <option value="Chalkduster">Fantasy</option>
            </select>
          </div>
          
          {/* <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Customize
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;