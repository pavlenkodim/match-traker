import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function App() {
  return (
    <>
      <Container>
        <header className="flex justify-between items-center">
          <h1>Match Tracker</h1>
          <div className="action">
            <div className="notitfacation"></div>
            <Button>Обновить</Button>
          </div>
        </header>
        <main>
          <div className="match-list">
            <div className="match-item"></div>
          </div>
        </main>
      </Container>
    </>
  );
}

export default App;
