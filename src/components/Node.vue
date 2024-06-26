<script setup lang= "ts">
    import { ref } from 'vue'
    import { Node } from '../types'
    import IconPlus from './icons/IconPlus.vue'
    import IconMinus from './icons/IconMinus.vue'
    import IconMore from './icons/IconMore.vue'

    const props = defineProps({
        children: Array<Node>,
        hasChildren: Boolean,
    })

    const emit = defineEmits(['expand'])
    const isExpanded = ref(false)
    const expand = () => {
        isExpanded.value = !isExpanded.value
        emit('expand')
    }

</script>

<template>
    <div class="node">
        <a @click.prevent="expand" v-if="props.hasChildren" class="fold-control">
            <IconPlus v-show="!isExpanded" />
            <IconMinus v-show="isExpanded" />
        </a>
        <span class="title">
            <slot name="title"></slot>
        </span>
        <label class="switch">
            <input type="checkbox" value="1">
            <span class="slider round"></span>
        </label>
        <a class="context-menu">
            <IconMore class="menuIcon"/>
        </a>
    </div>
</template>
<style scoped>
.menuIcon {
    margin-top: auto;
}
.node {
    background-color: white;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 5px;
}

.title {
    color: #2d2d2d;
    margin: 3px auto auto auto;
}

.fold-control {
    padding-top: 5px;
    cursor: pointer;
}

.context-menu {
    /* padding-top: 5px; */
    /* margin-top: 5px; */
    line-height: 0;
    cursor: pointer;
}

.switch {
  position: relative;
  display: inline-block;
  height: 15px;
  padding-inline: 18px;
}

.switch input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

 input:checked + .slider {
  background-color: #66bb6a;
}

 input:focus + .slider {
  /* box-shadow: 0 0 1px #2196f3; */
}

 input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

.slider {
  position: absolute;
  cursor: pointer;
  max-width: 34px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 1px;
  bottom: 1px; 
  top: 1px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

 .slider.round {
  border-radius: 34px;
  margin-bottom: 1px;
}

 .slider.round:before {
  border-radius: 50%;
}

li a {
  margin-right: 10px;
  margin-left: 10px;
  color: black;
  font-size: 14px;
  font-family: monospace, "Open Sans";
  text-decoration: none;
}
</style>
