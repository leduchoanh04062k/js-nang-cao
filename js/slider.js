var requestUrl = "https://5e9eeb3711b078001679bd29.mockapi.io/sliders";
axios.get(requestUrl)
.then(res => {
    if(res.statusText === "OK"){
        document.querySelector('#all-slider').innerHTML = '';
          document.querySelector('#all-slider1').innerHTML = '';
        var data = res.data;
        console.log(data);
        var content = ``;
         var content1 = ``;
        data.forEach(function(value, key) {
        content1 +=`<li data-target="#demo" data-slide-to="${value.id}"></li>`;
        content += `<div class="carousel-item ${key===0?'active':''}">
                                    <img src="${value.image}" alt="${value.image}" >
                                </div>`;
        })
        document.querySelector('#all-slider').innerHTML = content;
         document.querySelector('#all-slider1').innerHTML = content1;
    }
})
