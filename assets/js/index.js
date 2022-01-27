const listTabDiv = $("#list-tab")
const tabContentDiv = $('#nav-tabContent')
$.getJSON("http://localhost:3000/asiancountries", data => {


    $.each(data, (item) => {
        // item index
        const listTabItem = $(`<a class="list-group-item list-group-item-action" 
        data-bs-toggle="list" role="tab"></a>`)
        listTabItem.prop("href", "#list-" + item)
        listTabItem.text(item)
        listTabDiv.append(listTabItem)

        // item content
        const tabPane = $(`<div class="tab-pane fade show" role="tabpanel">`)
        tabPane.prop("id", "list-" + item)
        const listGroup = $(`<ul class="list-group"></ul>`)
        const listGroupItem = [
            $(`<li class="list-group-item">
                Capital City: ${data[item].capital}
            </li>`),
            $(`<li class="list-group-item">
                Currency: ${data[item].currency}
            </li>`),
            $(`<li class="list-group-item">
                Language: ${data[item].lang}
            </li>`)
        ]
        $.each(listGroupItem, (i, item) => listGroup.append(item))
        tabPane.append(listGroup)
        tabContentDiv.append(tabPane)
    })
})