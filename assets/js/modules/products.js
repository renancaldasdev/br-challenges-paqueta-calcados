export default async function products() {
  const urlParams = new URLSearchParams(window.location.search);
  const idUrl = urlParams.get("id");

  const page = document.querySelector("#content");

  const nameTop = document.querySelector(".name-short");

  async function productsApi() {
    const data = await fetch("https://api.brchallenges.com/api/paqueta/shoes");
    const dataJson = await data.json();

    const htmlProducts = dataJson
      .map(({ id, name, price, soldout, image, description, discount }) => {
        if (idUrl === id) {
          return `
          <div class="content-top">
          <p>Paqueta</p>
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M1 10L6 5.5L1 1"
              stroke="#383838"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="name-short">${name}</span>
        </div>
        <div class="shoe-purchase">
          <div class="shoe-image">
            <img src="${image}" alt="" />
            <p>Compartilhe</p>
            <div class="sociais">
              <a href="/"
                ><img src="./assets/images/icons/instagram.svg" alt=""
              /></a>
              <a href="/"
                ><img src="./assets/images/icons/facebook.svg" alt=""
              /></a>
              <a href="/"
                ><img src="./assets/images/icons/twitter.svg" alt=""
              /></a>
              <a href="/"
                ><img src="./assets/images/icons/youtube.svg" alt=""
              /></a>
              <a href="/"
                ><img src="./assets/images/icons/pinterest.svg" alt=""
              /></a>
            </div>
          </div>
          <div class="shoe-desc">
            <div class="show-desc-title">
              <svg
                width="37"
                height="33"
                viewBox="0 0 37 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3012 3.74063C32.446 2.87177 31.4306 2.18253 30.313 1.71228C29.1954 1.24204 27.9975 1 26.7878 1C25.5781 1 24.3802 1.24204 23.2626 1.71228C22.145 2.18253 21.1296 2.87177 20.2744 3.74063L18.4996 5.54297L16.7247 3.74063C14.9972 1.98641 12.6543 1.00091 10.2113 1.00091C7.76832 1.00091 5.42539 1.98641 3.69793 3.74063C1.97048 5.49484 1 7.87405 1 10.3549C1 12.8357 1.97048 15.2149 3.69793 16.9691L5.47279 18.7715L18.4996 32L31.5263 18.7715L33.3012 16.9691C34.1568 16.1007 34.8355 15.0696 35.2986 13.9347C35.7617 12.7998 36 11.5833 36 10.3549C36 9.12642 35.7617 7.90999 35.2986 6.7751C34.8355 5.6402 34.1568 4.60908 33.3012 3.74063V3.74063Z"
                  stroke="#CF5D00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3>${name}</h3>
              <p>Código do produto</p>
            </div>
            <div class="show-desc-price">
              <div class="show-desc-price-descount">
                <s>R$ ${price.value}</s>
                <p>${price.discount} desconto</p>
              </div>
              <div class="show-desc-price-part">
                <p>R$ ${price.value} / ${price.discount}</p>
                <p>ou 10x de ${price.value / 10}</p>
              </div>
              <div class="show-desc-numbers">
                <p class="number">Escolha a numeração</p>
                <div class="show-desc-number">
                  <div class="number-shoes">
                    <p>33</p>
                  </div>
                  <div class="number-shoes">
                    <p>34</p>
                  </div>
                  <div class="number-shoes">
                    <p>35</p>
                  </div>
                  <div class="number-shoes">
                    <p>36</p>
                  </div>
                  <div class="number-shoes">
                    <p>37</p>
                  </div>
                  <div class="number-shoes">
                    <p>38</p>
                  </div>
                </div>
                <p class="guia">Guia de tamanhos</p>
              </div>
              <button class="button">comprar</button>
            </div>
          </div>
        </div>
        <div class="show-desc-text">
          <h4>Descrição do Produto</h4>
          <p>${description}</p>
        </div>
          `;
        }
      })
      .join("");
    page.innerHTML = htmlProducts;
  }
  productsApi();
}
