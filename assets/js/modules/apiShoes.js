export default async function shoesApi() {
  const carroussel = document.querySelector(".cards-destaques-carrousel");

  async function apiShoes() {
    const data = await fetch("https://api.brchallenges.com/api/paqueta/shoes");
    const dataJson = await data.json();

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

    const carrouselCard = document.querySelectorAll(".carrousel-card").length;
    const carrouselWidth =
      document.querySelector(".carrousel-card").clientWidth;

    let currentSlide = 0;
    let buttonLeft = document.querySelector(".left");
    let buttonRight = document.querySelector(".bRight");

    buttonLeft.addEventListener("click", () => {
      currentSlide--;
      if (currentSlide < 0) {
        console.log((currentSlide = carrouselCard - 1));
      }

      updateMargin();
    });

    buttonRight.addEventListener("click", () => {
      currentSlide++;
      if (currentSlide > carrouselCard - 1) {
        currentSlide = 0;
      }

      const carrouselOpacity = document.querySelector(".carrousel-card");

      updateMargin();
    });

    function updateMargin() {
      const moveSlide = currentSlide * carrouselWidth;
      carroussel.style.marginLeft = `-${moveSlide}px`;
    }
  }

  apiShoes();
}
