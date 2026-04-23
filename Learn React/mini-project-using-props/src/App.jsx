import Card from "./components/Card";
import amazon from "./assets/amazon.jpg";

const App = () => {
  return (
    <div className="parent">
      <Card
        cardImg={amazon}
        cardTitle="Amazon"
        cardDescription="Senior UI/UX Designer"
        cardTitleTime="2 days ago"
        cardPrice="$120/hr"
        location="Kathmandu,Nepal"
        role="Part Timer"
        level="Senior Level"
      />
      <Card
        cardImg={amazon}
        cardTitle="Google"
        cardDescription="Senior UI/UX Designer"
        cardTitleTime="3 days ago"
        cardPrice="$140/hr"
        location="Dallu,Nepal"
        role="Part Timer"
        level="Senior Level"
      />
    </div>
  );
};

export default App;
