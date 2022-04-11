import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { statusSort } from "../../actions/Data";

const Filter = () => {
  const dispatch = useDispatch();
  const [showCompany, setShowCompany] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [inputs, setInputs] = useState({
    selectAll: false,
    dcUnited: false,
    manchesterUnited: false,
    laGalaxy: false,
  });
  const [status, setStatus] = useState({
    active: true,
    closed: true,
  });

  useEffect(() => {
    dispatch(statusSort(status.active, status.closed));
  }, [status]);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    if (value) setInputs({ ...inputs, selectAll: false, name: false });
    else {
      // by changing this value would select all
      let count = 0;
      for (let i in inputs) if (i == false) count++;

      if (count <= 2) {
        setInputs({
          selectAll: true,
          dcUnited: true,
          laGalaxy: true,
          manchesterUnited: true,
        });
      } else {
        setInputs({
          ...inputs,
          [name]: value,
        });
      }
    }
  };

  return (
    <div className="filters">
      {/* Companies filter */}
      <div className="multiselect">
        <div className="selectBox" onClick={() => setShowCompany(!showCompany)}>
          <select>
            <option>{`Company ($)`}</option>
          </select>
          <div className="overSelect"></div>
        </div>
        {showCompany && (
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                name="selectAll"
                defaultChecked={inputs.selectAll}
                onChange={() =>
                  inputs.selectAll
                    ? setInputs({
                        selectAll: false,
                        dcUnited: false,
                        laGalaxy: false,
                        manchesterUnited: false,
                      })
                    : setInputs({
                        selectAll: true,
                        dcUnited: true,
                        laGalaxy: true,
                        manchesterUnited: true,
                      })
                }
              />
              Select all
            </label>
            <label>
              <input
                type="checkbox"
                name="dcUnited"
                defaultChecked={inputs.dcUnited}
                onChange={handleSelect}
              />
              DC United
            </label>
            <label>
              <input
                type="checkbox"
                name="manchesterUnited"
                defaultChecked={inputs.manchesterUnited}
                onChange={handleSelect}
              />
              Manchester United
            </label>
            <label>
              <input
                type="checkbox"
                name="laGalaxy"
                defaultChecked={inputs.laGalaxy}
                onChange={handleSelect}
              />
              LA Galaxy
            </label>
          </div>
        )}
      </div>

      {/* Status filter */}
      <div className="multiselect">
        <div className="selectBox" onClick={() => setShowStatus(!showStatus)}>
          <select>
            <option>Status</option>
          </select>
          <div className="overSelect"></div>
        </div>
        {showStatus && (
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                name="active"
                checked={status.active}
                onChange={() =>
                  setStatus({
                    ...status,
                    active: !status.active,
                  })
                }
              />
              Active
            </label>
            <label>
              <input
                type="checkbox"
                name="closed"
                checked={status.closed}
                onChange={() =>
                  setStatus({
                    ...status,
                    closed: !status.closed,
                  })
                }
              />
              Closed
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
