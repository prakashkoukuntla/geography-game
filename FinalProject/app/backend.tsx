import country_codes from "./country_codes.json";

const shuffle = (array: Object[]) => {
  // from https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  return array.sort(() => Math.random() - 0.5);
};

export default function () {
  shuffle(country_codes);
  let country_code_objects = country_codes.slice(0, 4);

  let selected_countries: string[] = [];
  let selected_country_code: string = country_code_objects[0]["Code"];
  let image_url: string =
    "https://flagsapi.com/" + selected_country_code + "/flat/64.png";

  for (let i = 0; i < 4; i++) {
    let country_name = country_code_objects[i]["Name"];
    let comma_index = country_name.indexOf(",");
    if (comma_index != -1) {
      country_name = country_name.slice(0, comma_index);
    }
    selected_countries.push(country_name);
  }
  return [image_url, selected_countries];
}
