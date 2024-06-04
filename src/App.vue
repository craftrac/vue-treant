<script setup lang="ts">
import Tree from './components/Tree.vue'
import { Node } from './types'


const data: Node[] = [{
    title: 'Root',
    children: [
        {
            title: 'Node 1',
            children: [
                { title: 'Node 1.1' },
                { title: 'Node 1.2', children: [{ title: 'Node 1.2.1' }] },
            ]
        },
        {
            title: 'Node 2',
            children: [
                { title: 'Node 2.1' },
                { title: 'Node 2.2' }
            ]
        }
    ]},
    { title: 'Other' }
]
</script>

<template>
  <h1>Vue Treant</h1>
  <Tree ref="vueTreant" :data="data" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
