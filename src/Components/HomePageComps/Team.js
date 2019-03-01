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
        <img src={medi} alt="Medi Assumani" />
        <h3>Medi Assumani</h3>
      </div>

      <div className="Asim">
        <img src={Asim} alt="Asim Zaidi" />
        <h3>Asim Zaidi</h3>
      </div>

      <div className="Thomas">
        <img src={Thomas} alt="Thomas Lee" />
        <h3>Thomas Lee</h3>
      </div>

      <div className="Will">
        <img src={Will} alt="William Bogans" />
        <h3>William Bogans</h3>
      </div>

    </section>
  </div>
)


export default Team;
