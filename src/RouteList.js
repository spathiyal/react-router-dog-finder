import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import FilterDogInfo from "./FilterDogInfo";

function RouteList({ dogs }) {
  console.log("test RouteList...", dogs);
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<FilterDogInfo dogs={dogs} />} />
      <Route path="/*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}
export default RouteList;
