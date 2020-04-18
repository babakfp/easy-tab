
// Start -> Turn on the music

const easytab = ( ContainerID, active ) => {
    
    // storing, main container that user creates with easytab() function, inside easytabContainer Variable
    let easytabContainer = document.getElementById(ContainerID)


    // Tab's wrapper
    let tabList = easytabContainer.querySelector('.easyatb-tab-list')

    // Get all Tab's (from Tab's wrapper)
    let tabArray = tabList.querySelectorAll('.easyatb-tab')


    // Number of avalible Tab's
    let tabLength = tabArray.length

    // Content's wrapper
    let contentList = easytabContainer.querySelector('.easyatb-content-list')
    
    // Get all Content's (from Content's wrapper)
    let contentArray = contentList.querySelectorAll('.easytab-content')


    for ( let i = 0; i < tabLength; i++ ) {

        // Each Tab 
        let tab = tabArray[i]

        // Each Content
        let content = contentArray[i]


        // Active index = 0
        if ( active == false || active == null ) {

            tabArray[0].classList.add('active')

            contentArray[0].classList.add('active')
            
        }
        
        // If type is Number - Active index = Number
        else if ( typeof(active) ) {

            tabArray[active - 1].classList.add('active')

            contentArray[active - 1].classList.add('active')

        }
        

        // Event -> When each Tab clicked
        tab.addEventListener('click', () => {

            // Make every Tab and Content, unactive
            for ( let i = 0; i < tabLength; i++ ) {

                tabArray[i].classList.remove('active')

                contentArray[i].classList.remove('active')

            }

            // Make clicked Tab, active
            tab.classList.add('active')

            // Make clicked Tab Content, active
            content.classList.add('active')
   
        })


    }


}