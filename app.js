const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    data(){
        return{
            firstName: "Orly",
            lastName: "Plaza",
            email: "orly.plaza@hcdc.edu.ph",
            gender: "male",
            picture: "profile.jpg",
        }
    },
    methods:{
        async getUser(){
            // Fetch data through api
            const res = await fetch('https://randomuser.me/api')
            // Convert to json file
            const {results} = await res.json()
            // console.log(results)

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

// Mounting this App to the app id in the html.
app.mount('#app')