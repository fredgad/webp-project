<template>
    <div>red</div>
    <!-- <section id="red" @load="lighterStart">
        <div class="wrapper">
            <div class="green">{{ get.greenTimer }}</div>
            <div class="yellow">{{ get.yellowTimer }}</div>
            <div class="red"
            :class="{ blink: get.redTimer < 4 }">{{ get.redTimer }}</div>
        </div>
    </section> -->
</template>

<script>
export default {
    name: 'red'
}
// import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
// import store from '../store/store'

// export default {
//     name: 'red',
//     computed: mapGetters(['get']),
//     methods: {
//         ...mapMutations(['setDirection', 'setTimers', 'decrement']),
//         ...mapActions(['setLocation']),
//         lighterStart() {
//             if(this.get.redCheck) {
//                 this.setTimers('red')
//                 setTimeout(()=> {
//                     if(document.getElementById('red')) {
//                         if (this.get.redTimer > 0 ) {   
//                             this.decrement('redTimer')
//                             this.setDirection('green')
//                             this.lighterStart()
//                         } else { 
//                             location.href = '/#/yellow'
//                         }
//                     }
//                 }, 1000)
//             }
//         }
//     },
//     created: function() {
//         this.lighterStart()
//     }
// }
</script>

<style lang="scss" scoped>
.red {
    background: red;
}
</style>