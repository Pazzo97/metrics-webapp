import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { getDataFromApi, countryFilter } from '../redux/metric-redux';

const Metrics = () => {
  const listing = useSelector((state) => state.metricsReducer, shallowEqual);

  const [countryTitle, setcountryTitle] = useState('');

  const dispatch = useDispatch();

  const handleInputTitle = (e) => {
    e.preventDefault();
    setcountryTitle(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(countryFilter(countryTitle));
  };

  useEffect(() => {
    if (listing.length === 0) {
      getDataFromApi(dispatch);
    }
  }, [dispatch]);

  return (
    <div className="country">
      <div className="countryHeading">
        <div className="countryHeadingImage">
          <img src="africa.png" alt="Africa map" />
        </div>
        <div className="countryHeadingTitle">
          <div>
            <h1>AFRICA</h1>
            <span>The heart of hope</span>
          </div>
        </div>
      </div>
      <div className="countrylistTitle">
        <h3>LIST OF COUNTRIES</h3>
        <form className="book-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputcountryTitle"
            placeholder="Search by country"
            onChange={handleInputTitle}
            value={countryTitle}
          />
          <button className="submit-btn" type="submit">
            Search
          </button>
        </form>
        <button
          className="submit-btn"
          type="button"
          onClick={() => getDataFromApi(dispatch)}
        >
          ClearSearch
        </button>
      </div>
      <ul>
        {listing.map((country) => (
          <li
            className="countrylistItem"
            style={{
              backgroundImage: `linear-gradient(rgb(66 105 176 / 80%), rgb(66 105 176 / 80%)), url(${country.flags})`,
            }}
            key={country.id}
          >
            <NavLink
              className="active-link"
              to={`/countryDetails/${country.id}`}
            >
              <div>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </div>
              <div>
                <h2>{country.shortName}</h2>
                <span>{country.capital}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Metrics;
