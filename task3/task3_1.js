'use strict';
let services =  [
    {
        title: "Женская стрижка на длинные волосы",
        id: 1,
        price: 2000
    },
    {
        title: "Стрижка челки",
        id: 2,
        price: 300
    },
    {
        title: "Детская стрижка (до 7 лет)",
        id: 3,
        price: 700
    },
    {
        title: "Мужская стрижка",
        id: 4,
        price: 1000
    },
    {
        title: "Коррекция бороды",
        id: 5,
        price: 1200
    },
    {
        title: "Тонирование мужских волос",
        id: 6,
        price: 1500
    },
    {
        title: "Окрашивание волос",
        id: 7,
        price: 5000
    },
    {
        title: "Женский маникюр",
        id: 8,
        price: 1500
    },
    {
        title: "Мужской маникюр",
        id: 9,
        price: 1700
    },
    {
        title: "Педикюр",
        id: 9,
        price: 2500
    },
    {
        title: "Покрытие гель-лаком",
        id: 10,
        price: 1500
    }
];

Vue.createApp({
    data(){
        return{
            services,
            bill: 0,
            click: true,
            selected:[]
        }
    },
    methods:{
        add(item){
           this.selected.push(item);
           this.bill += item.price;
        },
        deleteItem(item){
            for (let i = this.selected.length-1; i >= 0; i--){
                if(item.id === this.selected[i].id ){
                    this.bill -= this.selected[i].price;
                    this.selected.splice(i, 1);
                }
            }
        }
    }
}).mount('#services')