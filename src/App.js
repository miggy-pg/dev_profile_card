import "./index.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "ReactJS",
    level: "beginner",
    color: "#3C3DCAF",
  },
  {
    skill: "Python",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "Django",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Odoo",
    level: "advanced",
    color: "#FF3B00",
  },
];

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
      {skills.map((skill) => (
        <SkillSet skill={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function SkillSet({ skill }) {
  return (
    <div style={{ background: `${skill.color}` }}>
      {skill.level === "advanced" ? (
        <p>{skill.skill} 💪</p>
      ) : (
        <p>{skill.skill} 👶</p>
      )}
    </div>
  );
}

export default App;
