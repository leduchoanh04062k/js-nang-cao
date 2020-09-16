const urlParams = new URLSearchParams(window.location.search);
cateId = urlParams.get('cateId')
idPro = urlParams.get('id')
var requestUrl = `https://5e9eeb3711b078001679bd29.mockapi.io/categories/${cateId}/products/${idPro}`;
axios.get(requestUrl)
    .then(res => {
        if (res.statusText === "OK") {
            var data = res.data;
            document.querySelector('#product-title').innerHTML = data.name;
            document.querySelector('.price').innerHTML = data.price;
            document.querySelector('#product-detail').innerHTML = data.detail;
            var image = `<img src="${data.image}" alt="${data.image}" width="400px"> `;

            document.querySelector('#product-img').innerHTML = image;
        }
    })