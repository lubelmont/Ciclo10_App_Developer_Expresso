export async function getCountries() {
    const AMERICA_GAMES = "https://restcountries.com/v3.1/region/America?fields=name,capital,currencies,flags,region"
    const response = await fetch(AMERICA_GAMES);
    const data = await response.json();

    const countries = data.map((country) => {
        
        const {common, official} = country.name;
        const region = country.region;
        const {capital} = country;
        const {png} = country.flags;

        return {
            common,
            official,
            capital,
            png, 
            region
            
        }
    });

    return countries;

}