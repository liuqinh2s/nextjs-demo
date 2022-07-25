import { NextPage } from "next";
import First from "../index";

const Second = () => {
  return <div>second </div>;
};

Second.Layout = First;

export default Second;
