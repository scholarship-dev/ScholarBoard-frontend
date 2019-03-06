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
        description="Back-End Engineer"
        alt="Medi Assumani"
      />

      <TeamMember
        name="Thomas Lee"
        img={Thomas}
        alt="Thomas Lee"
        description="Front-End Engineer"
      />

      <TeamMember
        name="Asim Zaidi"
        img={Asim}
        description="Front-End Engineer"
        alt="Asim Zaidi"
      />

      <TeamMember
        name="William Bogans"
        img={Will}
        alt="William Bogans"
        description="Front-End Engineer"
      />

    </section>
  </div>
);


export default Team;
