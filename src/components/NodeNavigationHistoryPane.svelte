<script>
	const backButtonPress = () => {
		
	}
</script>

<div class="node-navigation-history-pane">

  <div id="back-button-and-history-table">
    <button id="back-button" on:click={() => backButtonPress()}>
      Back
    </button>

    <table id="history-table">
      <td>
        a
      </td>
      <td>
        b
      </td>
    </table> 
  </div>

  <div id="detail">
    Detail:
  </div>

  <div id="items-table">
    <table>
      <tr>
        ciao
      </tr>
      <tr>
        miao
      </tr>
      <tr>
        azzo
      </tr>
    </table> 
  </div>
  

</div>

<style>

  table, td, tr, th {

    border-collapse: collapse;
    border: 1px solid;
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