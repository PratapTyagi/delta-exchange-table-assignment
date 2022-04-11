import "./Home.css";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Header, Filter, Table, Modal } from "../../components";

const Home = () => {
  const data = useSelector((state) => state.data);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="home">
      {/* Headers and corresponding buttons */}
      <Header openModal={openModal} setOpenModal={setOpenModal} />
      <hr />
      {openModal ? <div className="modalDiv"></div> : ""}
      <div className="modalContainer">
        {openModal ? <Modal setOpenModal={setOpenModal} /> : ""}
      </div>

      {/* Filter buttons */}
      <Filter />

      {/* Data representation */}
      <Table data={data} />
    </div>
  );
};

export default Home;
