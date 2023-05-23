import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="bg-black min-h-screen">
      <div className="loadingPage">
        <div className="shape1" />
        <div className="shape2" />
        <div className="shape3" />
        <div className="shape4" />
      </div>
    </div>
  );
};

export default loading;
