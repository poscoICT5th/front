import React, { useEffect } from 'react'
import Aos from "aos";
import MainContent from "../Common/MainContent";
function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-up" className="">
      <div className="flex ">
        <div className="flex-auto"><MainContent /></div>
      </div>
    </section>
  );
}

export default Main;
