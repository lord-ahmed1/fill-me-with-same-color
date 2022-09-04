var colors = ['#570A57', '#FF4949', '#F8CB2E','#006778','#F0FFC2','#D3ECA7']
var sound_changingcolor = new Audio('changing color'+'.mp3');
$('.fading').animate({opacity:1},5000);
const number_of_sectors = 12;
const rotation_to_be_added = 360 / number_of_sectors;
create_tag = ''
// create sectors
for (var i = 0; i < number_of_sectors; i++) {
  create_tag = create_tag + '<div class="sector number' + i + '" style="transform: rotate(' + i * rotation_to_be_added + 'deg) skew(60deg);"></div>'
}
$('.wrapper').html(create_tag);
WRONG_SOUND=new Audio('wrong.mp3')
CORRECT=new Audio('correct.mp3')
function changing_color(number) {
  sound_changingcolor.play();
  r = Math.floor(Math.random() * colors.length)
  document.querySelector('.number' + number).style.backgroundColor = colors[r]
}

var sector_number = 0
end=0

var counter = 1000;
var myFunction = function() {

    if (end ==0){
      changing_color(sector_number);
      document.querySelector('.number' + sector_number).addEventListener('click',
        function checking(e) {
          if (sector_number == 0) {
            $('h1').text('complete the circle with same color')
            chosen_color = document.querySelector('.number' + sector_number).style.backgroundColor;
            if (chosen_color !== '') {
              document.querySelector('.number' + sector_number).removeEventListener('click', checking);
              sector_number++;
            }
          } else {
            $('p').text(sector_number+'/'+number_of_sectors)
            new_chosen_color = document.querySelector('.number' + sector_number).style.backgroundColor;
            if (new_chosen_color !== '') {
              if (new_chosen_color == chosen_color) {
                CORRECT.play();
                document.querySelector('.number' + sector_number).removeEventListener('click', checking);
                sector_number++;    counter /= 1.08;end=0
              } else if (new_chosen_color !== chosen_color) {
                WRONG_SOUND.play();
                document.querySelector('body').style.backgroundColor='#EB1D36';
                end=1
              }
            }
            if (sector_number==number_of_sectors){end=1
            }
          }
        })
    setTimeout(myFunction, counter);}
    else{  if(sector_number<number_of_sectors){$('h1').text('hard luck !!😜😜 refresh to restart')
  $('h1').css('color','blue')}
      else{$('h1').text('genius keep it up 😃🥂👏👏')
    }}
}
if (end==0){
setTimeout(myFunction, counter);}
else{if(sector_number<number_of_sectors){$('h1').text('hard luck !!😜😜')}  else{$('h1').text('genius keep it up 😃🥂👏👏')
}}
