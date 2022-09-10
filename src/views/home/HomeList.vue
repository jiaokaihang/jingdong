<template>
    <div>
        <div class="wrapper">
            <StaticPart />
            <Nearby />
        </div>
        <Docker />
    </div>
</template>
<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from './Docker.vue'

export default {
  name: ' HomeList ',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>
<style lang="scss">
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.wrapper {
    background-image: url('https://www.16pic.com/pic/pic_9306902.html');
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    right: 0;
    padding: 0 .18rem .3rem .18rem;
}

</style>
