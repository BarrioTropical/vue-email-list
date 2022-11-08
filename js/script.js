/*
Attraverso l'apposita API di Boolean :faccia_che_festeggia:
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

"use strict"

const { createApp } = Vue

createApp({
    data(){
        return{
            //array vuoto per le mail
            mails: []
        }
    },
    mounted() {
        //ciclo for fino a 10
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                //push nell'array
                this.mails.push(response.data.response)
            })
        }
    }
}).mount('#app')