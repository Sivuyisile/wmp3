$(document).ready(function() {

    var background,foreground1,header1,p1,navBar,selectBox,foregroundVideo,searchBar,logoImage,toggleSlider,shoppingNavCart,bluePill,parallex,emP,costOfItems,coutureImages,addToCart;
    
    
    background=$(body).css("background-color", "#F5F5F5"); 
        rgb:(245,245,245);
        foreground1 = $("#foreground-container img"); //selecting images from a specific ocntainer...assuming we have a container with ID 'foreground-container'

        foreground1.eq(0).replaceWith('video src="images/foreground_video.mp4" controls></video'); 
        //.eg(0) = first item on list
        //.replaceWith() = replaces it with a new '<video>' element
        //proper HTML tagging for a video tag 

        //added newly (Siv)
        $(toggleSlider).on("click", function(e) {
            e.preventDefault();
            //code to handle the click goes here
        })

        //newly added (Siv)
        navBar = $("#navBar"); //This selects the full '<ul id="navBar">...</ul>' element
        selectBox = $("#selectBox");
        searchBar = $("#searchBar");        //children inside must be individually
        logoImage = $("#logoImage");        //selected or have classes/IDs assigned 
        toggleSlider = $("toggleSlider");   //to them
        shoppingNavCart = $("shoppingNavCart");
        //assuming Themba has the same 'id' attributes in HTML

        /*          [modified/replaced by the bove block]
        navBar=$(ul#navBar).class(navBar).children(selectBox,searchBar,logoImage,toggleSlider,shoppingNavBar);
        header1=$(h1).addclass("font-Family", "Helvetica");
        p1=$(p1).class(fontFamily:helvetica);
        */
        //newly added (Siv):
        $("h1").css("font-family", "Helvetica");    //styling the header & paragraph
        $("p").css("font-family", "Helvetica"); 
        /*
            "h1" selects all headers
            "p" selects all paragraph tags
            .css("font-family", "Helvetica") sets the font
        */

            /*
        parallex=$(document#body).hidden()on(.scrollRight,function(e){.fadein(100ms).slidedown()  
        });
            */
           //newly added (Siv):
           // selecting the parallax animation
           parallax = $("#parallax-section");
        
           //instead of "scrollRight", we listen for normal page scroll
           $(window).on("scroll", function() {  //listens for any scroll

            //checks how far a user has scrolled:
            if ($(this).scrollTop() > 100) {         //we'll adjust 100 to whichever 
                parallax.fadeIn(400).slideDown(400); //scroll distance we want

                /*
                    .fadeIn(400) slowly shows the element over 400ms
                    .slideDown(400) slides it down after fading
                */
            }
           });

           //newly added (bonus)
           window.addEventListener("scroll", function() {
            const parallaxSection = this.document.getElementById("parallax-section");
            const scrollPosition = this.window.pageYOffset;

            //we're now moving the background position slightly slower than the scrolling
            parallaxSection.style.backgroundPositionY = (scrollPosition * 0.5) + "px";      //ohh so multiplying the movement by .5 - moves half as fast
           })
                    /*
           //THIS IS A SMOOTHER PARALLAX (OPTIONAL BONUS)
           //if we want it to be smoother, we must wap it in a 'requestAnimationFrame' for better performance:
           let lastScrollTop = 0;

           function parallaxScroll() {
            const parallaxSection = document.getElementById("parallax-section");
            const scrollPosition = window.pageYOffset;

            if (Math.abs(scrollPosition - lastScrollTop) > 1) { //reduce unnecessary calls
                parallaxSection.style.backgroundPositionY = (scrollPosition * 0.5) + "px";
                lastScrollTop = scrollPosition;
            }
            requestAnimationFrame(parallaxScroll);
           };
           parallaxScroll();
                    */

        //  js for the cart button 
        let cartCount = 0;      //tracks how many items are added     
        //. before cart-button because it's a class
        const cartButtons = document.querySelectorAll(".cart-button");
        cartButtons.forEach(button=>{button.addEventListener("click",cartClick);
            //the above assuming Themba's buttons are inside a '.cart' class

            
        });

    function cartClick() {
        let button=this;
        button.classList.add('clicked');
        //Siv: we can add more actions here such as updating the cart count
        cartCount++;
        updateCartDisplay();
        console.log("Item added to cart!"); //show feedback to user

        //everytime a cart button is clicked, add 1 to 'cartCount' and call 'updateCartDisplay()'.
    }  

    function updateCartDisplay() {
        $("#shoppingNavCart").text(cartCount);

        //assuming '#shoppingNavCart' is where you show the number of items in the cart
        //otherwise we can create a <span> or <div> to display the number
    }

    //optional bonus (Siv):
    //if we want dbclick (double-click) to remove an item
    cartButtons.forEach(button => {
        button.addEventListener("dbclick", removeFromCart);
    });

    function removeFromCart(){
        if (cartCount > 0) {
            cartCount--;
        }
        updateCartDisplay();
    } //bonus ends here     //double-clicking reduces the crat count but never to negative


            coutureImages=$(li#wrapperSpanStyle).class(flex-wrapper:table).append(emP,costOfItems,addToCart);
            emP = "";
            emp=<p>+ informationOfProduct +</p>;
            informationOfProduct=$(emp).text();
            costOfItems=$(costOfItems).isNumeric().data(price);
            coutureImages=$(li#wrapperSpanStyle).each()on(.click,function(e){document. 
                getElementByID(wrapperSpanStyle).append(#body)
             e.target||e.src.element;
              var embedImg=document.getElementByID(wrapperSpanStyle).append(#body);
              document.innerhtml=$(#body:not(embedImg)).blur();
          });  
            addToCart=$(addToCart).each().class(fas-fa hopping cart plus)on(.click slideDown,function(e){e.target||e.scrElement;
                .addclass(fas-fa shopping cart)
            })
        updateCount();
        },false;
    e.preventDefault();


    //line 73 function for cart clicks
        /*
    updateCount(e){
        e.target||e.srcElement;
        shoppingNavCart=i,i!=0;i++function(e){
            $(addToCart)on.click
        }else{$(addToCart)on.dbclick,function(e){shopping-=i;}}
    };
    var quantity=i,i=o;functiom(){
        for .each()on(click($add to cart)).getParentAttr(wrapperSpanStyle).class(flex-wrapper,img) && i++;
        */
        
        function(){
    document.innerhtml=elementSetAttrById(wrapperSpanStyle).children(imformatiionOfProduct).table data();
    document.innerhtml=elementSetAttrById(quantity).table data();
    document.innerhtml=elementSetAttrById(wrapperSpanStyle).children(costOfItem).table data(price);
    document.innerhtml=elementSetAttrById(#totalSum).table data(price);
     }else
     { 
        $(addToCart).each(function() {
            $(this).parent().attr("id", "wrapperSpanStyle");
        })
        //for .each()on(dbclick($add to cart)).removeParentAttr(wrapperSpanStyle).class(flex-wrapper,img) && i--;

        function(){
        document.innerhtml=elementRemoveAttrById(wrapperSpanStyle).children(imformatiionOfProduct).table data();
        document.innerhtml=elementRemoveAttrById(quantity).table data();
        document.innerhtml=elementRemoveAttrById(wrapperSpanStyle).children(costOfItem).table data(price);
        document.innerhtml=elementRemoveAttrById(#totalSum).table data(price);
       }};
       
    var play=$(play:button).class(ai ai play);

    //newly added (Siv):
    //select the video element
    const video = document.getElementById("foregroundVideo");
    //select all control buttons
    const videoControlButtons = document.querySelectorAll(".video-control");
    //attach event listeners
    videoControlButtons.forEach(button => {
        button.addEventListener("click", handleVideoControl);
    });

    function handleVideoControl(event) {
        event.preventDefault();

        const target = event.target;
        const action = target.getAttribute('data-state');

        switch(action) {
            case "play":
                video.play();
                break;
            case "pause":       //not sure if I should add this pause action
                video.pause();
                break;
            case "stop":
                video.pause();
                video.currentTime = 0;  //reset to beginning
                break;
            case "soundOn":
                video.muted = false;
                break;
            default:
                console.log("unknown action: " + action);
        }
    }

        /*
    type=e.type;
    e.type=$(toggleSlider)on(.click,function(e){
    videoControls(e);
    audioControls(e);
    },false);
    function videoControls(e){
    target=e.target||event.scrElement;
    e.preventDefalt();
    switch(target.getAttr(data-state)){
        case "play":play(target);
        break;
        case"stop":stop(target);
        break;
        case "soundOn":soundOn(target);
        break;
        case "soundOff":soundOff(target);
        break;
    }
    };
       */

    function play(target) {target.setAttr(data-state;play);
    target.textContent="play";
    };
    function stop(target) {target.setAttr(data-state;stop);
    target.textContent="play";
    };function sounOn(target) {target.setAttr(data-state;sounOn);
    target.textContent="soundOn";
    };
    function soundOff(target) {target.setAttr(data-state;soundOff);
    target.textContent="soundOff";
    }; 
    
    //newly added (Siv):
    const footerButtons = document.querySelectorAll(".footer-button");

    footerButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const link = this.getAttribute("data-link");
            window.location.href = link;       //navigate to page
        });      //when the user clicks, it will redirect to the correct page
    });

/*
    footer=$(li:contain(option value)).innerHTML();
    var this=$(this);
    footer=$(document).appendchildren(services.html,follow us.html);
    footer=$(this).class(a:button);
    this=$(this).each()on(.click,function(e){
        $(document).unload()});
*/

    selectbox=$(ul:selectBox).chilren(hom latest,events.html,registration.html,contactUS.html);
    var this=$(this).each()on(.click,function(e){
        $(document).unload()});
    logoImage=$(img:contain(logoImage)).class(img)
    var feedback=('');
    
    //newly added (Siv);
    //we are search handling here:
    const searchForm = document.getElementById("searchForm");
    const searchBar = document.getElementById("searchBar");
    const searchFeedback = document.getElementById("searchFeedback");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();     //prevent page reload

        const query = searchBar.value.trim();   //get the input value

        if (query === "") {
            searchFeedback.textContent = "Unable to find what you were looking for...please try again!";
        }
        else {
            searchFeedback.textContent = 'Searching for ${query}"' //pretend we're fetching results (playing pretend for now...)

            //WE SHOULD ADD REAL SEARCH LOGIC HERE
        }
    });

        /*
    searchBar=$(searchBar:input).text().val(),fuction(e){
        e.target||e.scrElement;
        e.type=$(searchBar:input)on(.submit,getAttr(){
            e.preventDefault();
        }else{
            feedback=$(document).show("Unable to find what you are looking for....do try again")
        })
    }
        */

});