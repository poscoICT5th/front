import React, { useEffect } from 'react'
import Aos from "aos";
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardCustom from '../Dashboard/DashboardCustom';
import DashboardTabs from '../Dashboard/DashboardTabs';
import moment from 'moment';
function Dashboard() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    var now = moment().format("YYYY-MM-DD");
    console.log(now)
  }, [])

  return (
    <section data-aos="fade-up" className="">
      <div className="w-full mx-auto">
        <div className='mb-10'>
          <DashboardHeader />
        </div>
      </div>
      <div>
        <DashboardCustom />
        <DashboardTabs />
      </div>
    </section>
  );
}

export default Dashboard;
