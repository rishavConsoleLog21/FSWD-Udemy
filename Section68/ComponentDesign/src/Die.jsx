import "./Die.css";
export default function Die({ val, color="salteblue" }) {
  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {val}
    </div>
  );
}
