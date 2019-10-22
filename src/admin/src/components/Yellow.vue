<template>
<div>yellow</div>
    <!-- <section id="yellow" @load="lighterStart">
        <div class="wrapper">
            <div class="green">{{ get.greenTimer }}</div>
            <div class="yellow">{{ get.yellowTimer }}</div>
            <div class="red">{{ get.redTimer }}</div>
        </div>
    </section> -->
</template>

<script>
export default {
    name: 'yellow'
}
// import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
// import store from '../store/store'

// export default {
//     name: 'yellow',
//     computed: mapGetters(['get']),
//     methods: {
//         ...mapMutations(['setTimers', 'decrement']),
//         ...mapActions(['setLocation']),
//         lighterStart() {
//             if(this.get.yellowCheck) {
//                 this.setTimers('yellow')
//                 setTimeout(()=> {
//                     if(document.getElementById('yellow')) {
//                         if (this.get.yellowTimer > 0) {
//                             this.decrement('yellowTimer')
//                             this.lighterStart()
//                         } else {
//                             location.href = `/#/${this.get.directionTo}`
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
.yellow {
    background: yellow;
}
</style>