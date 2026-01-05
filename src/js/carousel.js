document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.video-carousel__track');
  const cards = Array.from(document.querySelectorAll('.video-card'));
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');

  const CARD_WIDTH = 230;
  const GAP = 12;
  let current = 2; // Central video (third)

  // Creating clones for infinite scrolling
  const firstClone = cards[0].cloneNode(true);
  const lastClone = cards[cards.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, cards[0]);

  const allCards = Array.from(track.children);

  function update() {
    allCards.forEach((card, i) => {
      card.classList.remove('is-active');
      card.style.transform = 'scale(0.74)';
      card.style.opacity = '0.6';
      card.style.zIndex = '1';
    });

    const centerIndex = current + 1; // because of the clone at the beginning
    allCards[centerIndex].classList.add('is-active');
    allCards[centerIndex].style.transform = 'scale(1)';
    allCards[centerIndex].style.opacity = '1';
    allCards[centerIndex].style.zIndex = '2';

    // centering central video
    const viewportWidth = track.parentElement.offsetWidth;
    const offset = (CARD_WIDTH + GAP) * centerIndex - (viewportWidth / 2 - CARD_WIDTH / 2);
    track.style.transform = `translateX(${-offset}px)`;
  }

  function moveNext() {
    current++;
    if (current >= cards.length) current = 0;
    update();
  }

  function movePrev() {
    current--;
    if (current < 0) current = cards.length - 1;
    update();
  }

  nextBtn.addEventListener('click', moveNext);
  prevBtn.addEventListener('click', movePrev);

  update();
});
