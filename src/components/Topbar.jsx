import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="col-9 col-lg-11 d-none d-md-flex" id="mainLinks">
      <Link to="/">TRENDING</Link>
      <Link to="/">PODCAST</Link>
      <Link to="/">MOODS AND GENRES</Link>
      <Link to="/">NEW RELEASES</Link>
      <Link to="/">DISCOVER</Link>
    </div>
  );
};

export default Topbar;
