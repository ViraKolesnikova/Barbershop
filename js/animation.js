(() => {
  const animItems = document.querySelectorAll('.anim-item');

  if (animItems.length > 0) {
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    function animOnScroll() {
      // console.log('number elem = ' + animItems.length);
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffSet = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffSet - animItemPoint &&
          pageYOffset < animItemOffSet + animItemHeight
        ) {
          animItem.classList.add('active-anim');
          console.log('add');
        } else {
          if (!animItem.classList.contains('anim-no-hide')) {
            animItem.classList.remove('active-anim');
            console.log('remove');
          }
        }
      }
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);

    window.addEventListener('scroll', animOnScroll);
    animOnScroll();
  }
})();