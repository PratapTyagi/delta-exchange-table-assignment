import "./Modal.css";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modal">
      <h3>Add members</h3>
      <form>
        <h5>Name</h5>
        <input type="text" />
        <h5>Company</h5>
        <input type="text" />
        <h5>Status</h5>
        <input type="text" />
        <h5>Notes</h5>
        <input type="text" />
      </form>

      <div className="actions">
        <button className="cancel" onClick={() => setOpenModal(false)}>
          Cancel
        </button>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default Modal;
