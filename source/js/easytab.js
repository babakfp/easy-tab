
// Start -> Turn on the music ~~(^_^)~~

const easytab = ( ContainerID, active ) => {
    
    // Get ContainerID - Tab navigation Unique container ID
    let easytabContainer = document.getElementById(ContainerID)


    // Tab's wrapper - All Tab's are located inside this class
    let tabList = easytabContainer.querySelector('.easytab-tab-list')

    // Get all Tab's avalible inside tabList
    let tabArray = tabList.querySelectorAll('.easytab-tab')

    // Number of avalible Tab's
    let tabLength = tabArray.length
    

    // Content's wrapper - All Content's are located inside this class
    let contentList = easytabContainer.querySelector('.easytab-content-list')
    
    // Get all Content's avalible inside contentList
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
        
        // If type of 'active' is Number - Active index = 'active' value
        else if ( typeof(active) ) {

            tabArray[active - 1].classList.add('active')

            contentArray[active - 1].classList.add('active')

        }
        

        // Event -> When each Tab clicked
        tab.addEventListener('click', () => {

            // Remove 'active' class from all Tab's & Content's. Make All active Tab's & Content's, unactive
            for ( let i = 0; i < tabLength; i++ ) {

                tabArray[i].classList.remove('active')

                contentArray[i].classList.remove('active')

            }

            // Add class 'active' to target (clicked Tab). Make target active
            tab.classList.add('active')

            // Add class 'active' to target (clicked Content). Make target active
            content.classList.add('active')
   
        })


    }


}
