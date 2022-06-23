import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataFromApi } from '../redux/metric-redux';

const CountryDetails = () => {
  const listing = useSelector((state) => state.metricsReducer);
  const { id } = useParams();

  const dispatch = useDispatch();

  const details = listing.filter((country) => country.id === Number(id));

  useEffect(() => {
    if (listing.length === 0) {
      getDataFromApi(dispatch);
    }
  }, [dispatch]);

  return (
    <div className="country">
      {details.map((crt) => (
        <div key={0}>
          <div className="countryHeading">
            <div className="countryHeadingImage">
              <img src={crt.flags} alt="Africa map" />
            </div>
            <div className="countryHeadingTitle">
              <div>
                <h1>{crt.shortName}</h1>
                <span>{crt.fullName}</span>
              </div>
            </div>
          </div>
          <div className="countrylistTitle">
            <h3>COUNTRY DETAILS</h3>
          </div>
          <table key={1}>
            <tbody>
              <tr key={3}>
                <td className="countryDetails">
                  <span>Currency:</span>
                  <span>{crt.currencyName}</span>
                </td>
              </tr>
              <tr key={4}>
                <td className="countryDetails">
                  <span>Currency Symbol:</span>
                  <span>{crt.currencySymbol}</span>
                </td>
              </tr>
              <tr key={5}>
                <td className="countryDetails">
                  <span>Capital:</span>
                  <span>{crt.capital}</span>
                </td>
              </tr>
              <tr key={6}>
                <td className="countryDetails">
                  <span>Sub Region:</span>
                  <span>{crt.subregion}</span>
                </td>
              </tr>
              <tr key={7}>
                <td className="countryDetails">
                  <span>Language:</span>
                  <span>{crt.languages}</span>
                </td>
              </tr>
              <tr key={8}>
                <td className="countryDetails">
                  <span>Population:</span>
                  <span>{crt.population}</span>
                </td>
              </tr>
              <tr key={9}>
                <td className="countryDetails">
                  <span>Fifa Symbol:</span>
                  <span>{crt.fifa}</span>
                </td>
              </tr>
              <tr key={10}>
                <td className="countryDetails">
                  <span>Car Sign:</span>
                  <span>{crt.carSigns}</span>
                </td>
              </tr>
              <tr key={11}>
                <td className="countryDetails">
                  <span>Car Side:</span>
                  <span>{crt.carSide}</span>
                </td>
              </tr>
              <tr key={12}>
                <td className="countryDetails">
                  <span>Timezone:</span>
                  <span>{crt.timezones}</span>
                </td>
              </tr>
              <tr key={13}>
                <td className="countryDetails">
                  <span>Continents:</span>
                  <span>{crt.continents}</span>
                </td>
              </tr>
              <tr key={14}>
                <td className="countryDetails">
                  <span>Start of week:</span>
                  <span>{crt.startOfWeek}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
