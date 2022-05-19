'use strict';

const card = {
    emits: ['deleteImg'],
    template: `
    <img :src="info" :id="id">
    <button @click="$emit('deleteImg', id)">Удалить изображение</button> 
    `,
    props: {
        info: String,
        id: Number
    }
};

let app = Vue.createApp({
    data(){
        return{
            idInput: "",
            linkInput:"",
            images: [
                {name:1, img: "https://picsum.photos/200/300?random=1"},
                {name:2, img: "https://picsum.photos/200/300?random=2"},
                {name:3, img: "https://picsum.photos/200/300?random=3"},
                {name:4, img: "https://picsum.photos/200/300?random=4"},
                {name:5, img: "https://picsum.photos/200/300?random=5"}
            ]
        }
    },
    methods:{
        deleteImage(id){
            console.log(id)
           return this.images.filter(el => el.name !== id);
        },
        addImage(id, link){
            for (let elem in this.images){
                if(id === elem.name) {
                    break
                }}
                    this.images.push({name: id, img: link})
                    console.log(this.images)
            }
        }
});


app.component("item-card", card);
app.mount("#gallery");