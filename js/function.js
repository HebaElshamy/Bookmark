var siteNameInp =document.getElementById("siteName");
var siteUrlInp =document.getElementById("siteUrl");
var bookData =document.getElementById("bookData");



if(localStorage.getItem('bookMarkData') != null)
{
    var bookmarkList=JSON.parse(localStorage.getItem('bookMarkData'));//string to array of object
    
    displayBookMark();
}
else
{
    var bookmarkList=[]; //new array for new url
    
}




function submitValue()
{
 if (checkName()== true && checkUrl()== true)   {
var full=new Date();
var day=full.getDate();
var month=full.getMonth()+1;
var year=full.getFullYear();
var hours=full.getHours();
var minutes=full.getMinutes();
console.log(day);
console.log(month);
console.log(year);
var bookmark =
 {
   siteName : siteNameInp.value ,
   siteUrl  : siteUrlInp.value ,  
   siteDay  : day ,
   siteMonth: month ,
   siteYear : year ,
   siteHours: hours,
   siteMinutes: minutes,
 };

 console.log(bookmark);
bookmarkList.push(bookmark);
 localStorage.setItem('bookMarkData',JSON.stringify(bookmarkList));
 nameError.style.display ="none";
 urlError.style.display ="none";


 displayBookMark();
 clearForm();
}
}

// }
function clearForm()
{
    siteNameInp.value = "" ;
    siteUrlInp.value = "" ;
}

// display bookmarks
function displayBookMark()
{
    var book = '' ;
    for (var i =0 ; i< bookmarkList.length ; i++)
    {
        book += `
       
         <div class="oneRow row">
         
        <h3>${bookmarkList[i].siteName}</h3>
        <span>${bookmarkList[i].siteDay}/${bookmarkList[i].siteMonth}/${bookmarkList[i].siteYear}-${bookmarkList[i].siteHours}:${bookmarkList[i].siteMinutes}</span>
        <a href="${bookmarkList[i].siteUrl}" class="btn btn-primary mr-2 ml-2" target="_blank"><i class="fas fa-walking"></i></a>
        <button class="btn btn-danger" onclick="deleteBookMark(${i})"><i class="fas fa-trash"></i></button>
    </div>`
    }
    bookData.innerHTML=book;
    
}
function deleteBookMark(indexOfDelete)
{
    // console.log(indexOfDelete); //test
    bookmarkList.splice(indexOfDelete,1);
    localStorage.setItem('bookMarkData',JSON.stringify(bookmarkList));
    displayBookMark();


}


//check input
function checkName()
{
    if (siteNameInp.value == "")
    {
        showMassage("nameInp")
    }
    else if (checkAlreadName()== false)
    {
        showMassage("nameExist");
          
    }
    
    else 
    {
    //    submitValue();
    return true ;
    }

}
function checkUrl()
{
    if (siteUrlInp.value == "")
    {
        showMassage("urlInp")
    }
    else if (checkAlreadUrl() == false)
    {
        showMassage("urlExist");
          
    }
    
    else 
    {
        return true ;
    }

}




function checkAlreadName()
{
    for(var i=0; i< bookmarkList.length ;i++)
    {
        if (bookmarkList[i].siteName == siteNameInp.value )
        {
            
            // alert(hi);
            return false;
        }
    }

}
function checkAlreadUrl()
{
    for(var i=0; i< bookmarkList.length ;i++)
    {
        if (bookmarkList[i].siteUrl == siteUrlInp.value )
        {
            
            // alert(hi);
            return false;
        }
    }

}

function showMassage(siteReq)
{
 if(siteReq == "nameInp")
 {
    nameError.style.display ="block";
    
    nameError.innerHTML= "Name is required"
 }
 if(siteReq == "urlInp")
 {
    urlError.style.display ="block";
    urlError.innerHTML="Url Field is required" 
 }
 if(siteReq == "bothInp")

 {
    nameError.style.display ="block";
    urlError.style.display ="block";
    nameError.innerHTML= "Name is required"
    urlError.innerHTML="Url Field is required" 
 }
 if(siteReq == "nameExist")
 {
    nameError.style.display ="block";
    
    nameError.innerHTML= "this name already exist"
 }
 if(siteReq == "urlExist")
 {
    urlError.style.display ="block";
    urlError.innerHTML="this url already exist"
 }
}






