import Card from "./components/Card";
import rajImg from "./assets/raj-profile.jpg";
import sameerImg from "./assets/sameer-profile.jpg";
import skjImg from "./assets/shaisabh-profile.jpg";
import sinmbfImg from "./assets/sinmbf-profile.jpg";

const App = () => {
  return (
    <div className="parent">
      <Card profileImg={rajImg} user="Sinmbf" age={21} />
      <Card profileImg={sameerImg} user="Lost" age={18} />
      <Card profileImg={skjImg} user="Raj" age={22} />
      <Card profileImg={sinmbfImg} user="Sameer" age={20} />
    </div>
  );
};

export default App;
