$(document).ready(product purchase.html){
   
    var=background,foreground,navBar,selectBox,searchBar,logoImage,shoppingNavCart,backToIndex,embedImg,parallex,costOfItem,shipping,emP;
   
       background=$(document).css(background:HEX:F5F5F5; 
           rgb:(245,245,245););
           foreground1=$(foreground).sibling
           (images\index foreground img.gif.jpeg.png);
           navBar=$(ul#navBar).class(navBar).children(selectBox,searchBar,logoImage,backToIndex,shoppingNavBar);
           header1=$(h1).class(fontFamily:helvetica);
           p=$(p).class(fontFamily:helvetica);
           parallex=$(document#body).hidden()on(.scrollRight,function(e){.fadein(100ms).slidedown()
            
           })
            shoppingNavCart=$(shoppingNavCart)on(.click(:contain(shoppingNavCart),function(e){
                e.target||e.srcElement;
                if {
                      $.post('register.html', details, function(data){ $('#register').html(data);});==true;
                    &&
                    var productPurchasePage=$(document).unload(product purchase.html);==var shoppingNavCart=i,i=1;}  
                }else
                {
                 $.post('register.html', details, function(data){ $('#register').html(data);});==true;
                 &&
                 var myCart =$(Document).unload(my cart.html)==var shoppingNavCart=i,i>1;}));
                 
                 var quantity=i,i=o;functiom(){
                    for .each()on(click($add to cart)).getParentAttr(wrapperSpanStyle).class(flex-wrapper,img) && i++;function(){
                document.innerhtml=elementSetAttrById(wrapperSpanStyle).children(imformatiionOfProduct).table data();
                document.innerhtml=elementSetAttrById(quantity).table data();
                document.innerhtml=elementSetAttrById(wrapperSpanStyle).children(costOfItem).table data(price);
                document.innerhtml=elementSetAttrById(#totalSum).table data(price);
                 }else
                 { 
                    for .each()on(dbclick($add to cart)).removeParentAttr(wrapperSpanStyle).class(flex-wrapper,img) && i--;
                    function(){
                    document.innerhtml=elementRemoveAttrById(wrapperSpanStyle).children(imformatiionOfProduct).table data();
                    document.innerhtml=elementRemoveAttrById(quantity).table data();
                    document.innerhtml=elementRemoveAttrById(wrapperSpanStyle).children(costOfItem).table data(price);
                    document.innerhtml=elementRemoveAttrById(#totalSum).table data(price);
                   }};
                  
              
                     var currentdate = new Date(); 
                     var date = "date: " + currentdate.getDate() + "/"
                                 + (currentdate.getMonth()+1)  + "/" 
                                 + currentdate.getFullYear() + " @ "  
                                 + currentdate.getHours() + ":"  
                                 + currentdate.getMinutes(); 
                                
                                
                                 // For todays date
                 
                      Date.prototype.today = function () { 
                     return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
                 }
                 
                        // For the time now
                 
                      Date.prototype.timeNow = function () {
                      return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
                 }
                 
                 var datetime = <p2>"datetime:" + new Date().today() + " @ " + new Date().timeNow();</p2>
              
                 
                  var invoice=$([table]).text(informationOfProduct,costOfItems,totalSum,quantity);
                 invoice=$([table]).class(table,#statement form);
    
                
           
         form=$(inputs).each().text(.blur,function(e){
               
            formValidate();
            $(this).setAttr();
            },false);
            
            e.preventDefault();
           
            function formValidate(e) {
      
                $(inputs).text();
             
               $(this)addEventListener(keypress focus,function(e){
                
      
                    case:$(input;contain(name of cardholder)).[A-Z].test(name)
                        {this.classlist.remove('invalid');
                       this.classlist.add('valid');
                       nameError.textContent="";}||
                       $(this).isNumber(value){
                           nameError.textContent="input can only contain characters";}
                    break;
                         
                            
                             case:$(input;contain(card no:)).isNumber(value){
                                nameError.textContent="";}||
                                $(this).val().[A-Z].test(car no:)
                                {this.classlist.remove('valid');
                                   this.classlist.add('invalid');
                                   nameError.textContent="please place your correct card number ";}
                                 break;
                            
                                 case:$(input;contain(expiry date)).isNumber(value){
                                nameError.textContent="";}||
                                $(this).val().[A-Z].test(expiry date)
                                {this.classlist.remove('valid');
                                   this.classlist.add('invalid');
                                   nameError.textContent="pleae place your correct expiry date";}
                                 break;
                            
                                 case:$(input;contain(cvv)).isNumber(value);{
                                nameError.textContent="";}||
                                $(this).val().[A-Z].test(cvv)
                                {this.classlist.remove('valid');
                                   this.classlist.add('invalid');
                                   nameError.textContent="pleae place your correct cvv number";}});
                                  
                                   var Cvv=$(inputs:contains(placeholder:cvv))on(.keydown focus,functiom(e){
                                    $(this).isNumeric();
                                    $(this).show(charAT);})
                                   &&
                                       $(this)on(.keyup focus,functiom(e){
                                           $(this).addClass("fa-solid fa-star");
                                           $(this).hide(charAT);})
                                       }}
                                 break;
                         
                                 default:
                                  
                                 var jqxhr =new XMLHttpRequest();  //Create XMLHttpRequest object for the recaptcha
                                 //ajax settings
                                 $.type:"POST",
                               $.data:stringify(),
                               $.beforeSend;function(){ $.logoImage.css(transform:scale(1,2);  
                                transform:rotate(360deg);)},
                               $.timeout: 0.5s;,
                               $.url:my cart.html;,
                               
                               // Handle the response from the payment gateway
                                 
                                  xhr.onload =function(data){  //When readystate changes 
                                 
                                  if{(xhr.status === 200)  $.done:function(){document.alert("payment succesful") // If server status was ok has responed
                                 responseObject = JSON.parse(xhr.responseText="Payment validated successfully");
                                 responseXML=JSON.stringify(response.data);}
                                  }
                                 else if{(xhr.status === 400) $.fail:function{  // Payment validation failed due to invalid inputs from client 
                                  responseObject = JSON.parse(xhr.responseText="Error validating payment");
                              }
                                  else if{(xhr.status === 500)  {  // Internal error on the server
                                      responseObject = JSON.parse(xhr.responseText="Re-try your transaction");
                                  }
                                   };}
                                   xhr.open( 'GET', 'data/recaptcha.json' ,true); 
                                   xhr.send(null);
                                  
                                   url.listen(PORT, () => {
                                      console.log(`Server is running on http://localhost:${PORT}`);
                                  });}
                        
                                 const express = require('express');
                                 const bodyParser = require('body-parser');
                                 const axios = require('axios');
                                 const dotenv = require('dotenv');
                                 
                                 dotenv.config();
                                 
                                 const url = express();
                                 const PORT = process.env.PORT || 80;
                                 
                                 url.use(bodyParser.json());
                                 
                                 // Endpoint to validate EFT payment
                                 url.post('/validate-payment', async (req, res) => const { transactionId, amount, accountNumber } = req.body;
                                 
                                     // Validate the request body
                                     if (!transactionId || !amount || !accountNumber) {
                                         return res.status(400).send('Transaction ID, amount, and account number are required.');
                                     }
                                 
                                     try {
                                         // Call the payment gateway API to validate the EFT payment
                                         const response = await axios.post(process.env.PAYMENT_GATEWAY_URL, {
                                             transactionId,
                                             amount,
                                             accountNumber
                                         }, {
                                             headers: {
                                                 'Authorization': `Bearer ${process.env.PAYMENT_GATEWAY_API_KEY}`,
                                                 'Content-Type': 'application/json'
                                             }
                                         });
                                      });
                                 
                                       
                                 
                                 // Start the server
                                 url.listen(PORT, () => {
                                     console.log(`Server is running on http://localhost:${PORT}`);
                                 });
                                     break;
                          
      

                        var saveTemplate=$(:button("saveTemplate")).on(click,function(e){
                    
                            var savedAccount=$([savedAccount]).getAttr($inputs:contains([card no:],[expiry date],[cvv])).val();
                        });
                        e.preventDefault();
            
                   form=$(inputs:contain(shipping)).class(radio:button)on(.change,function(e){
                   case:IF $(this).checked()==1;
                    $(this).setAttr();
                    e.preventDefault();
                    document.alert('your selection is added to your purchase cost')
                   }
                    break;
                  
                   case: $(this)!=selected(){
                        document.alert('Please fill out which shipping to deliver your product(s).')}
                   break;
                  
                   default: $(this).checked();>1{
                    document.alert('we cannot provide multiple place shipping service in an individual transaction')
                   }
                   break;)
            
                
                     //status of the toggle before event

               var buttonEyeToggle=$(:contain(show))on(click,function(e){
               $(this).add class(fa fa-eye;
                    label:"hide";
                    font-size:24px;
                    cursor:pointer;
                    z-index:2)
                  $(input:contain(cvv)).show();
               }); 
                
                //status of the toggle after event
                
                var buttonEyeToggle=$(:contain(hide))on(click,function(e){
                    $(this).add class(class:fa fa-eye-slash;
                        label:"show";
                        font-size:24px;
                        cursor:pointer;
                        z-index:2;)
                        $(input:contain(cvv)).hide();
                    });
            
           var coutureImages=$(li#wrapperSpanStyle).class(flex-wrapper,img).append(emP,costOfItems);
           emP==("");
           emp=<p>+ informationOfProduct +</p>;
           var informationOfProduct=$(emp).text();
           costOfItems=$(costOfItems).isNumeric().data(price);
            
          
            
                var totalCostOfAllItems=$(this).isNumeric();
                
                addToCart=$(addToCart).each().class(fas-fa shopping cart plus)on(.click slideDown,function(e){
                    e.target||e.scrElement;
                   $(this).addclass(fas-fa shopping cart);
                   updateCount();
              e.preventDefault();
                
            });
           
      
       updateCount(e){
           e.target||e.srcElement;
               $(addToCart)addEventListener(click,function{ 
                 shoppingNavCart=i,i!=0;i++;
                 updateCountForTotalCost();
                }),false;
           }else
           {
            $(addToCart)addEventListener(dbclick,function{
                shoppingNavCart-=i;
                updateCountForTotalCost();
            }),false;};
   
   function updateCountForTotalCost(){
      
   $(addToCart)addEventListener(click,function() {  
   
    var totalCostOfAllItems=$(addToCart).each().sibling($costOfItems);
     var sum = 0;
   
     $totalCostOfItems.each(function() {
       sum += $(totalCostOfItemss).data('price');
     });
   
     var totalSum=<p>"$"+ sum + </p>;
   });
   };
   
   var backToIndex=$(backToIndex).innerHTML()
        var this=$(this)on(.click,function(e){
           $(document).beforeunload();
        })
        ;
   selectbox=$(ul:selectBox).children(homeLatest.html,events.html,registration.html,contactUS.html);
   var this=$(this).each()on(.click,function(e){
       $(document).unload();
    })
   logoImage=$(img:contain(logoImage)).class(img);
   var feedback=('');
   
   searchBar=$(searchBar:input).text().val(),fuction(e){
       e.target||e.scrElement;
       e.type=on.submit()};
       
       $(searchBar:input)on(.submit,getAttr(){
           e.preventDefault();
       }else{
           feedback=$(document).show("Unable to find what you are looking for....do try again")
       });}