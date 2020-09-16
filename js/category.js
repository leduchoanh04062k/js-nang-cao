var requestUrl = "https://5e9eeb3711b078001679bd29.mockapi.io/categories";
axios.get(requestUrl)
.then(res => {
    if(res.statusText === "OK"){
        document.querySelector('#all-product').innerHTML = '';
        var data = res.data;
        console.log(data);
        var content = ``;
        data.forEach(element => {
        content += `<li class="menu-item"><a href="category.html?id=${element.id}">${element.name}</a></li>`;
        })
        document.querySelector('#all-product').innerHTML = content;
    }
})

