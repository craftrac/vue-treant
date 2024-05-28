[![NPM version](https://img.shields.io/npm/v/vue-treant.svg)](https://www.npmjs.com/package/vue-treant)
[![Logo](./logo.png)](https://www.npmjs.com/package/vue-treant)
# Vue Treant

Vue Treant is a Vue 3 component designed to create and display hierarchical tree structures. It supports recursive rendering of nodes, making it perfect for visualizing entity relationships, organizational charts, or any nested data structure.
Features

* Recursive Rendering: Supports infinite levels of nesting for nodes.
* Dynamic Expansion: Nodes can be expanded or collapsed dynamically.
* Customizable: Easily customize node appearance and behavior using slots and props.
* Event Handling: Emits events for node expansion, allowing for custom behavior and state management.

## Installation

To install Vue Treant:

yarn add vue-treant

Usage

Here’s a basic example of how to use Vue Treant in your Vue 3 project.
## Basic Usage
    
Import and Register the Component
```
<script setup>
import { ref } from 'vue';
import VueTreant from 'vue-treant';

const treeData = reactive([{
  title: 'Root Node',
  children: [
    { title: 'Child Node 1', children: [{ title: 'Grandchild Node 1' }] },
    { title: 'Child Node 2' }
  ]
}]);
</script>

<template>
  <VueTreant :node="treeData" />
</template>
```
## Customizing Nodes

Use slots to customize the appearance of the nodes. 
