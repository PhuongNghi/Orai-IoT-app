<template>  
  <f7-page>

	<f7-subnavbar>
	  <f7-buttons>
	    <f7-button tab-link="#tab-1" active>Tab 1</f7-button>
	    <f7-button tab-link="#tab-2">Tab 2</f7-button>
	  </f7-buttons>
	</f7-subnavbar>

	<f7-page tabs no-page-content>
	  <f7-navbar title="My App"></f7-navbar>
	  <f7-page-content tab active id="tab-1">Tab 1 Content ...</f7-page-content>
	  <f7-page-content tab id="tab-2">Tab 2 Content ...</f7-page-content>
	</f7-page>

  </f7-page>
</template>

<script>  
export default {}  
</script> 