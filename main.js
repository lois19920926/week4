new Vue ({
    el:'#app',
    data:{
        products: [
            {
                id: 1586934917210,
                unit: '罐',
                category: '梅酒', 
                title: '白鶴 梅酒原酒',
                origin_price: 650,
                price: 599,
                description: '喝爆就對了',
                content: '720 ml 19.5% ',
                is_enabled: 1,
                imageUrl: 'https://cdn.shopify.com/s/files/1/0028/9669/1264/products/L01501_2000x.png?v=1580479073',
            },
            {
                id:1686934917210,
                unit: '罐',
                category: '梅酒',
                title: '梅乃宿 黑標18度梅酒',
                origin_price: 1000,
                price: 980,
                description: '喝爆就對了',
                content: '720 ml 18.0% ',
                is_enabled: 1,
                imageUrl: 'https://cdn.shopify.com/s/files/1/0028/9669/1264/products/L02911_e1dd2d6a-445a-448d-8649-71127fe888b3_2000x.png?v=1580480478',
            },
            {
                id:1686934917710,
                unit: '罐',
                category: '威士忌',
                title: '格蘭菲迪18年單一純麥威士忌',
                origin_price: 1874,
                price: 1499,
                description: '喝爆就對了',
                content: '700 ml 40.0% ',
                is_enabled: 0,
                imageUrl: 'https://fs1.shop123.com.tw/400126/upload/product/4001263302pic_outside_da5083269088.png',
            },
        ],
        temProduct:{}         
    },
    methods:{
        openModel(newProduct,item){
            switch(newProduct){
                case'new':
                $('#productModal').modal('show');
                console.log('new');
                break;    //阻止已執行的區塊繼續執行
                case'edit':
                this.temProduct = Object.assign({},item);
                $('#productModal').modal('show');
                console.log('edit');
                break;
                case'delete':
                this.temProduct = Object.assign({},item);
                $('#deleteProductmodal').modal('show');  
                console.log('delete');         
                break;                           
                default:
                break;
            }          
        },
        updateProduct(){
            if(this.temProduct.id){
                const id = this.temProduct.id;
                this.products.forEach((item,i) => {
                    if (item.id === id){
                        this.products[i] = this.temProduct;
                        console.log('ttrue');
                    }                  
                }); 
            } else {
                const id = new Date().getTime();
                this.temProduct.id = id;
                this.products.push(this.temProduct);
                console.log('new');
            }
            this.temProduct={};
            $('#productModal').modal('hide'); 
       },
       checkDelete(){   
        if (this.temProduct.id) {
            const id = this.temProduct.id;
            this.products.forEach((item, i) => {
              if (item.id === id) {
                this.products.splice(i, 1);
                this.temProduct = {};
              }
            });
          }
          $('#deleteProductmodal').modal('hide')  
       },
       clearAll(){
        const id = this.temProduct.id  
        this.temProduct = {};
        this.temProduct.id = id;
        console.log('clearAll');
       },
       cenceled(){
        this.temProduct = {};
        $('#productModal').modal('hide'); 
        $('#deleteProductmodal').modal('hide') ;
        console.log('cenceled');
       },  
       
    },
});
