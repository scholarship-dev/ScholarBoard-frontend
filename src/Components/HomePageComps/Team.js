import React from 'react'
import medi from '../../images/team-images/Medi.jpg';
import Asim from '../../images/team-images/Asim.jpg';
import Thomas from '../../images/team-images/Thomas.jpg';
import Will from '../../images/team-images/Will.jpg';
import TeamMember from './TeamMember';

const Team = () => (
  <div className="Team page-section">
    <h2>Team</h2>

    <section className="team-section">
      <TeamMember
        name="Medi Assumani"
        img={medi}
        description="blahhhhh"
        alt="Medi Assumani"
      />

      <TeamMember
        name="Asim Zaidi"
        img={Asim}
        description="blahhhh"
        alt="Asim Zaidi"
      />

      <TeamMember
        name="Thomas Lee"
        img={Thomas}
        alt="Thomas Lee"
        description="Blahhhh"
      />

      <TeamMember
        name="William Bogans"
        img={Will}
        alt="William Bogans"
        description="blahhhh"
      />

    </section>
  </div>
);


export default Team;
