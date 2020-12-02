export default {
    name: "TheCarCard",

    props: ["car"],

    // data needs to be a function inside a component
    data: function() {
        return {
            theCar: this.car.name,
     
        }
    },

    template: 
    `<li @click="logClicked">
    
    <img :src="'images/' + car.image" :alt='car.name + " image"'>
    <p>{{ car.name }}</p>
    <div class="buttons">
    <p class="click">Click for open</p>   
    <p class="click">Click for hide</p>
    </div>              
   </li>`,


    created: function () {
        console.log(`created ${this.car.name}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.car.name}'s component!`);
            this.$emit("showmydata", this.car)
        }
    }
}