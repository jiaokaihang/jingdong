<template>
    <div>
        <div class="wrapper">
            <StaticPart />
            <Nearby />
        </div>
        <Docker  :currentIndex='0'/>
    </div>
</template>
<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from '../../components/Docker'

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
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    right: 0;
    padding: 0 .18rem .3rem .18rem;
}

</style>
