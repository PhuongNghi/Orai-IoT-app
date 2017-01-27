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

.item-inner{
	&::after{
		background-color: transparent !important;
	}
}

.label-radio.active-state{
	background-color: transparent !important;
}

.ripple-wave{
	display: none !important;
}

.wrap-colors{
	padding-left: 0 !important;

	.choose-colors{
		li:first-child label{
			padding-left: 0 !important;
		}
	}
}

</style>

<template>  
	<f7-page class="add-page">
    <f7-navbar title="" back-link="Back" sliding>
    	<f7-nav-right>
		    <f7-link icon="icon-bars" open-panel="right"></f7-link>
	    </f7-nav-right>
    </f7-navbar>

            <form id="createEvent">
			<div class="list-block">
			  <ul>
			    <li>
			      <div class="item-content">
			        <div class="item-inner">
			          <div class="item-input">
			            <input type="text" placeholder="Nom de l'événement" v-model="eventname">
			          </div>
			        </div>
			      </div>
			    </li>
			    <li>
			      <div class="item-content">
			        <div class="item-inner">
			          <div class="item-input">
			            <input type="date" placeholder="Date" v-model="endDate"> 
			            <f7-button round color="pink">Synchroniser</f7-button>
			            <br>
			          </div>
			        </div>
			      </div>
			    </li>
			    <li>
			    	<div class="item-content wrap-colors">
			    		<div class="item-inner">
			    			<ul class="choose-colors">
							    <li>
							      <label class="label-radio item-content">
							        <input type="radio" name="lightcolor" value="purple" v-model="eventcolor">
							        <div class="item-media">
							          <i class="icon icon-form-radio"></i>
							        </div>
							        <div class="item-inner">
							          <div class="item-title">Purple</div>
							        </div>
							      </label>
							    </li>
							    <li>
							      <label class="label-radio item-content">
							        <input type="radio" name="lightcolor" value="green" v-model="eventcolor">
							        <div class="item-media">
							          <i class="icon icon-form-radio"></i>
							        </div>
							        <div class="item-inner">
							          <div class="item-title">Pink</div>
							        </div>
							      </label>
							    </li>
							    <li>
							      <label class="label-radio item-content">
							        <input type="radio" name="lightcolor" value="amber" v-model="eventcolor">
							        <div class="item-media">
							          <i class="icon icon-form-radio"></i>
							        </div>
							        <div class="item-inner">
							          <div class="item-title">Amber</div>
							        </div>
							      </label>
							    </li>
							    <li>
							      <label class="label-radio item-content">
							        <input type="radio" name="lightcolor" value="blue" v-model="eventcolor">
							        <div class="item-media">
							          <i class="icon icon-form-radio"></i>
							        </div>
							        <div class="item-inner">
							          <div class="item-title">Blue</div>
							        </div>
							      </label>
							    </li>
						    	<li>
							      <label class="label-radio item-content">
							        <input type="radio" name="lightcolor" value="orange" v-model="eventcolor">
							        <div class="item-media">
							          <i class="icon icon-form-radio"></i>
							        </div>
							        <div class="item-inner">
							          <div class="item-title">Orange</div>
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
						<f7-button round color="pink" type="submit" @click="addItem">Valider</f7-button>
					</a>
				</li>
			  </ul>
			</div>      
		</form>		

	</f7-page>
</template>

<script>  

import ApiFire from '../../api'

export default {

	data(){
		return{
			eventname: '',
			eventcolor: '',
			progress: '',
			status: false,
			daysDiff: '',
			endDate: '',
			startDate: ''
		}
	},
	firebase: {
    	events: ApiFire.ref('events')
  	},
	methods: {
		addItem () {

			// this.eventDateString = new Date(this.endDate).toLocaleDateString();
			// this.eventDateSplit = this.eventDateString.split("/");
			// this.eventDateNew = this.eventDateSplit[2] + "-" + this.eventDateSplit[1] + "-" + this.eventDateSplit[0];
			
			this.end = new Date(this.endDate).getTime();
			this.start = new Date().getTime();
			this.now = new Date().getTime();

			this.timeDiff = Math.abs(this.end - this.now);
			this.diffDays = Math.ceil(this.timeDiff / (1000 * 3600 * 24)); 

			this.progress = Math.round(((this.now - this.start) / (this.end - this.start)) * 100);

			this.$firebaseRefs.events.push({
				name: this.eventname,
				endDate: this.end,
				startDate: this.start,
				color: this.eventcolor,
				progress: this.progress,
				status: this.status,
				daysDiff: this.diffDays
			})
		}
	}
}  
</script> 