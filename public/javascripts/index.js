$('#loadDataButton').on('click', () => {
    $('#tableContainer').children().remove();
    $.ajax({
        url: '/upload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: (body, textStatus, jqXHR) => {
            var html = "<table><thead><th>Class</th><th>Win Rate</th></thead>";
            for( key in body ){
                html += "<tr><td>" + key + "</td><td>" + body[key] + "</td></tr>"
            }
            html += "</table>";
            $('#tableContainer').append(html);
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.error(errorThrown);
        }
    })
})