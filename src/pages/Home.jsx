import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <div>Home page</div>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
  </div>
);

export default Home;
