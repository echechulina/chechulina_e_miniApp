import { fetchData } from "./components/TheDataMiner.js";
import CarCard from "./components/TheCarCard.js";

(() => {

    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            removeAformat: true,
            showBioData: false,
            models: [],
            currentCarData: {} 
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");

        fetchData("./includes/index.php")
        .then(data => {
            data.forEach(car => this.models.push(car));
        })
        .catch(err => console.error(err));            
        },

        

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

           
            showCarData(car) {

                // debugger;
                // remove this prof from the professors array
                console.log('clicked to view prof bio data', car.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true;

                // make the selected prof's data visible
                this.currentCarData = car;
            },             
        },

        components: {
            "car-card": CarCard
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();