import React, { useState, useEffect } from "react";
import DoneIcon from "@material-ui/icons/Done";
import { database } from "../../../firebase";
import { useAuth } from "../../../Context/AuthContext";

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

function FormEdit({ id, updateData }) {
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
    };

    updateData(data);
  };

  return (
    <div className="mt-5">
      <div className="container">
        <div className="w-100 form-main" style={{ maxWidth: "700px" }}>
          <form onSubmit={prosesHandler} className="form-client">
            {/* Informasi */}
            <Information id={id} getInformation={getInformation} />

            {/* Jenis Permintaan */}
            <TypeofOrder getTypeofOrder={getTypeofOrder} />

            {/* Informasi Perusahaan Pelanggan */}
            <InformasiPerusahaan id={id} getInfoPerushaan={getInfoPerushaan} />

            {/* Penanggung Jawab Perusahaan */}
            <Authorized id={id} getAuthorized={getAuthorized} />

            {/* Penanggung Jawab Keuangan */}
            <AuthorizedFinance
              id={id}
              getAuthorizedFinance={getAuthorizedFinance}
            />

            {/* Alamat Penagihan */}
            <BillingAddress id={id} getBillingAddress={getBillingAddress} />

            {/* Penanggung Jawab Teknis */}
            <AuthorizedTechnical
              id={id}
              getAuthorizedTechnical={getAuthorizedTechnical}
            />

            {/* Layanan yang diminta */}
            <ServiceOrder id={id} getServiceOrder={getServiceOrder} />

            {/* Alamat Instalasi */}
            <InstallationAddres
              id={id}
              getInstallationAddress={getInstallationAddress}
            />

            {/* Tanda Tangan */}
            <Signs id={id} getPtClient={getPtClient} />

            <button type="submit" className="btn-proses">
              <DoneIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormEdit;
