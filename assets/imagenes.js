const axios = require('axios');

export default {
    data(){
        return {
            slides: []
        }
    },
    components : {
    },
    //cuando se carga la pagina se llama el metodo para listar los clientees
    mounted() {
        this.obtenerImagenes()
    },
    methods: {

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