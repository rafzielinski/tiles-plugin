document.addEventListener("DOMContentLoaded", function(event) {
  const buttons = document.getElementsByClassName('tf-item');

  const handleTileClick = e => {
    const item = e.target,
          top = item.getElementsByClassName('tf-item_top')[0],
          bottom = item.getElementsByClassName('tf-item_bottom')[0];

    // console.log('e :', e);
    // console.log('item :', item);
    // console.log('top :', top);
    // console.log('bottom :', bottom);

    for (var i = 0; i < buttons.length ; i++) {
      buttons[i].getElementsByClassName('tf-item_bottom')[0].classList.remove("tf-item_bottom--open");
    }

    bottom.classList.add("tf-item_bottom--open");
  }


  for (var i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', function (e) {
      handleTileClick(e)
    });
  }
});