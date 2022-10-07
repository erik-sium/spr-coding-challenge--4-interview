<script>
  import { NodeNavigationHistoryStore } from '../../stores/nodeNavigationHistory'
  import { get } from 'svelte/store'
  import ItemsTable from '../units/ItemsTable.svelte';

  import { consoleLogNavigationHistory } from '../../tools/utilities'

	const backButtonPress = () => {

    // Updates navigation history to start from the beginning and end at the penultimate item.
    // Removes the current item from the navigation history.
    NodeNavigationHistoryStore.update((currentNavigationHistory) => {
      return currentNavigationHistory.slice(0, currentNavigationHistory.length -1)
    })

    consoleLogNavigationHistory()
	}

  const historyItemPress = (historyItem) => {
		
    let historyItemIndex = get(NodeNavigationHistoryStore).indexOf(historyItem)

    // Updates navigation history to start from the beginning and end at the selected item.
    // Removes all history after the selected item.
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

  <ItemsTable />
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

  
</style>