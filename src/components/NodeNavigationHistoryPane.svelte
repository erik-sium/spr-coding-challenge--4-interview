<script>

  import {v4 as uuidv4} from 'uuid'
  import { ItemsStore } from '../stores/items'
  import { NodeNavigationHistoryStore } from '../stores/nodeNavigationHistory'
  import { get } from 'svelte/store'

  const consoleLogNavigationHistory = () => {
    console.log(get(NodeNavigationHistoryStore))
  }

	const backButtonPress = () => {
    NodeNavigationHistoryStore.update((currentNavigationHistory) => {
      return currentNavigationHistory.slice(0, currentNavigationHistory.length -1)
    })

    consoleLogNavigationHistory()
	}

  const itemsTableRowPress = (itemId) => {

    const itemIndex = get(ItemsStore).findIndex(item => item.id == itemId)
    const item = get(ItemsStore).at(itemIndex)
    

    const isFirstItem = get(NodeNavigationHistoryStore).length < 1
    let lastItemId
    
    if(!isFirstItem){
      lastItemId = get(NodeNavigationHistoryStore).at(get(NodeNavigationHistoryStore).length -1).itemId
    }

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

  const historyItemPress = (historyItem) => {
		
    let historyItemIndex = get(NodeNavigationHistoryStore).indexOf(historyItem)
    NodeNavigationHistoryStore.update((currentNavigationHistory) => {
      return currentNavigationHistory.slice(0, historyItemIndex + 1)
    })

    consoleLogNavigationHistory()
  }

</script>

<div class="node-navigation-history-pane">

  <div id="back-button-and-history-table">
    <button id="back-button" on:click={() => backButtonPress()}>
      Back
    </button>

    <table id="history-table">
      {#each $NodeNavigationHistoryStore as historyItem (historyItem.historyId)}
          <td on:click={() => historyItemPress(historyItem)}>
            { historyItem.itemName } >
          </td>
      {/each}
    </table>
  </div>

  <div id="detail">
    Detail: 
    {#if $NodeNavigationHistoryStore.at($NodeNavigationHistoryStore.length - 1)}
      {$NodeNavigationHistoryStore.at($NodeNavigationHistoryStore.length - 1).itemName}
    {/if}
  </div>

  <div id="items-table">
    <table>
      {#each $ItemsStore as item (item.id)}
          <tr on:click={() => itemsTableRowPress(item.id) }>
            { item.name }
          </tr>
      {/each}
    </table> 
  </div>

</div>

<style>

  table, td, tr, th {

    border-collapse: collapse;
    border: 1px solid;
    cursor: pointer;
  }

  .node-navigation-history-pane {
    background-color: lightcyan;
    position: absolute;
    right: 0;

    width: 58%;
    float: right;
  }

  .node-navigation-history-pane > * {
    background-color: lightgray;
    width: auto;
    margin: 25px;
    padding: 10px;
  }
 
  #back-button-and-history-table {
    text-align: left;
  }

  #back-button {
    display: inline-block;
    cursor: pointer;
  }

  #history-table {
    display: inline-block;
    margin-left: 25px;
    vertical-align:middle;
  }

  #detail {
    text-align: left;
  }

  #items-table > table {
    width: 100%;
  }

</style>