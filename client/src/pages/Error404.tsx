import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h1>Oh no, this page doesn't exist!</h1>
      <Link to="/home" className="text-blue-500 underline">
        You can go back to the app (testing lang kasi muna kaya iba pa home page) page by clicking here, though! Sadya yung blue color, btw! By default black lang din siya e.
      </Link>
    </div>
  );
};

export default Error404;