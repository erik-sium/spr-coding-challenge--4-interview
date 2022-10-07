import { writable } from 'svelte/store'

export const NodeNavigationHistory = writable([
  {
    id: 1,
    name: "Item 1"
  },
  {
    id: 2,
    name: "Item 2"
  },
  {
    id: 3,
    name: "Item 3"
  },
])
