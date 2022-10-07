<script>

  import { Items } from '../stores/items'
  import { NodeNavigationHistory } from '../stores/nodeNavigationHistory'

	const backButtonPress = () => {
    NodeNavigationHistory.update((currentNavigationHistory) => {
      return currentNavigationHistory.slice(0, currentNavigationHistory.length -1)
    })
	}

  const itemsTableRowPress = (itemName) => {
		
    NodeNavigationHistory.update((currentNavigationHistory) => {
      return [...currentNavigationHistory, itemName]
    })
  }
</script>

<div class="node-navigation-history-pane">

  <div id="back-button-and-history-table">
    <button id="back-button" on:click={() => backButtonPress()}>
      Back
    </button>

    <table id="history-table">
      {#each $NodeNavigationHistory as historyItem (historyItem)}
          <!-- <td on:click={() => itemsTableRowPress(item.name) }> -->
          <td>
            { historyItem }
          </td>
      {/each}
    </table>
  </div>

  <div id="detail">
    Detail: 
    {#if $NodeNavigationHistory.at($NodeNavigationHistory.length - 1)}
      {$NodeNavigationHistory.at($NodeNavigationHistory.length - 1)}
    {:else}
    {/if}
  </div>

  <div id="items-table">
    <table>
      {#each $Items as item (item.id)}
          <tr on:click={() => itemsTableRowPress(item.name) }>
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