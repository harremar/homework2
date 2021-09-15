//.ready means that all the data is read...doesn't mean page is fully loaded
//.load means page is fully loaded. Everything is showing

function showVariable(newName){

    console.log("newName app.js 6 " + newName)
}

function showFooterVariable(newFooterName){

    console.log("newFooterName app.js 6 " + newFooterName)
}



function setBindings(){
    $("nav a").click(function(e){
        let btnID = e.currentTarget.id;
        // console.log(btnID);
        MODEL.getMyVariable(btnID, showVariable);
    })

    $("footer a").click(function(e){
        let btnID = e.currentTarget.id;
        MODEL.getMyFooterVariable(btnID, showFooterVariable);
    })
}
$(document).ready(function(){
    console.log("ready");
    setBindings();
})