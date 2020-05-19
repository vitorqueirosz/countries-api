import React, { useState, useEffect } from 'react';
import { FiMoon, FiSearch, FiChevronDown } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, Header, SubContainer, List, Footer} from './styles';

// import * as themes from '../../styles/themes';

 const Main = ({ changeTheme }) => {
    const [countrys, setCountry] = useState([]);
    const [newCountry, setNewCountry] = useState();
    const [region, setRegion] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storage = localStorage.getItem('countrys');

        if (storage) {
            setCountry(JSON.parse(storage));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('countrys', JSON.stringify(countrys));
    }, [countrys]);

    function handleInputChange(e) {
        setNewCountry(e.target.value);
    }

    async function handleSubmit() {
        try {
        const response = await api.get(`${newCountry}`);

        const countryData = response.data.map((item) => ({
            name: item.name,
            image: item.flag,
            population: item.population,
            region: item.region,
            capital: item.capital,
        }));

        console.log(response.data);

        setCountry([...countrys, ...countryData]);
        setNewCountry('');
        console.log(setCountry);
        setError(false);
        }
        catch(error){
            setError(true);
        }
    }
    function handleRegionChange(){
        setRegion(region === true ? false : true);
        console.log(setRegion);
    }
    return (
        <>
            <Header >
                <h1>Where in the World?</h1>
                <h3>
                    <FiMoon    onClick={changeTheme} size={18} /> Dark Mode
                </h3>
            </Header>
            <Container  >
                <SubContainer error={error}>
                    <div >
                        <FiSearch
                            onClick={handleSubmit}
                            size={18}

                        />
                        <input
                            value={newCountry}
                            onChange={handleInputChange}
                            placeholder="Search for a country..."
                        />
                    </div>


                        <p onClick={handleRegionChange}>
                        Filter by Region
                        <FiChevronDown  size={18} color="#fff" />
                        </p>


                        {/* <RegionToogle>
                        {region === true ? <RegionModal>
                            <section>
                                <a>Africa</a>
                                <a>Asia</a>
                                <a>Europe</a>
                                <a>America</a>
                            </section>
                        </RegionModal>
                            : null}
                        </RegionToogle> */}

                         </SubContainer>
                <List>
                    {countrys.map((country) => (
                        <li key={country}>
                            <a href={`${encodeURIComponent(country.name)}`}>
                                <img src={country.image} alt={country.name} />
                            </a>
                            <h1>{country.name}</h1>

                            <strong>
                                Population:
                                <strong>{country.population}</strong>
                            </strong>
                            <p>
                                Region: <p>{country.region}</p>
                            </p>
                            <span>
                                Capital: <span>{country.capital}</span>
                            </span>
                        </li>
                    ))}
                </List>
            </Container>
                <Footer>vitorqueirosz</Footer>
        </>
    );
}


export default Main;
