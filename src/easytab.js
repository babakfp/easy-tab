class EasyTab
{
	/**
	 * Class constructor will receive the injections as parameters.
	 */
	constructor (container, activeIndex = 1)
	{
		this.container = container
		this.activeIndex = activeIndex - 1

		this.containerAsElement
		this.tabsAsElementList
		this.panelsAsElementList

		this.itemsLength

		// Log an console error if the first argument of EasyTab class were missing
		if (!this.container) {
			console.error(`The first argument of EasyTab class is missing!`)
			return
		}

		// Get DOM Element from query selector
		if (typeof this.container === 'string') {
			this.containerAsElement = document.querySelector(this.container)
		} else {
			this.containerAsElement = this.container
		}

		// Add a default class name to container element
		this.containerAsElement.classList.add('easytab')

		// Get tabs and panels as DOM element
		this.tabsAsElementList = this.containerAsElement.querySelectorAll('.easytab__tab')
		this.panelsAsElementList = this.containerAsElement.querySelectorAll('.easytab__panel')

		// Check is tabs and panels available
		if (this.tabsAsElementList.length === 0) {
			console.error(`No tabs (.easytab__tab) found in EasyTab!`)
			return
		}
		if (this.panelsAsElementList.length === 0) {
			console.error(`No panels (.easytab__panel) found in EasyTab!`)
			return
		}
		
		// Check is tabs and panels length is the same
		if (this.tabsAsElementList.length !== this.panelsAsElementList.length) {
			console.error(`The length of tabs and panels in EasyTab need to be equal!`)
			return
		}

		// Set items length. Just to make it simple
		this.itemsLength = this.tabsAsElementList.length

		// Add `active` class to selected tab and panel index
		this.tabsAsElementList[this.activeIndex].classList.add('active')
    this.panelsAsElementList[this.activeIndex].classList.add('active')

		// Loop
		for (let i = 0; i < this.itemsLength; i++) {
			let tab = this.tabsAsElementList[i]
			let panel = this.panelsAsElementList[i]
	
			// each tab clicked
			tab.addEventListener('click', _=> {

				// To not readd classes if clicking on active tab
				if (tab.classList.contains('active')) {
					return
				}
	
				// this will remove "active" class from tabs and contents
				for (let i = 0; i < this.itemsLength; i++) {
					this.tabsAsElementList[i].classList.remove('active')
					this.panelsAsElementList[i].classList.remove('active')
				}
	
				// add class "active" to clicked tab
				tab.classList.add('active')
				// add class "active" to clicked tab panel
				panel.classList.add('active')
			})
		}

	}
	
}
