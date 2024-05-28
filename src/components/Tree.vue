<template>
  <ul id="treemain" class="ptree">
    <template v-for="(node, idx) in props.data" :key="idx">
        <li class="container">
            <Node :hasChildren="Object.hasOwn(node, 'children')" @expand="expandNode(node)"> 
                <template #title>
                    {{ node.title }}
                </template>
            </Node>
            <Tree v-if="node.children"
              v-show="node.isExpanded"
              :data="node.children"
            />
        </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
    import Node from './Node.vue'

    interface Props {
        text: string,
        area: string,
        nodeList: Object,
        data: Object,
        build: Object
    }
    const props = defineProps<{
        data: Array,
    }>()

    const expandNode = (node) => {
        console.debug('expanding...', node)
        node.isExpanded = !node.isExpanded
    }

</script>
<style scoped>
.ptree li {
  list-style-type: none;
}

.ptree li div {
  display: flex;
  list-style-type: none;
  margin: 2px;
  border-radius: 5px;
  padding: 2px;
  align-items: center;
  min-height: 30px;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

.ptree_order_div {
  /* height: 20px !important; */
}
.ptree_order_div i {
  /* margin: 5px !important; */
}

.ptree .menuIcon {
  margin-left: auto;
  color: black;
}

.ptree .drag-handler {
  color: #ef5350;
}

.ptree .drag-handler i {
  pointer-events: none;
}

.ptree .drag_triggered {
  border: 2px solid red;
}

.ptree {
  /* border: 2px solid darkgrey; */
  border-radius: 5px;
  height: 100%;
  overflow-y: auto;
  /* padding-right: 15px; */
}

.ptree .valid {
  border: 2px solid green;
  border-radius: 5px;
}

.ptree .invalid {
  border: 2px solid #ef5350;
  border-radius: 5px;
}
.disabled > * {
  pointer-events: none;
}
.ptreemenuCont i {
  pointer-events: none;
}

.ptree ul.not-active {
  max-height: 0;
  transition: max-height 0.25s ease-out;
  overflow: hidden;
}

.ptree ul.active {
  /* max-height: 500px; */
  transition: max-height 0.15s ease-in;
}
.dragging-element li{ border: 0px !important;}
.ptree::-webkit-scrollbar { width: 2px !important;}
.ptree::-webkit-scrollbar-track { background: whitesmoke !important;}
.ptree::-webkit-scrollbar-thumb { background: grey !important; }

/* fixes menu click event problem */
.menuIcon > svg {
  pointer-events: none;
}
</style>
