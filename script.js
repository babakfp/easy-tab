// Main function
const easytab = (uniqueContainerId) => {
    
    // storing, main container that user creates with easytab() function, inside easytabContainer Variable
    let easytabContainer = document.getElementById(uniqueContainerId)

    // tab
    let tabBox = easytabContainer.querySelector('.tab-box')
    let tabCount = tabBox.childElementCount
    let tabArray = tabBox.querySelectorAll('.tab')

    // content
    let contentBox = easytabContainer.querySelector('.content-box')
    let contentCount = contentBox.childElementCount
    let contentArray = contentBox.querySelectorAll('.content')


    for (let i = 0; i < tabCount; i++) {

        // storing each tab in 
        let currentTab = tabArray[i]
        // Current Cotent
        let currentContent = contentArray[i]

        // adding unique id to each tab and content
        currentTab.id = currentTab.className + i
        currentContent.id = currentContent.className + i

        // adding class [current]  to first tab and content to make them visible
        tabArray[0].classList.add('current')
        contentArray[0].classList.add('current')

        // white currentTab clicked
        currentTab.addEventListener('click', () => {

            // hide all content after each click
            for (let i2 = 0; i2 < contentCount; i2++) {
                tabArray[i2].classList.remove('current')
                contentArray[i2].classList.remove('current')
            }

            // Show the content that his tab are click'ed
            currentTab.classList.add('current')
            currentContent.classList.add('current')
   
        })
    }
}
