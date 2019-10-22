<template>
    <div>green</div>
    <!-- <section id="green" @load="lighterStart">
        <div class="wrapper">
            <div class="green"
            :class="{ blink: get.greenTimer < 4 }">{{ get.greenTimer }}</div>
            <div class="yellow">{{ get.yellowTimer }}</div>
            <div class="red">{{ get.redTimer }}</div>
        </div>
    </section> -->
</template>

<script>
export default {
    name: 'green'
}
// import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
// import store from '../store/store'
// import { setInterval } from 'timers'

// export default {
//     name: 'green',
//     computed: {
//         ...mapState(['state']),
//         ...mapGetters(['get'])
//     },
//     methods: {
//         ...mapMutations(['setDirection', 'setTimers', 'decrement']),
//         ...mapActions(['setLocation']),
//         lighterStart() {
//             if(this.get.greenCheck) {
//                 this.setTimers('green')
//                 setTimeout(()=> {
//                     if(document.querySelector('#green')) {
//                         if (this.get.greenTimer > 0) {
//                             this.decrement('greenTimer')
//                             this.setDirection('red')
//                             this.lighterStart()
//                         }else {
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
.green {
    background: green;
}
</style>