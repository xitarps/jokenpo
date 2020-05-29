let score= {player: 0 ,computer: 0}

window.onload = ()=>{
  set_image_visibility_listenner()
  set_hands_click_listeners();

}

function fetch_images(selector){
  return document.querySelectorAll(selector)
}

function set_image_visibility_listenner(){
  let images = fetch_images('.choosable')

  set_images_to_not_selected()
  
  images.forEach(element => {
    element.addEventListener('mouseover',(event)=>{
      element.style.opacity = 1;
    })
    element.addEventListener('mouseleave',(event)=>{
      element.style.opacity = 0.5;
    })
  });
}

function set_images_to_not_selected(){
  let images = fetch_images('img')
  images.forEach(element => {
    element.style.opacity = 0.5
  });
}

function reset_score(){
  let score = document.querySelectorAll('.score')
  score.forEach(element => {
    element.innerHTML = 0
  });
}

function increase_score({score,who}){
  if(who == 'player')return score.player++;
  score.computer++;
}

function update_score_view(){
  let player_score = document.querySelector('#player_score');
  let computer_score = document.querySelector('#computer_score');

  player_score.innerHTML = score.player
  computer_score.innerHTML = score.computer
}

function set_hands_click_listeners(){
  let images = fetch_images('.choosable');

  images.forEach(element => {
    element.addEventListener('click',(event)=>{
      play_jokenpo(element);
    });
  });

}

function play_jokenpo(element){
  let player_move = element.id.split('_')[1]
  let computer_move = 'rock'

  //jokenpo rules
  if((player_move == 'rock' && computer_move == 'scissor') || 
    (player_move == 'scissor' && computer_move == 'paper') ||
    (player_move == 'paper' && computer_move == 'rock')){
    increase_score({score, who:'player'});
    update_score_view();
  }else if(player_move == computer_move){
    //then do nothing...
  }
  else{
    increase_score({score, who:'computer'});
    update_score_view()
  }
}