import { useContext, createContext, useState } from "react";
import mockBerlin from "../dataFranz/mockBerlin.json";

// Franz' injection of data, can be deleted after proper fetch has been implemented

const TripContext = createContext();
const useTripContext = () => useContext(TripContext);

const TripProvider = ({ children }) => {
  const [tripData, setTripData] = useState(mockBerlin);

  return (
    <TripContext.Provider value={{ tripData, setTripData }}>
      {children}
    </TripContext.Provider>
  );
};

export { useTripContext, TripProvider };
