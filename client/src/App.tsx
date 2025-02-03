import { Link } from "react-router-dom";

function App() {

  return (
    <div>
      <h1>Wow! You installed the project already?</h1>
      <p>Impressive. Ito muna example ng links, I'm just testing something out: </p>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App;
