import cbteams from "../CollegeBasketballTeams.json";
import './App.css'

const teams = cbteams['teams'];

function Welcome() {
  return (
    <>
      <h1>College Basketball Teams</h1>
      <h3>Scroll to look through teams, their mascots, and where they are from!</h3>
    </>
  );
}

function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <div style={{ border: "2px solid black", margin: "2px" }}>
        <h2>School Name: {school}</h2>
        <h3>Mascot: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
      </div>
    </>
  );
}

function TeamsList() {
  return (
    <>
      {teams.map((team) => (
        <Team {...team} />
      ))}
    </>
  );
}

function App() {

  return (
    <>
      <Welcome />
      <TeamsList />
    </>
  );
}

export default App
