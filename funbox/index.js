let tagline1 = document.querySelector('.tagline1');
let taglineInvisible1 = document.querySelector('.taglineInvisible1');
let card1 = document.querySelector('.card1');
let weight1 = document.querySelector('.weight1');
let card__head1 = document.querySelector('.card__head1');
let link1 = document.querySelector('.link1');


card1.onclick = function() {

  tagline1.classList.toggle('selected');
  card1.classList.toggle('selected');
  weight1.classList.toggle('selected');
  card__head1.classList.toggle('selected');
  taglineInvisible1.classList.toggle('selected');

  if(card1.classList.contains('selected')){
    document.getElementById("card1").addEventListener("mouseover", () => {
      card__head1.textContent = "Котэ не одобряет?";
      card__head1.style.color = "#D91667";
    });
    
    document.getElementById("card1").addEventListener("mouseout", () => {
      card__head1.textContent = "Сказочное заморское яство";
      card__head1.style.color = "#666666";
    });
  } else {
    document.getElementById("card1").addEventListener("mouseover", () => {
      card__head1.textContent = "Сказочное заморское яство";
      card__head1.style.color = "#666666";
    });
    
    document.getElementById("card1").addEventListener("mouseout", () => {
      card__head1.textContent = "Сказочное заморское яство";
      card__head1.style.color = "#666666";
    });
  }
}

link1.onclick = function(e) {
  e.preventDefault();

  tagline1.classList.toggle('selected');
  card1.classList.toggle('selected');
  weight1.classList.toggle('selected');
  card__head1.classList.toggle('selected');
  taglineInvisible1.classList.toggle('selected');

  if(card1.classList.contains('selected')){
    document.getElementById("card1").addEventListener("mouseover", () => {
      card__head1.textContent = "Котэ не одобряет?";
      card__head1.style.color = "#D91667";
    });
    
    document.getElementById("card1").addEventListener("mouseout", () => {
      card__head1.textContent = "Сказочное заморское яство";
      card__head1.style.color = "#666666";
    });
  } else {
    document.getElementById("card1").addEventListener("mouseover", () => {
      card__head1.textContent = "Сказочное заморское яство";
      card__head1.style.color = "#666666";
    });
    
    document.getElementById("card1").addEventListener("mouseout", () => {
      card__head1.textContent = "Сказочное заморское яство";
      card__head1.style.color = "#666666";
    });
  }
}


let tagline2 = document.querySelector('.tagline2');
let card2 = document.querySelector('.card2');
let weight2 = document.querySelector('.weight2');
let card__head2 = document.querySelector('.card__head2');
let taglineInvisible2 = document.querySelector('.taglineInvisible2');
let link2 = document.querySelector('.link2');

card2.onclick = function() {

  tagline2.classList.toggle('selected');
  card2.classList.toggle('selected');
  weight2.classList.toggle('selected');
  card__head2.classList.toggle('selected');
  taglineInvisible2.classList.toggle('selected');

  if(card2.classList.contains('selected')){
    document.getElementById("card2").addEventListener("mouseover", () => {
      card__head2.textContent = "Котэ не одобряет?";
      card__head2.style.color = "#D91667";
    });
    
    document.getElementById("card2").addEventListener("mouseout", () => {
      card__head2.textContent = "Сказочное заморское яство";
      card__head2.style.color = "#666666";
    });
  } else {
    document.getElementById("card2").addEventListener("mouseover", () => {
      card__head2.textContent = "Сказочное заморское яство";
      card__head2.style.color = "#666666";
    });
    
    document.getElementById("card2").addEventListener("mouseout", () => {
      card__head2.textContent = "Сказочное заморское яство";
      card__head2.style.color = "#666666";
    });
  }
}


link2.onclick = function(e) {
  e.preventDefault();

  tagline2.classList.toggle('selected');
  card2.classList.toggle('selected');
  weight2.classList.toggle('selected');
  card__head2.classList.toggle('selected');
  taglineInvisible2.classList.toggle('selected');

  if(card2.classList.contains('selected')){
    document.getElementById("card2").addEventListener("mouseover", () => {
      card__head2.textContent = "Котэ не одобряет?";
      card__head2.style.color = "#D91667";
    });
    
    document.getElementById("card2").addEventListener("mouseout", () => {
      card__head2.textContent = "Сказочное заморское яство";
      card__head2.style.color = "#666666";
    });
  } else {
    document.getElementById("card2").addEventListener("mouseover", () => {
      card__head2.textContent = "Сказочное заморское яство";
      card__head2.style.color = "#666666";
    });
    
    document.getElementById("card2").addEventListener("mouseout", () => {
      card__head2.textContent = "Сказочное заморское яство";
      card__head2.style.color = "#666666";
    });
  }
}