<style lang="scss">

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

ul.add-minut{
	li:nth-child(2){
		input{
			margin-top: 15px;
		}
	}

	input, input[type='text'], input[type='email']{
	    border-bottom: rgba(153, 62, 62, 0.5) solid 1px !important;
	    color: #9B3C80;
	    font-family: "Interstate-Light";
	    letter-spacing: 1px;
	    transition: all .15s linear;

	    &.focus-state{
	      border-bottom: #86D3D7 solid 1px !important;
	    } 
	  }

	  ::-webkit-input-placeholder{
	    font-size: 17px !important;
	    color: rgba(153, 62, 62, 0.5);
	    font-family: "Interstate-Light";
  	}

	.duree-input{
		width: 50px !important;
	}

	.lancementdate-input{
		width: 80px !important;
		margin-top: -8px;

		input{
			width: 100vw;
		    margin-left: -44px;
		    margin-top: 19px;
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
	    <f7-subnavbar class="header-title-createEvent">
			<f7-block class="header-title-content">CREATION D'UN NOUVEAU MINUTEUR</f7-block>
    	</f7-subnavbar>
    </f7-navbar>

		<f7-block class="add-minut-wrap">
	        <form id="createEvent">
				<div class="list-block">
				  <ul class="add-minut">
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
				          <div class="item-input duree-input">
				            <input type="text" onfocus="(this.type='time')" placeholder="Durée" v-model="endDuree"> 
				            <br>
				          </div>

				          <div class="item-input lancementdate-input">
				            <input type="text" onfocus="(this.type='datetime-local')" placeholder="Lancement automatique" v-model="endDate"> 
				            <br>
				          </div>
				          <div class="item-input lancementdate-input">
				            
				          </div>
				        </div>
				      </div>
				    </li>

				  </ul>
				</div>      
			</form>	
				<div class="item-content wrap-colors">
	      <div class="item-inner">
	        <ul class="choose-colors">
	          <li>
	            <label class="label-radio item-content">
	              <input type="radio" name="lightcolor" value="purple" id="purple" v-model="checked">
	              <div class="item-inner"></div>
	              <div class="item-title purple"></div>
	            </label>
	          </li>
	          <li>
	            <label class="label-radio item-content">
	              <input type="radio" name="lightcolor" value="pink" id="pink" v-model="checked">
	              <div class="item-inner"></div>
	              <div class="item-title pink"></div>
	            </label>
	          </li>
	          <li>
	            <label class="label-radio item-content">
	              <input type="radio" name="lightcolor" value="orange" id="orange" v-model="checked">
	              <div class="item-inner"></div>
	              <div class="item-title orange"></div>
	            </label>
	          </li>
	          <li>
	            <label class="label-radio item-content">
	              <input type="radio" name="lightcolor" value="amber" id="amber" v-model="checked">
	              <div class="item-inner"></div>
	              <div class="item-title amber"></div>
	            </label>
	          </li>
	          <li>
	            <label class="label-radio item-content">
	              <input type="radio" name="lightcolor" value="blue" id="blue" v-model="checked">
	              <div class="item-inner"></div>
	              <div class="item-title blue"></div>
	            </label>
	          </li>
	      </ul>
	    </div>

  	</div>
		</f7-block>	

		<my-block-options></my-block-options>

		<f7-button class="add-button back" @click="addItem">
	     	<span>Valider et envoyer</span>
		</f7-button>

	</f7-page>
</template>

<script>  

import ApiFire from '../../api'
import DureeMinut from '../../checkDureeMinute'
import SelectColor from '../selectcolor'
import BlockOptions from '../blockoptions'

var minuterieRef = ApiFire.ref('minuteurs');

export default {
	components: {
		MySelectColor: SelectColor,
		MyBlockOptions: BlockOptions
	},
	data(){
		return{
			eventname: '',
			eventcolor: '',
			status: true,
			endDate: '',
			startDate: '',
			nextColor: '',
			color:'',
			eventDuree: '',
			endDuree: '',
			progress: 0,
			type: 'minut',
			label: '',
			checked: '',
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
				color: this.checked,
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