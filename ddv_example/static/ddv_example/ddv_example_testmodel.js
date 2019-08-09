$(document).ready(function() {
    var dt_table = $('.datatable').dataTable({
        language: dt_language,  // global variable defined in html
        order: [[ 0, "desc" ]],
        lengthMenu: [[25, 50, 100, 200], [25, 50, 100, 200]],
        columnDefs: [
            {orderable: true,
             searchable: true,
             className: "center",
             targets: [0, 1]
            },
            {
                name: 'name',
                targets: [0]
            },
            {
                name: 'description',
                targets: [1]
            },
	{
		        // The `data` parameter refers to the data for the cell.
		        // The `rows`argument is an object representing all the data for the current row.
		        name: function ( data, type, row ) {
		            return "<button class='btn btn-danger btn-delete' data-pk='" + data + "'>" + row.name + "</button>";
		        },
		        targets: [-1]  // -1 is the last column, 0 the first, 1 the second, etc.
		    }
        ],
        searching: true,
        processing: true,
        serverSide: true,
        stateSave: true,
        ajax: TESTMODEL_LIST_JSON_URL
    });
});
