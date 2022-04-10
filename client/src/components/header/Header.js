const Header = ({ openModal, setOpenModal }) => {
  return (
    <div className="header">
      <h2>Team Members</h2>
      <button onClick={() => !setOpenModal(!openModal)}>
        Add Members <i className="fa fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default Header;
