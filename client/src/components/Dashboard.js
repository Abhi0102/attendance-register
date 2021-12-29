import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { headerWithAuth } from "../helpers/constants";
import { connect } from "react-redux";
import { punchIn, punchOut } from "../actions/attendance";
import { APIUrls } from "../helpers/url";

function Dashboard(props) {
  const url = APIUrls.fetchPunchDetails(props.auth.user._id);
  // const [attData, setAttData] = useState("");
  const [displayData, setDisplayData] = useState("");
  const [checker, setChecker] = useState(false);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: headerWithAuth,
    })
      .then((response) => response.json())
      .then((data) => {
        // setAttData(data.data.resp);
        setDisplayData(data.data.resp);
      });
  }, [checker, displayData]);

  function handlePunch(e) {
    setChecker(!checker);
    if (e.target.value === "in") {
      console.log("In detected");
      props.dispatch(punchIn(props.auth.user._id, new Date()));
    } else {
      console.log("Out Detected");
      props.dispatch(punchOut(props.auth.user._id, new Date()));
    }
  }

  return (
    <div className="container margin-5-pct">
      <div className="row">
        <div className="col-md-2 col-sm-2 col-xs-2">
          <button
            className="btn btn-primary"
            value="in"
            onClick={(e) => handlePunch(e)}
          >
            Punch In
          </button>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-2">
          <button
            className="btn btn-primary"
            value="out"
            onClick={(e) => handlePunch(e)}
          >
            Punch Out
          </button>
        </div>
      </div>

      {displayData && (
        <>
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">In Date</th>
                    <th scope="col">Out Date</th>
                    <th scope="col">Difference (in Mins)</th>
                  </tr>
                </thead>

                <tbody>
                  {displayData.map((d) => (
                    <tr
                      className={
                        Math.round(
                          (new Date(d.outDate) - new Date(d.inDate)) /
                            (1000 * 60)
                        ) < 10
                          ? "table-danger"
                          : "table-success"
                      }
                      key={displayData.indexOf(d)}
                    >
                      <td>{d.user.name}</td>
                      <td>
                        {new Date(d.inDate).toLocaleDateString()}{" "}
                        {new Date(d.inDate).toLocaleTimeString()}
                      </td>
                      <td>
                        {" "}
                        {new Date(d.outDate).toLocaleDateString()}{" "}
                        {new Date(d.outDate).toLocaleTimeString()}
                      </td>
                      <td>
                        {Math.round(
                          (new Date(d.outDate) - new Date(d.inDate)) /
                            (1000 * 60)
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Dashboard);
