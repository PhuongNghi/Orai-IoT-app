<style lang="scss">
input[type='text'], input[type='email']{
	border-bottom: #ff2d55 solid 1px !important;
	color: #ff2d55;
}

input[type='date']{
	color: #ff2d55 !important;
}

*::-webkit-input-placeholder {
    color: #ff2d55;
}

*:-moz-placeholder {
    /* FF 4-18 */
    color: #ff2d55;
}

*::-moz-placeholder {
    /* FF 19+ */
    color: #ff2d55;
}

*:-ms-input-placeholder {
    /* IE 10+ */
    color: #ff2d55;
}

ul.choose-colors{
	display: inherit;
}

.add-buttons-bonus {
    
    padding-top: 20px;

	a{
		color: black !important;
	}
}

.add-btn-valid{
	padding-top: 20px;
	padding-bottom: 20px;
}

.add-page .page-content{
	background-color: white;
}

</style>

<template>  
	<f7-page class="add-page">
    <f7-navbar title="" back-link="Back" sliding>
    	<f7-nav-right>
		    <f7-link icon="icon-bars" open-panel="right"></f7-link>
	    </f7-nav-right>
    </f7-navbar>

		<!-- TABS -->
<!-- 		<f7-subnavbar>
		  <f7-buttons>
		    <f7-button tab-link="#tab-1" active>Tab 1</f7-button>
		    <f7-button tab-link="#tab-2">Tab 2</f7-button>
		  </f7-buttons>
		</f7-subnavbar>

		<f7-page tabs no-page-content>
		  <f7-page-content tab active id="tab-1">Tab 1 Content ...</f7-page-content>
		  <f7-page-content tab id="tab-2">Tab 2 Content ...</f7-page-content>
		</f7-page> -->

		<div class="list-block">
		  <ul>
		    <li>
		      <div class="item-content">
		        <div class="item-inner">
		          <div class="item-input">
		            <input type="text" placeholder="Nom de l'événement">
		          </div>
		        </div>
		      </div>
		    </li>
		    <li>
		      <div class="item-content">
		        <div class="item-inner">
		          <div class="item-input">
		            <input type="date" placeholder="Date" value="2014-04-30"> 
		            <f7-button round color="pink">Synchroniser</f7-button>
		            <br>
		          </div>
		        </div>
		      </div>
		    </li>
		    <li>
		    	<div class="item-content">
		    		<div class="item-inner">
		    			<ul class="choose-colors">
						    <li>
						      <label class="label-radio item-content">
						        <input type="radio" name="my-radio" value="Books" checked="checked">
						        <div class="item-media">
						          <i class="icon icon-form-radio"></i>
						        </div>
						        <div class="item-inner">
						          <div class="item-title">Rouge</div>
						        </div>
						      </label>
						    </li>
						    <li>
						      <label class="label-radio item-content">
						        <input type="radio" name="my-radio" value="Movies">
						        <div class="item-media">
						          <i class="icon icon-form-radio"></i>
						        </div>
						        <div class="item-inner">
						          <div class="item-title">Vert</div>
						        </div>
						      </label>
						    </li>
						  </ul>
		    		</div>
		    	</div>
		    </li>
			<li class="add-buttons-bonus">
			<a href="">
				<div class="item-content">
						<div class="item-media"><f7-icon f7="bell"></f7-icon></div>
						<div class="item-inner">
							<div class="item-title">Choisir une annonce de fin</div>
						</div>
					
				</div>
			</a>
			<a href="">
				<div class="item-content">
						<div class="item-media"><f7-icon f7="compose"></f7-icon></div>
						<div class="item-inner">
							<div class="item-title">Ajouter une note</div>
						</div>
					
				</div>
			</a>
			<a href="">
				<div class="item-content">
						<div class="item-media"><f7-icon f7="person"></f7-icon></div>
						<div class="item-inner">
							<div class="item-title">Inviter quelqu'un</div>
						</div>
					
				</div>
			</a>	
			</li>
			<li class="add-btn-valid">
				<a href="">
					<f7-button round color="pink">Valider</f7-button>
				</a>
			</li>
		  </ul>
		</div>      



	</f7-page>
</template>

<script>  
export default {}  
</script> 