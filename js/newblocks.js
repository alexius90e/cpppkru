const availableProgramsBlockEls = document.querySelectorAll('.available-programs__block');

availableProgramsBlockEls.forEach((block) => {
  const listItemsLimit = 12;
  const listItems = block.querySelectorAll('.available-programs__list-item');
  const list = block.querySelector('.available-programs__list');
  const moreEl = block.querySelector('.available-programs__more');

  if (listItems.length > listItemsLimit && moreEl) {
    moreEl.classList.remove('hidden');
  }

  block.addEventListener('click', (event) => {
    const isMoreButton = event.target.classList.contains('available-programs__more-button');

    if (isMoreButton && list) {
      const isActive = event.target.classList.contains('active');
      event.target.innerText = `${isActive ? 'Показать' : 'Скрыть'} все направления`;
      if (isActive) {
        list.classList.remove('active');
        event.target.classList.remove('active');
      } else {
        list.classList.add('active');
        event.target.classList.add('active');
      }
    }
  });
});

///

const docSamplesSwiperEl = document.querySelector('.doc-samples .swiper');

if (docSamplesSwiperEl) {
  const docSamplesSwiper = new Swiper(docSamplesSwiperEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

Fancybox.bind('[data-fancybox="doc-gallery"]');

///

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((faqItem) => {
  faqItem.addEventListener('click', (event) => {
    const panel = event.currentTarget.querySelector('.faq__item-answer');
    const parentFaqItems = event.currentTarget.parentNode.querySelectorAll('.faq__item');
    const isQuestion = event.target.classList.contains('faq__item-question');

    if (isQuestion) {
      event.currentTarget.classList.toggle('active');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    }

    parentFaqItems.forEach((item) => {
      if (item !== event.currentTarget && item.classList.contains('active')) {
        item.classList.remove('active');
        const itemPanel = item.querySelector('.faq__item-answer');
        itemPanel.style.maxHeight = null;
      }
    });
  });
});
