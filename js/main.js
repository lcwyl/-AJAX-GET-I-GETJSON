$(function () {
    let ul = $("#data");
    console.log(ul)
    /*
    $("button").on('click',function(){
        ul.empty();//clear
     $.get('https://akademia108.pl/api/ajax/get-post.php')
        .done((data) => {
            console.log(data);
            let dataParent = data;
            for(val in dataParent){
            let createLI = $("<li></li>");
            createLI.text(`${val}: ${dataParent[val]}`);
            ul.append(createLI)
            }
        })

            .fail((err) =>{
            console.error(err);
            $("#blad").text("blad: " + err.statusText).css('color','red')
            })
        })
*/
    // 2 wersja getJSON
    ul.remove();
    let createDiv = $("<div class='parent'></div>");
    $("body").append(createDiv)
   
    $("button").on('click', function () {
        createDiv.empty() //clear
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done((data) => {
                console.log(data);
                let id = $("<p></p>").text('userID:' + data.userId);
                let userID = $("<p></p>").text('id:' + data.id);
                let title = $("<p></p>").text('Title:' + data.title);
                let body = $("<p></p>").text('body:' + data.body)
                createDiv.append(id, userID, title, body)
            })

            .fail((err) => {
                console.error(err);
                $("#blad").text("Błąd: " + err.statusText).css({
                    'color': 'red',
                    'text-transform': 'uppercase'
                })
            })
    })
})
