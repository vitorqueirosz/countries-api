import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiMoon, FiArrowLeft } from 'react-icons/fi';
import { Container, SubContainer, Header, Loading } from './styles';
import api from '../../services/api';

const Details = ({ match, changeTheme }) => {
    const [country, setCountry] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        const countryName = decodeURIComponent(match.params.country);
        async function dataApi() {
            const response = await api.get(`${countryName}`);

            const dataExport = response.data.map((item) => ({
                image: item.flag,
                name: item.name,
                population: item.population,
                region: item.region,
                nativeName: item.nativeName,
                capital: item.capital,
                subRegion: item.subregion,
                domain: item.topLevelDomain,
                currencies: item.currencies[0].name,
                languages: item.languages.map(lang => ([
                    lang.name

                ]).reduce((acc, val) => {
                    acc.push(val);

                    if(acc >= 1){
                        acc.push(', ');
                    }

                    return acc;

                }, [])),

                // border: item.borders.reduce((acc, val) => {
                //     acc.push(val);
                //     acc.push(' ');

                //     return acc;
                // }, [])
            }));
            setLoading(false);
            setCountry(...dataExport);
            console.log(dataExport)

        }
        dataApi();
    }, [match]);

    return (
        <>
            <Header>
                <h1>Where in the World?</h1>
                <h3>
                    <FiMoon  onClick={changeTheme} size={18}  /> Dark Mode
                </h3>
            </Header>


            <Container>
            {loading === true ? <Loading>Carregando informacoes...</Loading> :
            <>
                <div>
                <a href="/" style={{ textDecoration: 'none'}}>
                     <h3>
                         <FiArrowLeft size={15}/>Back
                    </h3>
                 </a>
                    <img src={country.image} alt={country.name} />
                </div>

                <SubContainer>
                    <div>
                        <h1>{country.name}</h1>
                        <strong>
                            Native Name:
                            <strong>{country.nativeName}</strong>
                        </strong>
                        <strong>
                            Population:
                            <strong>{country.population}</strong>
                        </strong>
                        <p>
                            Region: <p>{country.region}</p>
                        </p>
                        <p>
                            Sub Region: <p>{country.subRegion}</p>
                        </p>
                        <span>
                            Capital: <span>{country.capital}</span>
                        </span>
                        {/* <Footer>

                        <footer>Borders Countries: <footer>{country.border}</footer></footer>
                        </Footer> */}
                    </div>
                    <div>
                        <p>
                            Top Level Domain:
                            <p>{country.domain}</p>
                        </p>
                        <p>
                            Currencies: <p>{country.currencies}</p>
                        </p>
                        <span>
                            Languages: <p>{country.languages}</p>
                        </span>
                    </div>

                </SubContainer>
                </>
        }
            </Container>
        </>
    );
}

Details.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            country: PropTypes.string,
        }),
    }).isRequired,
};

export default Details;
