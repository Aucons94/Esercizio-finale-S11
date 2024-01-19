import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const SearchResults = ({ results }) => {
  console.log(results);
  const hasResults = results && results.length > 0;
  return (
    <div className={`col-12 pb-3 mt-5 ${hasResults ? "" : "d-none"}`}>
      {hasResults && <h2 className="text-light my-4">Search Results</h2>}
      <Row className="d-flex">
        {results &&
          results.length > 0 &&
          results.slice(0, 8).map((result) => (
            <Col key={result.album.id} xs={12} md={6} lg={3} className="mb-3">
              <div>
                <Link className="h5 text-light" to={`/album/${result.album.id}`}>
                  <img src={result.album.cover_medium} alt={result.album.title} className="img-fluid" />
                </Link>
                <div className="d-flex flex-column">
                  <Link className="h5 text-light" to={`/album/${result.album.id}`}>
                    {result.album.title}
                  </Link>
                  <Link className="h6 text-light" to={`/artist/${result.artist.id}`}>
                    {result.artist.name}
                  </Link>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default SearchResults;
