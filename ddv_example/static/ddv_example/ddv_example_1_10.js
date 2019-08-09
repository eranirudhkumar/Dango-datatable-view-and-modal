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
            }
        ],
        searching: true,
        processing: true,
        serverSide: true,
        stateSave: true,
        ajax: USERS_LIST_JSON_URL,
        buttons: {
            buttons: [
                { extend: 'selectAll', className: 'bg-red waves-effect' },
                { extend: 'selectNone', className: 'bg-red waves-effect' },
                { extend: 'copy', className: 'bg-red waves-effect' },
                { extend: 'csv', className: 'bg-red waves-effect' },
                { extend: 'excel', className: 'bg-green waves-effect' },
                { extend: 'print', className: 'bg-red waves-effect' },
            ],
        },
    });
});
