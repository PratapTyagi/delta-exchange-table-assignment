import { useState } from "react";
import { useDispatch } from "react-redux";
import { createData } from "../../actions/Data";
import "./Modal.css";

const Modal = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    name: "",
    company: "",
    status: "",
    notes: "",
  });

  const addData = () => {
    dispatch(
      createData({ ...info, lastUpdated: new Date().toLocaleDateString() })
    );
    setOpenModal(false);
    alert("Successfully added info");
  };

  return (
    <div className="modal">
      <h3>Add members</h3>
      <form>
        <h5>Name</h5>
        <input
          type="text"
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
        <h5>Company</h5>
        <input
          type="text"
          value={info.company}
          onChange={(e) => setInfo({ ...info, company: e.target.value })}
        />
        <h5>Status</h5>
        <input
          type="text"
          value={info.status}
          onChange={(e) => setInfo({ ...info, status: e.target.value })}
        />
        <h5>Notes</h5>
        <input
          type="text"
          value={info.notes}
          onChange={(e) => setInfo({ ...info, notes: e.target.value })}
        />
      </form>

      <div className="actions">
        <button className="cancel" onClick={() => setOpenModal(false)}>
          Cancel
        </button>
        <button className="save" onClick={addData}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
