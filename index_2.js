function addmany() {

    if ($('#add-many').text() == 'add one') {

        $('#onebyone').show()
        $('#add-many').text("add multiple")
        $('.recent').css("visibility", "hidden")
        $('#added-controller').remove()
        $(".list-items").show()
    } else {
        
        $(".list-items").css("display", "none")
        $('#onebyone').hide()
        $("#add-holder").after("<button id='added-controller' onclick='addNewFields()'>Add new row</button>")
        $('.recent').css("visibility", "visible")
        $('#add-many').text("add one")
    }
}


function addNewFields() {
    if ($(".recent table tr").prevAll().length == 4) {
        alert("4 rows are max")
    } else {

        $(".recent table").append(
            `
            <tr>
            <td><input type="text" name="expense" id="" required></td>
            <td><input type="text" name="amount" id="" required></td>
            <td>
            <select name="category" id="" style="width: 100%;" required>
            <option value="">select category</option>
            <option value="">Transport</option>
            <option value="">Shopping</option>
            </select>
            <select name="sub-category" id="" style="margin-top: 3px; width: 100px;" required>
            <option value="">select sub-category</option>
            <option value="">Bus</option>
            <option value="">Sub-way</option>
            <option value="">Taxi</option>
            </select>
            </td>
            <td>
            <textarea name="" id="" cols="30" rows="1"></textarea>
    </tr>
    `)
    }
}