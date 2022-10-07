import { get } from 'svelte/store'
import { NodeNavigationHistoryStore } from '../stores/nodeNavigationHistory'

export const consoleLogNavigationHistory = () => {
    console.log(get(NodeNavigationHistoryStore))
}