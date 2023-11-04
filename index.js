btns = document.querySelectorAll('a')
len = btns.length - 1
currentlocation = location.href
for (let i = 0; i <= len; i++) {
    if (btns[i].href == currentlocation) {
        btns[i].className = 'active'
    }
}
$('.close-btn').on('click', function () {
    $('.navigation').css("display", "none")
    $(".close-btn").css("display", "none")
    $(".open-btn").css("display", "flex")
    $('.content').css("marginLeft , 0")
    $('.content').css("width , 100%")

})
$(".open-btn").on('click', function () {
    $('.navigation').css("display", "block")
    $(".close-btn").css("display", "flex")
    $(".open-btn").css("display", "none")
    $('.content').css("margin-left , 20%")
    $('.content').css("width , 75%")
})

$('#filter-option').on("change", function () {
    var selected = $('#filter-option').find(":selected").text();
    $(this).val() == ''
    if (selected === 'Month') {
        $('.filterby').html(
            `
                    <form action="">
                        <label for="date">Start Date</label>
                        <input type="date" id="start-date">
                        <label for="">End Date</label>
                        <input type="date" id="end-date">
                        </form>
                        `)
        $("#start-date").on("change", function () {
            //starting filtering  response data
            //here starts by showing data with date created greater than starting date
            console.log($(this).val())
            $("#end-date").on("change", function () {
                //here starts by showing data with date created not greater than end date
                // but not less that start date
                console.log($(this).val())
            })
        })
        alert($(this))
    } else if (selected === 'Amount gt') {
        // console.log("yes")
        $('.filterby').html(`
                <label>Amount
                <input type="text" id="amount">
                `)
        $("#amount").on("change", function () {
            //starting looking by amount gt than inputs
            console.log($(this).val())
        })
    }
    else if (selected === 'Amount lt') {
        $('.filterby').html(`
                <label>Amount
                <input type="text" id="amount">
                `)
        $("#amount").on("change", function () {
            //starting looking by amount lt than inputs
            console.log($(this).val())
        })

    } else {
        console.log("error");
    }

})
