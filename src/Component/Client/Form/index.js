import React, { useState, useEffect } from "react";
import DoneIcon from "@material-ui/icons/Done";
import { useAuth } from "../../../Context/AuthContext";

// Asset
import "./style.css";
import { Spinner } from "react-bootstrap";

// Component
import Information from "./parts/Information";
import TypeofOrder from "./parts/TypeofOrder";
import InformasiPerusahaan from "./parts/InformasiPerusahaan";
import Authorized from "./parts/Authorized";
import AuthorizedFinance from "./parts/AuthorizedFinance";
import BillingAddress from "./parts/BillingAddress";
import AuthorizedTechnical from "./parts/AuthorizedTechnical";
import ServiceOrder from "./parts/ServicesOrder";
import InstallationAddres from "./parts/InstallationAddress";
import Signs from "./parts/Signs";

function Form(props) {
  const { currentUser } = useAuth();

  const [information, setInformation] = useState({});
  const [typeofOrder, setTypeofOrder] = useState({});
  const [infoPerusahaan, setInfoPerusahaan] = useState({});
  const [authorized, setAuthorized] = useState({});
  const [authorizedFinance, setAuthorizedFinance] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [authorizedTechnical, setAuthorizedTechnical] = useState({});
  const [serviceOrder, setServiceOrder] = useState({});
  const [installationAddress, setInstallationAddress] = useState({});
  const [client, setClient] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Callback Function
  const getInformation = (data) => {
    setInformation(data);
  };

  const getTypeofOrder = (data) => {
    // console.log(data)
    setTypeofOrder(data);
  };

  const getInfoPerushaan = (data) => {
    // console.log(data);
    setInfoPerusahaan(data);
  };

  const getAuthorized = (data) => {
    // console.log(data);
    setAuthorized(data);
  };

  const getAuthorizedFinance = (data) => {
    // console.log(data)
    setAuthorizedFinance(data);
  };

  const getBillingAddress = (data) => {
    setBillingAddress(data);
  };

  const getAuthorizedTechnical = (data) => {
    setAuthorizedTechnical(data);
  };

  const getServiceOrder = (data) => {
    setServiceOrder(data);
  };

  const getInstallationAddress = (data) => {
    setInstallationAddress(data);
  };

  const getPtClient = (data) => {
    setClient(data);
  };
  // End Callback Function

  const prosesHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      information,
      typeofOrder,
      infoPerusahaan,
      authorized,
      authorizedFinance,
      billingAddress,
      authorizedTechnical,
      serviceOrder,
      installationAddress,
      client,
      uid: currentUser.uid,
    };

    props.postData(data);
  };

  return (
    <div className="mt-5">
      <div className="container">
        <div className="w-100 form-main" style={{ maxWidth: "700px" }}>
          <form onSubmit={prosesHandler} className="form-client">
            {/* Informasi */}
            <Information getInformation={getInformation} />

            {/* Jenis Permintaan */}
            <TypeofOrder getTypeofOrder={getTypeofOrder} />

            {/* Informasi Perusahaan Pelanggan */}
            <InformasiPerusahaan getInfoPerushaan={getInfoPerushaan} />

            {/* Penanggung Jawab Perusahaan */}
            <Authorized getAuthorized={getAuthorized} />

            {/* Penanggung Jawab Keuangan */}
            <AuthorizedFinance getAuthorizedFinance={getAuthorizedFinance} />

            {/* Alamat Penagihan */}
            <BillingAddress getBillingAddress={getBillingAddress} />

            {/* Penanggung Jawab Teknis */}
            <AuthorizedTechnical
              getAuthorizedTechnical={getAuthorizedTechnical}
            />

            {/* Layanan yang diminta */}
            <ServiceOrder getServiceOrder={getServiceOrder} />

            {/* Alamat Instalasi */}
            <InstallationAddres
              getInstallationAddress={getInstallationAddress}
            />

            {/* Tanda Tangan */}
            <Signs getPtClient={getPtClient} />

            {isLoading ? (
              <button type="submit" className="btn-proses">
                <Spinner animation="border" />
              </button>
            ) : (
              <button type="submit" className="btn-proses">
                <DoneIcon />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
