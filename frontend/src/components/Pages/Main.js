import React, { useEffect } from 'react'
import Aos from "aos";
import DashboardMain from '../Dashboard/DashboardMain';
function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-up" className="">
      <div className="w-11/12 mx-auto">
        <DashboardMain />
      </div>
    </section>
  );
}

export default Main;
