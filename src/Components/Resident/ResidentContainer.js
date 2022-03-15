import React, { useEffect, useState } from "react";
import axios from "axios";
import ResidentItem from "./ResidentItem.js";
import Pagination from "./Pagination.js";

const ResidentContainer = ({ url }) => {
  const [residents, setResidents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const residentsPerPage = 5;

  useEffect(() => {
    const promise = axios(url);
    promise.then((res) => {
      setResidents(res.data.residents);
      setCurrentPage(1);
    });
  }, [url]);


  const indexOfLastResident = currentPage * residentsPerPage;
  const indexOfFirstResident = indexOfLastResident - residentsPerPage;
  const currentResidentsShowed = residents.slice(
    indexOfFirstResident,
    indexOfLastResident
  );


  const paginate = (numberOfPage) => setCurrentPage(numberOfPage);

  return (
    <>
      <h3>Residents</h3>
      <div className="Suburb">
        {currentResidentsShowed.map((url) => (
          <ResidentItem key={url.substring(126)} url={url} />
        ))}
      </div>
      <Pagination
        residentsPerPage={residentsPerPage}
        totalResidents={residents.length}
        paginate={paginate}
        selected={currentPage}
      />
    </>
  );
};

export default ResidentContainer;