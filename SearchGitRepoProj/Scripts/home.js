function homeJs() {
    this.items = [];
    this.onBookmark = function (index) {
        debugger;
            $.ajax({
                type: "POST",
                data: {'name': this.items[index].name, 'url': this.items[index].owner.avatar_url},
                url: '/' + 'Home' + '/' + 'UpdateSession',
                success: function (response) {
                    debugger;
                    var bookmarked = JSON.parse(response);
                    $("#table-session-tbody").empty();
                    createTable(bookmarked);
                    return false;
                },
                error: function (error) {
                }
            });
            return false;
    };
    this.onEnterSearch = function (e,elementRef) {
        if (e.keyCode == 13) {
            var tb = document.getElementById('inpSearch');
            debugger;
            $.ajax({
                type: "Get",
                url: 'https://api.github.com/search/repositories?q=' + tb.value,
               
                beforeSend: function () {
                },
                success: function (response) {
                    debugger;
                    $("#carouselInner").empty();
                    elementRef.items = response.items;
                    response.items.forEach(createDivFor);
                    return false;
                },
                error: function (error) {
                }
            });
            return false;
        }
    };
    function createDivFor(item, index) {
        debugger;
        var iDiv = document.createElement('div');
        iDiv.id = 'carouselItem'+index;
        iDiv.className = index === 0 ? 'carousel-item active' : 'carousel-item';
        document.getElementById('carouselInner').appendChild(iDiv);

        // Now create and append to iDiv
        var innerDiv = document.createElement('div');
        innerDiv.id = 'carouselItemBlock' + index;
        innerDiv.className = 'd-block';
        innerDiv.style = 'width:100%;'

        var rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        var rowInnerDiv1 = document.createElement('div');
        rowInnerDiv1.className = 'row';
        var rowInnerDiv2 = document.createElement('div');
        rowInnerDiv2.className = 'row';
        var rowInnerDiv3 = document.createElement('div');
        rowInnerDiv3.className = 'row';
        var col12Div1 = document.createElement('div');
        col12Div1.className = 'col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12';
        var col12InnerDiv1 = document.createElement('div');
        col12InnerDiv1.className = 'col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12';
        var col12InnerDiv2 = document.createElement('div');
        col12InnerDiv2.className = 'col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12';
        var col12InnerDiv3 = document.createElement('div');
        col12InnerDiv3.className = 'col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12';
        var formC = document.createElement('form');
        var divC = document.createElement('div');
        divC.className = 'row'
        var formGroupDiv1 = document.createElement('div');
        formGroupDiv1.className = 'form-group';
        var formGroupDiv2 = document.createElement('div');
        formGroupDiv2.className = 'form-group';
        var formGroupDiv3 = document.createElement('div');
        formGroupDiv3.className = 'col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12';
        formGroupDiv3.style = 'text-align: center;'
        var iSpan1 = document.createElement('input');
        iSpan1.value = 'repository name: ' + item.name;
        iSpan1.className = 'form-control';
        var iSpan2 = document.createElement('input');
        iSpan2.value = 'avatar: ' + item.owner.avatar_url;
        iSpan2.className = 'form-control';
        var buttonBookmark = document.createElement('BUTTON');
        buttonBookmark.className = 'btn btn-primary btn-lg outline';
        var txtbt = document.createTextNode("bookmark");
        buttonBookmark.onclick = function () { debugger; staticHomeJs.onBookmark(index );};

        buttonBookmark.appendChild(txtbt);
        innerDiv.appendChild(rowDiv);
        rowDiv.appendChild(col12Div1);
        //col12Div1.appendChild(rowInnerDiv1);
        //col12Div1.appendChild(rowInnerDiv2);

        col12Div1.appendChild(formC);
        col12Div1.appendChild(divC);
        formC.appendChild(rowInnerDiv1);
        formC.appendChild(rowInnerDiv2);
        divC.appendChild(rowInnerDiv3);

        rowInnerDiv1.appendChild(col12InnerDiv1);
        rowInnerDiv2.appendChild(col12InnerDiv2);
        rowInnerDiv3.appendChild(col12InnerDiv3);

        col12InnerDiv1.appendChild(formGroupDiv1);
        col12InnerDiv2.appendChild(formGroupDiv2);
        col12InnerDiv3.appendChild(formGroupDiv3);

        formGroupDiv1.appendChild(iSpan1);
        formGroupDiv2.appendChild(iSpan2);
        formGroupDiv3.appendChild(buttonBookmark);
        // The variable iDiv is still good... Just append to it.
        iDiv.appendChild(innerDiv);
    }
    function createTable(tableData) {
        var tableBody = document.getElementById('table-session').getElementsByTagName('tbody')[0];

        tableData.forEach(function (rowData) {
            var row = document.createElement('tr');

                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(rowData.name));
                row.appendChild(cell);
                cell = document.createElement('td');
                cell.appendChild(document.createTextNode(rowData.url));
                row.appendChild(cell);

            tableBody.appendChild(row);
        });

        //table.appendChild(tableBody);
        //document.body.appendChild(table);
    }

}
staticHomeJs = new homeJs();