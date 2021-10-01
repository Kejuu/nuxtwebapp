const axios = require('axios');

export default {
    data(){
        return {
            //Array que es enviado al frontent.
            slides: []
        }
    },
    components : {
    },
    //Cada que se carga la página se ejecutan los metodos en mounted()
    mounted() {
        this.obtenerImagenes()
    },
    methods: {
        //GET: Solicitud a la API
        obtenerImagenes() {
            let url = "http://localhost:3001/images";
            axios.get(url).then(respuesta => {
                let data = respuesta.data;
                this.slides = data;
                if (respuesta.ok) {
                    this.slides = data.info
                    console.log("lista: " + this.slides.data)
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });
        },
    
        
    },

        
    

};