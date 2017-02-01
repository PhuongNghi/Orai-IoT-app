<style lang="scss">
input[type='text'], input[type='email']{
	border-bottom: rgba(153, 62, 62, 0.5) solid 1px !important;
	color: #ff2d55;
}

input[type='date'], input[type='time'], input[type='datetime-local']{
	color: rgba(153, 62, 62, 0.5) !important;
	-webkit-appearance: normal;
    appearance: normal;

    &::-webkit-clear-button { 
	  -webkit-appearance: none !important;
	  margin: 0 !important;
	}
}

.date-input{
	width: 139px !important;
}

*::-webkit-input-placeholder {
    color: rgba(153, 62, 62, 0.5);
}

*:-moz-placeholder {
    /* FF 4-18 */
    color: rgba(153, 62, 62, 0.5);
}

*::-moz-placeholder {
    /* FF 19+ */
    color: rgba(153, 62, 62, 0.5);
}

*:-ms-input-placeholder {
    /* IE 10+ */
    color: rgba(153, 62, 62, 0.5);
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

.add-page {
	.page-content{
		background-color: white;
	}

	.navbar{
	    height: 193px;
	    background: url('../../assets/bg3.svg');
	    background-repeat: no-repeat;
	    background-size: cover;

	    &::after{
	    	display: none;
	    }

	    .right, .left{
			position: relative;
			top: -50px;
	    }
	}

	.page-content{
		padding-top: 193px;

		.content-block{
			padding-top: 9px;
		}
	}

	.header-title-createEvent{
		top: 143px !important;
		border: none;
		background-color: rgba(255, 240, 222, 0.6);
		height: 51px;

		&::after{
			display: none;
		}

		.header-title-content{
			color: rgba(136, 80, 73, 0.5) !important;
			font-family: "Interstate-Light" !important;
			font-size: 14px;
			letter-spacing: 1px;
		}
	}

	.list-block{
		ul{
			background: none;
		}

		.item-content{
			padding-left: 0 !important;

			.item-inner{
				padding: 0;
			}
		}
	}

	ul.choose-options{
		li:nth-child(3){
		  border-bottom: none !important;
		}
	}

	.add-button{
	    position: relative;
	    top: -8px;
	}
}

.item-inner{
	&::after{
		background-color: transparent !important;
	}

	.separator-ou{
	    padding-bottom: 12px;
	    padding-left: 2px;
	    font-family: 'Interstate-Light';
	    font-size: 12px !important;
	    color: rgba(136, 80, 73, 0.5);
	}

	.sync-list{
		li{
			display: inline-block;
		    width: 40px;
		    height: 40px;
			background-repeat: no-repeat;

			&:first-child{
				background-image: url('../../assets/icon/google-calendar.svg');
				background-size: 44px 41px;
			}
			&:nth-child(2){
				background-image: url('../../assets/icon/fb.svg');
				background-size: 28px 44px;
				background-position-x: center;
			}
			&:nth-child(3){
				background-image: url('../../assets/icon/addmore.svg');
				background-size: 28px 44px;
			}
		}
	}
}

ul.create-form{
	li{
		margin-bottom: 12px;

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
	}
}

.wrap-event{
	.wrap-colors{
		margin-top: -18px;
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
			<f7-block class="header-title-content">CREATION D'UN NOUVEL ÉVÈNEMENT</f7-block>
    	</f7-subnavbar>
    </f7-navbar>

    

    <f7-block class="wrap-event">
		<form id="createEvent">
			<div class="list-block">
			  <ul class="create-form">
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
			          <div class="item-input date-input">
			            <input type="text" onfocus="(this.type='date')" placeholder="Date" v-model="endDate"> 
			            <br>
			          </div>
			          <div class="separator-ou">OU</div>
			          <ul class="sync-list">
			          	<li class="google"></li>
			          	<li class="fb"></li>
			          	<li class="addmore"></li>
			          </ul>
			        </div>
			      </div>
			    </li>
			</ul>

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

	COULEUR : {{this.checked}}

	</f7-page>
</template>

<script>  

import ApiFire from '../../api'
import SelectColor from '../selectcolor'
import BlockOptions from '../blockoptions'

export default {
	components: {
		MySelectColor: SelectColor,
		MyBlockOptions: BlockOptions
	},
	data(){
		return{
			eventname: '',
			checked: '',
			color: '',
			progress: '',
			status: false,
			daysDiff: '',
			endDate: '',
			startDate: '',
			nextColor: '',
			type: 'event'
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
				color: this.checked,
				progress: this.progress,
				status: this.status,
				daysDiff: this.diffDays,
				nextColor: this.nextColor,
				type: this.type
			})

			for (var k = 0; k < this.events.length - 1; k++){
	            this.next = this.events[k+1];
	            this.nextColor = 'progress-event-deco-'+this.next.color;
	            this.singleEvent = this.events[k];
	            this.mainColor = this.singleEvent.color;
	            ApiFire.ref('events').child(this.singleEvent['.key']).child('nextColor').set(this.nextColor);
          	};
		}
	}
}  
</script> 