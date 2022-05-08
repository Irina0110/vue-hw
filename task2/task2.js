'use strict';
let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 0
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

Vue.createApp({
    data() {
        return {
            goods
        }
    },
    computed: {
/*        sortByCount(){
            goods = this.goods.sort(
                (a,b) => a.count - b.count
            );
            return goods
        },*/
        notMany(good){
            if (good.count > 1 && good.count < 20) return true
        }
    },
    methods:{
        sortByTitle(){
             this.goods.sort(
                (a,b) => a.title.localeCompare(b.title)
            )
        },
        sortByCost(){
            this.goods.sort(
                (a,b) => a.price - b.price
            )
        },
        sortByCount(){
            this.goods.sort(
                (a,b) => a.count - b.count
            );
        }
    }
}).mount("#goods");
