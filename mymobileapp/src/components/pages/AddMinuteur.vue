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
			            <input type="text" placeholder="Nom du minuteur" v-model="eventname">
			          </div>
			        </div>
			      </div>
			    </li>
			    <li>
			      <div class="item-content">
			        <div class="item-inner">
			          <div class="item-input">
			            <input type="time" v-model="endDuree"> 
			            <br>
			          </div>
			        </div>
			      </div>
			    </li>
			    <li>
			      <div class="item-content">
			        <div class="item-inner">
			          <div class="item-input">
			            <input type="datetime-local" placeholder="Date" v-model="endDate"> 
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
							        <input type="radio" name="lightcolor" value="pink" v-model="eventcolor">
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

			    							 COULEUR : {{eventcolor}}

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
import DureeMinut from '../../checkDureeMinute'
var minuterieRef = ApiFire.ref('minuteurs');

export default {
	data(){
		return{
			eventname: '',
			eventcolor: '',
			status: false,
			endDate: '',
			startDate: '',
			nextColor: '',
			color:'',
			eventDuree: '',
			endDuree: '',
			progress: 0,
			type: 'minut',
			label: ''
		}
	},
	firebase: {
		minuteurs: minuterieRef
	},
	methods: {
		addItem () {

			this.endDureeSplit = this.endDuree.split(":");
			this.endDureeHours = this.endDureeSplit[0];
			this.endDureeMinutes = this.endDureeSplit[1];

			this.now = new Date().getTime();
			this.endDateUTC = new Date(this.endDate).toUTCString();
			this.endDateStamped = new Date(this.endDateUTC).getTime();
			this.endDateStampedHours = (new Date(this.endDateUTC).getHours() - 1);

			//DATE COMMENCEMENT
			this.endDateStamped = new Date(this.endDate.replace('T', ' ').replace('-', '/')).getTime();

			// DATE FINALE
			if(this.endDate){
				this.endDateFinalMinutes = (this.endDateStamped + this.endDureeMinutes * 60000);
				this.endDateFinal = (this.endDateFinalMinutes + this.endDateStampedHours*60*60*1000);
			}
			else {
				this.endDateFinalMinutes = (this.now + this.endDureeMinutes * 60000);
				this.endDateFinal = (this.endDateFinalMinutes + this.endDureeHours*60*60*1000);
			}

		    this.label = DureeMinut(this.endDuree);

			this.$firebaseRefs.minuteurs.push({
				name: this.eventname,
				color: this.eventcolor,
				startDate: this.now,
				eventDuree: this.endDuree,
				endDate: this.endDateFinal,
				nextColor: this.nextColor,
				status: this.status,
				progress: this.progress,
				type: this.type,
				label: this.label
			});

			for (var k = 0; k < this.minuteurs.length - 1; k++){
	            this.next = this.minuteurs[k+1];
	            this.nextColor = 'progress-event-deco-'+this.next.color;
	            this.singleEvent = this.minuteurs[k];
	            this.mainColor = this.singleEvent.color;
	            ApiFire.ref('minuteurs').child(this.singleEvent['.key']).child('nextColor').set(this.nextColor);
          	};
			
		}
	},
}  
</script> 