import { getCountries } from "../../src/adapters/getCountries.adapter"
describe("Countries Adapter", () => {
  it("Country", () => {
    getCountries("https://restcountries.com/v3.1/all")
      .then(d => expect(d).toBe({}))
  })
})