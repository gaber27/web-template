// Check if There is color in local storage
let mainColors = localStorage.getItem("color_option");
// Check if There is backgroundItem in local storage
let backgroundChangeLocal = localStorage.getItem("background_option");
let backgroundOptions = true ;


if(mainColors != null)
{
//    console.log("Local Storage is not empty");
document.documentElement.style.setProperty('--main--color',mainColors);

// Check For Active class
document.querySelectorAll(".colors-list li").forEach(element => 
    {
        element.classList.remove("active");

            // add active color to local storage

            if (element.dataset.color === mainColors)
            {
                element.classList.add('active');
            }
    }) ;


}

// Check Ransom bakground is emty 
if(backgroundChangeLocal != null)
{
    console.log(backgroundChangeLocal);
    console.log(typeof(backgroundChangeLocal));

    if(backgroundChangeLocal === 'true')
    {
        backgroundOptions === true;

    }else
    {
        backgroundOptions === false;


    }
}



//  Toggle in fa-spin 
document.querySelector(".toggle-settings .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin");
    // Toggle To Open class
    setTimeout(function(){
    document.querySelector(".settings-box").classList.toggle('open')
}, 200
    );
}

// Switch Colors

const colorLi = document.querySelectorAll(".colors-list li");

colorLi.forEach(li=>
    {
        li.addEventListener('click',(e)=>
        {

            // set color for site 
            document.documentElement.style.setProperty('--main--color',e.target.dataset.color);

            // set color on local storage in site 
            localStorage.setItem("color_option",e.target.dataset.color);

            // Remove Active clas form all child
            e.target.parentElement.querySelectorAll(".active").forEach(element => 
                {
                    element.classList.remove("active");
                }) ;

                // Add Active Class on Self
                e.target.classList.add("active")

        })
    })
// Select Landing Page Element

let landingPage = document.querySelector(".landing-page");

// Get Array of Images

let imgArray = ['1.jpg','2.jpg','3.webp','5.jpg'];


// Random background option 


// Var to control interval

let backgroundInterval ;


function imagesRandom(){

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.checked =localStorage.getItem("background_option") == "true" ?true :false;
    
    if(checkbox.checked == null)
    {
    backgroundInterval =  setInterval(()=>
        {
            let randomNum =Math.floor(Math.random() * imgArray.length );
            // Change Background
        landingPage.style.backgroundImage = 'url("images/' + imgArray[randomNum]+ '")';

        }, 3000 );

    }

        checkbox.addEventListener('change', function () {
            
        if (checkbox.checked) {
            backgroundOption=true
            console.log('Checked');
            localStorage.setItem('background_option', true);
            backgroundInterval =  setInterval(()=>
            {
                let randomNum =Math.floor(Math.random() * imgArray.length );
                // Change Background
            landingPage.style.backgroundImage = 'url("images/' + imgArray[randomNum]+ '")';
    
            }, 3000 );
        } else {
            // do that
            backgroundOptions =false;
            localStorage.setItem('background_option', false);
            clearInterval(backgroundInterval);
            checkbox.checked =backgroundOptions
        
            console.log('Not checked'); 
}
    });
});
}
if(localStorage.getItem("background_option") == "true" ||  localStorage.getItem("background_option") == null)
{
    backgroundInterval =  setInterval(()=>
    {
        let randomNum =Math.floor(Math.random() * imgArray.length );
        // Change Background
    landingPage.style.backgroundImage = 'url("images/' + imgArray[randomNum]+ '")';

    }, 3000 );
}

imagesRandom();

 // Select Skill Selector

let ourSkills = document.querySelector(".skills");

window.onscroll = function ()
{
    // Skills offset top

    let SkillsOffSetTop = ourSkills.offsetTop;

    // Skills outer Height
let SkillsOuterHeight = ourSkills.offsetHeight ; 

   // The windows Hegith
let windowHeight = this.innerHeight;

   //window SCROLL TOP
let windowScrollTop = Math.ceil(this.pageYOffset);

if(windowScrollTop > ((SkillsOffSetTop + SkillsOuterHeight) - windowHeight- 350))
{
    this.console.log("reach");
let allSkills = document.querySelectorAll(".skill-box .Myskill-progress span");
    allSkills.forEach(skill => 
        {
            skill.style.width = skill.dataset.progress;
        });

}
}

// Create pop with the images

let ourGallery = document.querySelectorAll(".gellery img");

ourGallery.forEach(img =>
    { 
        img.addEventListener('click',(e)=>{
        
        // Create Overlay Element 
        let overlay = document.createElement("div");

        // Add Class OverLay

        overlay.className = 'pop-overlay';
        
        //Add to body

        document.body.appendChild(overlay);

        // Create Special pop for images
        let popupBox = document.createElement("div");

        // Add Class To PopupBox

        popupBox.className = 'popup-box';

        
        if(img.alt !== null){

            // Create Heading
            let imgheading =  document.createElement("h3") ;
    
            // Create Text For Heading
    
            let txt = document.createTextNode(img.alt);
    
            // Add The text To heading
    
            imgheading.appendChild(txt);
            
            // Add the text to popupbox
            popupBox.appendChild(imgheading);
    
            }

        // create the imaegs
        let popupImage = document.createElement('img');

        // Spical Image 
        popupImage.src= img.src;

        // Add Image To PopupBox

        popupBox.appendChild(popupImage);

        // Add popup box To body

        document.body.appendChild(popupBox);


        // Create Close Span

        let closeButton = document.createElement('span');

        // Create the close button text
        
        let closeButtonText = document.createTextNode("X");

        // add text to close Button 

        closeButton.appendChild(closeButtonText);

        // Add class to close Button

        closeButton.className = 'close-button';

        // Add close Button to popupbox;

        popupBox.appendChild(closeButton);



    });
    });


    // Close popup
    document.addEventListener("click",function(e)
    {
        if(e.target.className =='close-button')
        {
         // remove popup
        e.target.parentNode.remove();

        // remove Overlay
        document.querySelector(".pop-overlay").remove();
        }
    });