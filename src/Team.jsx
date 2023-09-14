import { useState } from "react";

export default function Team() {
    const [team,setTeam] = useState(11);

    const handleTeamAdd = ()=>{
        const newTeam = team+ 1;
        setTeam(newTeam);
    }
    const handleTeamRemove = ()=>{
        setTeam(team -1);

    }
    const teamStyle = {
        border: '2px solid violet',
        borderRadius: '10px',
        padding: '15px',
        margin: '15px',
    }
  return (
   
    <div style={teamStyle}>
      <h3>Players:{team}</h3>
      <button onClick={handleTeamAdd}>Add Players</button>
      <button onClick={handleTeamRemove}>Remove Players</button>
    </div>
  );
}
