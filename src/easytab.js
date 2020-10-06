const easyTab = function(container, active){
  
  // tabs
  let tabs = container.querySelectorAll('[easytab-tab]')
  let tabsLength = tabs.length
  
  // contents
  let contents = container.querySelectorAll('[easytab-content]')

  // activate first tab
  if (active == undefined) {
    tabs[0].classList.add('active')
    contents[0].classList.add('active')

  // activate tab that active prop contains
  } else if (typeof active) {
    tabs[active-1].classList.add('active')
    contents[active-1].classList.add('active')
  }

  for (let i = 0; i < tabsLength; i++) {
    let tab = tabs[i]
    let content = contents[i]

    // each tab clicked
    tab.addEventListener('click', _=> {

      // this will remove "active" class from tabs and contents
      for (let i = 0; i < tabsLength; i++) {
        tabs[i].classList.remove('active')
        contents[i].classList.remove('active')
      }

      // add class "active" to clicked tab
      tab.classList.add('active')
      // add class "active" to clicked tab content
      content.classList.add('active')
    })
  }

}