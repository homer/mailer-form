

$(function(){
    // not enough
    // var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    // better version
    // var pattern = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/i;
    // best I have found so far
    var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var aTextbox = new Array();
    var aMail = new Array();
    var $mailsInput = $("#mailsInput");

    $mailsInput.tagsInput({
        defaultText:'',
        width:'335px'
    });

    $("#mailer").on("click",function(){
        $(".mailer-canvas").removeClass("is-hidden");
    });

    $("#form-submit").on("click",function(e){
        e.preventDefault();
        makeMailsArray($mailsInput.val());
        inputMailVals(aMail);
        testEmailsFromConsoleLog();
    });
    function pushEmails(str) {
        aTemp = str.match(pattern);
        if(aTemp != null){
            aMail.push(aTemp[0]);
        }
    }
    function makeMailsArray(mailString){
        aTextbox = mailString.split(",");
        $.each(aTextbox,function(i,val) {
            pushEmails(val);
        });
    }
    function inputMailVals(mailsArray) {
        var emailsVal = mailsArray.join();
        $mailsInput.val(emailsVal);
    }
    function testEmailsFromConsoleLog(){
        console.log("aTextbox array:");
        console.log(aTextbox);
        console.log("aMail array:");
        console.log(aMail);
        console.log("input field val:");
        console.log($mailsInput.val());
    }
});