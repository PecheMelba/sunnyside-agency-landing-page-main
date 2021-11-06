/*Media querry changed state*/
const mediaQuery = window.matchMedia('(min-width: 950px)');
let isDesktopMode = false;

function handleTabletChange(e) 
{
  // Check if the media query is true
  if (e.matches) //if viewports at least 950px wide
  { 
    isDesktopMode = true; 
  }
  else//if viewports less than 950px wide
  {     
    isDesktopMode = false;
  }
}
// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery)

document.getElementById('menu-btn').addEventListener("click", () => 
{
    document.getElementById("mobile-menu").style.display = "flex";
});

document.addEventListener("click", function(evt) 
{
    if(isDesktopMode == false)
    {
        var flyoutElement = document.getElementById('mobile-menu'),
            targetElement = evt.target;  // clicked element
        do 
        {
            if (targetElement == flyoutElement || targetElement == document.getElementById('menu-btn')) 
                return;            

            // Go up the DOM
            targetElement = targetElement.parentNode;
        } while (targetElement);

        // This is a click outside.
        document.getElementById("mobile-menu").style.display = "none";
    }
});