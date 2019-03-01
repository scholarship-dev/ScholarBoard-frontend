import React from 'react'
import medi from '../../images/team-images/Medi.jpg';
import Asim from '../../images/team-images/Asim.jpg';
import Thomas from '../../images/team-images/Thomas.jpg';
import Will from '../../images/team-images/Will.jpg';

const Team = () => (
  <div className="Team page-section">
    <h1>Team</h1>
    <section className="team-section">

      <div className="medi">
        <img src={medi} alt=" Medi Assumani" />
      </div>

      <div className="Asim">
        <img src={Asim} alt=" Medi Zaidi" />
      </div>

      <div className="Thomas">
        <img src={Thomas} alt="Thomas Lee" />
      </div>

      <div className="Will">
        <img src={Will} alt="William Bogans" />
      </div>

    </section>
  </div>
)


export default Team;
