import axios from "axios"
import { Country } from "../interfaces/Countries"
import { Countries } from "../interfaces/CountriesApi"
function getCountries(url: string): Promise<Countries> {
  return axios.get(url)
    .then(({ data }): Countries => data.map(({ name: { common: name, official }, cca3, continents, capital, subregion, population, area, flags: { svg: flag }, coatOfArms: { svg: coatOfArms } }: Countries): Country => ({
      name,
      area,
      population,
      subregion,
      capital,
      official,
      cca3,
      continents,
      flag,
      coatOfArms
    })))
}
getCountries("https://restcountries.com/v3.1/all")