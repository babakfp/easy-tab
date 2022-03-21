class EasyTab
{constructor(container,activeIndex=1){this.container=container
this.activeIndex=activeIndex-1
this.containerAsElement
this.tabsAsElementList
this.panelsAsElementList
this.itemsLength
if(!this.container){console.error(`The first argument of EasyTab class is missing!`)
return}
if(typeof this.container==='string'){this.containerAsElement=document.querySelector(this.container)}else{this.containerAsElement=this.container}
this.containerAsElement.classList.add('easytab')
this.tabsAsElementList=this.containerAsElement.querySelectorAll('.easytab__tab')
this.panelsAsElementList=this.containerAsElement.querySelectorAll('.easytab__panel')
if(this.tabsAsElementList.length===0){console.error(`No tabs (.easytab__tab) found in EasyTab!`)
return}
if(this.panelsAsElementList.length===0){console.error(`No panels (.easytab__panel) found in EasyTab!`)
return}
if(this.tabsAsElementList.length!==this.panelsAsElementList.length){console.error(`The length of tabs and panels in EasyTab need to be equal!`)
return}
this.itemsLength=this.tabsAsElementList.length
this.tabsAsElementList[this.activeIndex].classList.add('active')
this.panelsAsElementList[this.activeIndex].classList.add('active')
for(let i=0;i<this.itemsLength;i++){let tab=this.tabsAsElementList[i]
let panel=this.panelsAsElementList[i]
tab.addEventListener('click',_=>{if(tab.classList.contains('active')){return}
for(let i=0;i<this.itemsLength;i++){this.tabsAsElementList[i].classList.remove('active')
this.panelsAsElementList[i].classList.remove('active')}
tab.classList.add('active')
panel.classList.add('active')})}}}