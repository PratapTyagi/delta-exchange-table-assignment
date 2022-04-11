import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { statusSort, companySort } from "../../actions/Data";

const Filter = ({ companyCount }) => {
  const dispatch = useDispatch();
  const [showCompany, setShowCompany] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [inputs, setInputs] = useState({
    selectAll: true,
    dcUnited: true,
    manchesterUnited: true,
    laGalaxy: true,
  });
  const [status, setStatus] = useState({
    active: true,
    closed: true,
  });

  useEffect(() => {
    dispatch(statusSort(status.active, status.closed));
  }, [status]);

  useEffect(() => {
    let filteredCompanies = [];
    let map = {
      selectAll: "Select All",
      dcUnited: "DC United",
      manchesterUnited: "Manchester United",
      laGalaxy: "LA Galaxy",
    };
    if (inputs.selectAll) for (let i in inputs) filteredCompanies.push(map[i]);
    else for (let i in inputs) if (inputs[i]) filteredCompanies.push(map[i]);
    dispatch(companySort(filteredCompanies));
  }, [inputs]);

  const handleSelect = (e) => {
    const { name, checked } = e.target;
    if (!checked) setInputs({ ...inputs, selectAll: false, [name]: false });
    else {
      // by changing this value would select all
      let count = 0;
      for (let i in inputs) if (inputs[i] == false) count++;
      if (count == 2) {
        setInputs({
          selectAll: true,
          dcUnited: true,
          laGalaxy: true,
          manchesterUnited: true,
        });
      } else {
        setInputs({
          ...inputs,
          [name]: checked,
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
            <option>{`Company (${companyCount})`}</option>
          </select>
          <div className="overSelect"></div>
        </div>
        {showCompany && (
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                name="selectAll"
                checked={inputs.selectAll}
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
                checked={inputs.dcUnited}
                onChange={handleSelect}
              />
              DC United
            </label>
            <label>
              <input
                type="checkbox"
                name="manchesterUnited"
                checked={inputs.manchesterUnited}
                onChange={handleSelect}
              />
              Manchester United
            </label>
            <label>
              <input
                type="checkbox"
                name="laGalaxy"
                checked={inputs.laGalaxy}
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
