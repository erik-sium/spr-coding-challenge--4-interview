<!-- One UI portion of the solution was extracted in this file to demonstrate my understanding about components and containers. -->
<script>
    import {v4 as uuidv4} from 'uuid'

    import { get } from 'svelte/store'
    import { ItemsStore } from '../../stores/items'
    import { NodeNavigationHistoryStore } from '../../stores/nodeNavigationHistory'

    import { consoleLogNavigationHistory } from '../../tools/utilities'

    const itemsTableRowPress = (itemId) => {

    const itemIndex = get(ItemsStore).findIndex(item => item.id == itemId)
    const item = get(ItemsStore).at(itemIndex)

    const isFirstItem = get(NodeNavigationHistoryStore).length < 1
    let lastItemId
    
    if(!isFirstItem){
      lastItemId = get(NodeNavigationHistoryStore).at(get(NodeNavigationHistoryStore).length -1).itemId
    }

    // Prevents navigating to the last item in the navigation history again. A condition skips this check if there is no navigation history.
    if(isFirstItem || itemId != lastItemId) {
      const newHistoryItem = {
        historyId: uuidv4(),
        itemId: item.id,
        itemName: item.name
      }

      NodeNavigationHistoryStore.update((currentNavigationHistory) => {
        return [...currentNavigationHistory, newHistoryItem]
      })
    }
    
    consoleLogNavigationHistory() 
  }
</script>


<div id="items-table">
    <table>
      {#each $ItemsStore as item (item.id)}
          <tr on:click={() => itemsTableRowPress(item.id) }>
            { item.name }
          </tr>
      {/each}
    </table> 
</div>


<style>

    #items-table {
        background-color: lightgray;
        margin: 25px;
        padding: 10px;
    }
    
    table, tr {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid;
      cursor: pointer;
    }

</style>