let score = {player: 0 ,computer: 0};
let green = '#1eff00';
let yellow ='#e9fa00';
let blue = '#0015ce';
let red = '#ff0000';

window.onload = ()=>{
  set_image_visibility_listenner();
  set_hands_click_listeners();

}

function fetch_images(selector){
  return document.querySelectorAll(selector);
}

function set_image_visibility_listenner(){
  let images = fetch_images('.choosable');

  set_images_to_not_selected('img');
  
  images.forEach(element => {
    element.addEventListener('mouseover',(event)=>{
      element.style.opacity = 1;
    })
    element.addEventListener('mouseleave',(event)=>{
      element.style.opacity = 0.5;
    })
  });
}

function set_images_to_not_selected(selector){
  let images = fetch_images(selector);
  images.forEach(element => {
    element.style.opacity = 0.5;
  });
}
function set_images_to_selected(move){
  let image = document.querySelector(`#computer_${move}_img`);
  image.style.opacity = 1;
}

function reset_score(){
  let score = document.querySelectorAll('.score');
  score.forEach(element => {
    element.innerHTML = 0;
  });
}

function increase_score({score,who}){
  if(who == 'player')return score.player++;
  score.computer++;;
}

function update_score_view(){
  let player_score = document.querySelector('#player_score');
  let computer_score = document.querySelector('#computer_score');

  player_score.innerHTML = score.player;
  computer_score.innerHTML = score.computer;
}

function set_hands_click_listeners(){
  let images = fetch_images('.choosable');

  images.forEach(element => {
    element.addEventListener('click',(event)=>{
      play_jokenpo(element);
    });
  });

}

function set_notice(message){
  let notice = document.querySelector('#notice');
  notice.innerHTML = message;
}
function set_notice_color(color){
  let notice = document.querySelector('#notice');
  notice.style.backgroundColor = color;
}
function set_winning_color(){
  let player = document.querySelector("#player");
  let computer = document.querySelector("#computer");

  if(score.player > score.computer){
    player.style.backgroundColor = green;
    computer.style.backgroundColor = red;
  }else if(score.player < score.computer){
    player.style.backgroundColor = red;
    computer.style.backgroundColor = green;
  }else{
    player.style.backgroundColor = blue;
    computer.style.backgroundColor = blue;
  }

}

function play_jokenpo(element){
  let moves = ['rock','paper','scissor']
  let player_move = element.id.split('_')[1]
  let randon_zero_one_or_two = Math.floor(Math.random() * 3);
  let computer_move = moves[randon_zero_one_or_two]
  
  set_images_to_not_selected('.computer_hand_img');
  set_images_to_selected(computer_move);

  //jokenpo rules
  if((player_move == 'rock' && computer_move == 'scissor') || 
    (player_move == 'scissor' && computer_move == 'paper') ||
    (player_move == 'paper' && computer_move == 'rock')){
    increase_score({score, who:'player'});
    update_score_view();
    set_notice('Nice! you won!');
    set_notice_color(green);

  }else if(player_move == computer_move){
    set_notice('What?!  A tie ?!');
    set_notice_color(yellow);

  }
  else{
    increase_score({score, who:'computer'});
    update_score_view();
    set_notice('Ops... maybe next time, huh?');
    set_notice_color(red);
  }
  set_winning_color();
}