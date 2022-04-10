import { useDispatch } from "react-redux";
import "./Table.css";
import { deleteData } from "../../actions/Data";

const Table = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <input type="checkbox" />
            <th>Name</th>
            <th>Company</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr key={d.id}>
                <input type="checkbox" />
                <td>{d.name}</td>
                <td>{d.company}</td>
                <td>{d.status}</td>
                <td>{d.lastUpdated}</td>
                <td>{d.notes}</td>
                <i
                  className="fa fa-solid fa-trash"
                  onClick={() => handleDelete(d.id)}
                ></i>
                <td className={d.id % 2 == 0 ? `dark` : ""}></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
