
 $("#messages-display").animate({
     scrollTop: $("#messages-display").height()
 })



  function addToList (item) {
    var paragraph = $("<p>")
    paragraph.append(item.username + ": " + item.text)
    $("#messages-display").append(paragraph)
  }
  $.get("http://tiy-orl-proxy.herokuapp.com/messages")
   .then(function (response) {
     var messages = response.messages
     console.log(messages)
     messages.forEach(addToList)

   })

  $("form").submit(function(event){
    event.preventDefault()
    var theName = $("#user").val()
    var theMsg = $("#msg").val()
    $.post("http://tiy-orl-proxy.herokuapp.com/messages",
    {message: {
      username: theName,
      text: theMsg


    }})
     .then(response => {
       console.log(response)
       $('input').val('')
       addToList(response.message)
     })
  })

  function refresh() {
      location.reload();
  }


  // $(document).ready(function() {
  //  $("#retrieve").click(function() {
  //    window.location.reload()
  //  }}


    // $.post("http://tiy-orl-proxy.herokuapp.com/items/180",
    // {_method: "DELETE"}).then(response => console.log(response))

  // var timeout = setTimeout("location.reload(true);",6000);
  //  function resetTimeout() {
  //    clearTimeout(timeout);
  //    timeout = setTimeout("location.reload(true);",6000);
  //  }



  //
  // $(document).ready(function() {
  //  $("button").click(function() {
  //    window.location.reload();
  //  });
  // });
