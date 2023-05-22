import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import OverView from "./OverView";
import Test from "./Test";

type Props = {};

const MyPortfolioPage = (props: Props) => {
  return (
    <main className="min-h-screen bg-black">
      <>
        {/* <Header />
        <Banner />
        <OverView /> */}
        <Test />
      </>
    </main>
  );
};

export default MyPortfolioPage;
