import "./main.css";
import {
  firstPage,
  btn,
  countryP,
  country,
  inputBrand,
  inputWeb,
  description,
  p,
  webSiteP,  
  category,
  categoryP, 
  infoBrand,
  infoDescription,
  infoWebSite,
  infoCountry,
  infoCategory,
  info,
  tbody,
  descriptionP,
} from "./constantans";

btn.onclick = (e) => {
  e.preventDefault();

  //brand name

  if (inputBrand.value === "") {
    inputBrand.style.borderColor = "red";
    p.innerText = "Brand name is required !";
  }
  if (inputBrand.value !== "") {
    inputBrand.style.borderColor = "black";
    p.classList.add("d-none");
    console.log(inputBrand.value);
  }

  //des

  if (description.value === "") {
    description.style.borderColor = "red";
    descriptionP.innerText = "Description is required !";
  }
  if (description.value !== "") {
    description.style.borderColor = "black";
    descriptionP.classList.add("d-none");
    console.log(description.value);
  }

  // web

  if (inputWeb.value === "") {
    inputWeb.style.borderColor = "red";
    webSiteP.style.display = "flex";
  }

  if (inputWeb.value !== "") {
    inputWeb.style.borderColor = "black";
    webSiteP.style.display = "none";
    console.log(inputWeb.value);
  }

  // country

  if (country.value === "Country") {
    country.style.borderColor = "red";
    countryP.style.display = "flex";
  }

  if (country.selectedIndex !== 0) {
    country.style.borderColor = "black";
    countryP.style.display = "none";
    console.log(country.value);
  }

  // if (country.value === "") {
  //   country.style.borderColor = "red";
  //   countryP.style.display = "flex";
  // }
  // if (country.value !== "") {
  //   country.style.borderColor = "black";
  //   countryP.style.display = "none";
  //   console.log(country.value);
  // }

  // category

  if (category.value === "category") {
    category.style.borderColor = "red";
    categoryP.style.display = "flex";
  }

  if (category.selectedIndex !== 0) {
    category.style.borderColor = "black";
    categoryP.style.display = "none";
    console.log(category.value);
  }

  // if (category.value === "") {
  //   category.style.borderColor = "red";
  //   categoryP.style.display = "flex";
  // }
  // if (category.value !== "") {
  //   category.style.borderColor = "black";
  //   categoryP.style.display = "none";
  //   console.log(category.value);
  // }

  if (
    inputBrand.value !== "" &&
    inputWeb.value !== "" &&
    country.value !== "" &&
    category.value !== ""
  ) {
    firstPage.forEach((e) => {
      e.style.display = "none";
    });

    info.style.display = "grid";
    infoBrand.textContent = `Brand name: ${inputBrand.value}`;
    infoDescription.textContent = `Description: ${description.value}`;
    infoWebSite.textContent = `Web site: ${inputWeb.value}`;
    infoCountry.textContent = `Country: ${country.value}`;
    infoCategory.textContent = `Category: ${category.value}`;
    btn.style.display = "none";
  }
};
