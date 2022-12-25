import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* {modalIsOpen === true ? <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} /> : ""}
      {modalIsOpen === true ? <Backdrop onClick={closeModalHandler} /> : ""} */}

      {modalIsOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}

      {/*
      
      Here, Since the state of Modal is false initially, Modal is not shown but whene the
      user click on "Delete" button, The FUnction "closeModalHandler" triggers, which 
      ultimately set the Modal state to true and so it pops out.

      */}
    </div>
  );
}
export default Todo;
