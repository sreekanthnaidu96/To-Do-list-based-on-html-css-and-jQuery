$(document).ready(function(){
    $("#inp").focus()
    $("#but1").on("click",function(){
        let hi = $("input").val();
        if(hi ==''){
            alert("Enter Something...")
        }else{
            let myelement = $("<li></li>").text(hi);
            $(myelement).append("<button class='mybut2'> X </button>");
            $("#mylist").append(myelement);
            $("input").val('');
            $(".mybut2").on("click",function(){
                $(this).parent().remove();
            });
        }
    });
});