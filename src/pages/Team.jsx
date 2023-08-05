import React from 'react'
import TeamLanding from "../components/TeamLanding"

export default function Team(){
  return (
    <div id='Team'>
        <TeamLanding/>
        <div className="teamMembers">
            <h1 className='subHeading'>OUR TEAM</h1>
            <div className="teamGrid">
                <div className="grid fst">
                    <img src="../assets/Team/Members/member1.png" alt="Shashank Sawai" />
                    <img src="../assets/Team/Members/member2.png" alt="Robin Singh" />
                    <img src="../assets/Team/Members/member3.png" alt="B K Panigrahi" />
                </div>
                <div className="grid scnd">
                    <img src="../assets/Team/Members/member4.png" alt="Ajeet Prabhakar" />
                    <img src="../assets/Team/Members/member5.png" alt="Dr. Anadi" />
                    <img src="../assets/Team/Members/member6.png" alt="Eric Azulay" />
                </div>
                <div className="grid thd">
                    <img src="../assets/Team/Members/member7.png" alt="Sayan Mandal" />
                    <img src="../assets/Team/Members/member8.png" alt="Kiran Pandav" />
                </div>
            </div>
        </div>
    </div>
  )
}
