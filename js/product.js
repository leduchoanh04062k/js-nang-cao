 //1. Lấy tham số id trên đường dẫn
const urlParams = new URLSearchParams(window.location.search);
cateId = urlParams.get('id');

 var apiUrl = 'https://5e9eeb3711b078001679bd29.mockapi.io/categories';
//2. Gửi request lên mockapi để lấy thông tin sản phẩm về
  const getProInfoUrl = apiUrl + "/" + cateId + "/" +"products";
            axios.get(getProInfoUrl)
            //3/* xử lý data */
.then(res => {
    if(res.statusText === "OK"){
        document.querySelector('#product-item').innerHTML = '';
        var data = res.data;
        var content = ``;
        data.forEach(element => {
        content += `<div class="product-item col-md-3 col-sm-6 col-xs-12">
                                    <a href="#"><img src="${element.image}" class="img-thumbnail"></a>
                                    <p style="color:black"><a href="details.html?id=${element.id}&&cateId=${cateId}">${element.name}</a></p>
                                    <p class="price">${element.price}</p>
                                    <p class="detail">${element.detail}</p>   
                                    <div class="marsk">
                                        <a href="details.html?id=${element.id}&&cateId=${cateId}">Xem chi tiết</a>
                                    </div>
                                    </div>`;
                                 })
        document.querySelector('#product-item').innerHTML = content;
    }
})
