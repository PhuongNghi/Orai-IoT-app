var checkDuree = function(tabDuree){

  var duree;

  // var minutDuree = tab.eventDuree;
  var dureeSplited = tabDuree.split(':');

  if(dureeSplited[0] == 1 && dureeSplited[1] < 1){
    duree = dureeSplited[0] + ' heure';
  } 
  else if(dureeSplited[0] > 1 && dureeSplited[1] < 1) {
    duree = dureeSplited[0] + ' heures';
  }
  else if(dureeSplited[1] >= 1 && dureeSplited[0] < 1) {
    duree = dureeSplited[1] + ' minutes';
  }

  if(dureeSplited[0] == 1 && dureeSplited[1] == 1) {
    duree = dureeSplited[0] + ' heure et ' + dureeSplited[1] + ' minute';
  }
  else if(dureeSplited[0] == 1 && dureeSplited[1] > 1) {
    duree = dureeSplited[0] + ' heure et ' + dureeSplited[1] + ' minutes';
  }
  else if(dureeSplited[0] > 1 && dureeSplited[1] == 1) {
    duree = dureeSplited[0] + ' heures et ' + dureeSplited[1] + ' minute';
  }
  else if(dureeSplited[0] >= 1 && dureeSplited[1] >= 1) {
    duree = dureeSplited[0] + ' heures et ' + dureeSplited[1] + ' minutes';
  }


  return duree;
}

export default checkDuree;