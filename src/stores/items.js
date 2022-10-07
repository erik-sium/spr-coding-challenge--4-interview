import { readable } from 'svelte/store'

export const Items = readable([
  {
    id: 1,
    name: "AIA 1"
  },
  {
    id: 2,
    name: "AHA 2"
  },
  {
    id: 3,
    name: "HAH 3"
  },
])
