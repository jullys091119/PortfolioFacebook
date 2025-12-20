import { getPerfilImages } from "../queriesFirebase.js";


async function Banner() {
  const data = await setImagesPerfil();
  const container = document.querySelector(".max-container");
  const divBannerCotainer = document.createElement("div");
  divBannerCotainer.classList.add("div-banner-container")
  if (!container) return;

  const imgBanner = document.createElement("img");
  imgBanner.src = data.imageBanner;
  imgBanner.alt = "Banner image";
  imgBanner.classList.add("banner-image");
  container.appendChild(divBannerCotainer);
  divBannerCotainer.appendChild(imgBanner)
 
}

async function setImagesPerfil() {
  const data = await getPerfilImages();
  return data;
}

export default Banner;
