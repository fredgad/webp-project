<template>
    <section id="controller">
        <router-link to="/green"><div class="green">green</div></router-link>
        <router-link to="/yellow"><div class="yellow">yellow</div></router-link>
        <router-link to="/red"><div class="red">red</div></router-link>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#controller {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 200px;
    height: 160px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #eee;
    border: 2px solid #888;
    border-radius: 10px;

    div {
        height: 50px;
        width: 50px;
        background: #fff;
        border-radius: 12.5px;
        box-shadow: 0 0 7px #222, inset -3px -3px 5px 3px #222;
        transition: .4s;
        margin-top: 5px;
    }
    div:hover {
        box-shadow: 0 0 0px #222, inset 3px 3px 5px 3px #222;
    }
    .green {
        background-color: green;
    }
    .yellow {
        background-color: yellow;
    }
    .red {
        background-color: red;
    }
}
</style>