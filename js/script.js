;(function () {
  'use strict'

  const get = (target) => document.querySelector(target)
  const getAll = (target) => document.querySelectorAll(target)

  const $search = get('#search')
  const $list = getAll('.contents.list figure')
  const $searchButton = get('.btn_search')

  const init = () => {
    $search.addEventListener('keyup', search)
    $searchButton.addEventListener('click', search)
  }

  const search = () => {
    let searchText = $search.value.toLowerCase()
    for (let i = 0; i < $list.length; i++) {
      const $target = $list[i].querySelector('strong')
      const text = $target.textContent.toLowerCase()
      if(-1 < text.indexOf(searchText)) {
        $list[i].style.display = 'flex'
      } else {
        $list[i].style.display = 'none'
      }
    }
  }

  init()
})()