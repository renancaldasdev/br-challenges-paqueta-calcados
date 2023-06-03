export default async function shoesApi() {
  async function apiShoes() {
    const data = await fetch("https://api.brchallenges.com/api/paqueta/shoes");
    const dataJson = await data.json();

    const carroussel = document.querySelector(".cards-destaques-carrousel");

    const htmlCardShoes = dataJson
      .map(({ name, price, image }) => {
        return `
        <div class="carrousel-card">
          <div class="card-image">
            <img src="${image}" alt="" />
          </div>
          <div class="card-icon">
            <img src="./assets/images/icons/heart.svg" alt="" />
          </div>
          <div class="card-name">${name}</div>
          <div class="card-price">${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price.value)}</div>

          <div class="card-price-parcelado">ou 10x ${new Intl.NumberFormat(
            "pt-BR",
            {
              style: "currency",
              currency: "BRL",
            }
          ).format(price.value / 10)}</div>

          <button class="button">Comprar</button>
        </div>    
        `;
      })
      .join("");

    carroussel.innerHTML = htmlCardShoes;
  }
  apiShoes();
}
