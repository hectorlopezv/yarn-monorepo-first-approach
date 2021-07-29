import React from "react";
import "./test.scss";

export interface TestProps {
  label: string;
}

export const Test: React.FC<TestProps> = ({ label = "" }) => {
  
  return <div className="test">{`${label} hello`}</div>;
};
