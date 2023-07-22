import "./index.css";

function App() {
  return (
    <div className="dev-card">
      <div className="dev-avatar">
        <Avatar />
      </div>
      <div className="dev-profile">
        <Profile />
      </div>
      <Skills />
    </div>
  );
}

function Avatar() {
  return <img src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png" />;
}

function Profile() {
  return (
    <div>
      <h1>Migui Phillip Galan</h1>
      <h4>(A profile sample description)</h4>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portugese sun at the beach.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="dev-skill">
      <SkillSet name="HTML + CSS" />
      <SkillSet name="JavaScript" />
      <SkillSet name="ReactJS" />
      <SkillSet name="Python" />
      <SkillSet name="Django" />
      <SkillSet name="Odoo" />
    </div>
  );
}

function SkillSet(props) {
  return <div>{props.name}</div>;
}

export default App;
