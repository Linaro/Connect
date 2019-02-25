$(document).ready(function(){

    // Enable Tooltips
    $('[data-toggle="tooltip"]').tooltip({ html: true });


    // Multiselect
    $("#connect-resources-search-select").multiselect({
        nonSelectedText: 'Select Attributes',
        includeSelectAllOption: true,
        nSelectedText: ' attributes selected',
        allSelectedText: 'All Attributes',
        selectAllText: 'Show all attributes',
        onSelectAll: function () {
            $("[data-attr]").each(function () {
                $(this).css("display", "table-cell");
            });
        },
        onDeselectAll: function () {
            $("[data-attr]").each(function () {
                $(this).css("display", "none");
            });
        },
        onChange: function (option, checked, select) {
            if (checked == true) {
                $("[data-attr='" + $(option).val() + "'").css("display", "table-cell");
            }
            else {
                $("[data-attr='" + $(option).val() + "'").css("display", "none");
            }
        }
    });
    $("#compare-96boards-attribute-select").multiselect('selectAll', false);
    $('#compare-96boards-attribute-select').multiselect('updateButtonText', "All Attributes");
    $("[data-attr]").each(function () {
        $(this).css("display", "table-cell");
    });


    // Enabled the multiselect plugin
    $("#connect-resources-search-select").multiselect({
        nonSelectedText: 'Select Track',
        includeSelectAllOption: true,
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        nSelectedText: ' boards selected',
        allSelectedText: 'All 96Boards',
        selectAllText: 'Compare all 96Boards',
        onSelectAll: function () {
            $(".double-scroll").doubleScroll({
                resetOnWindowResize: true,
                onlyIfScroll: false
            });
            $("[data-board]").each(function () {
                $(this).css("display", "table-cell");
            });
        },
        onDeselectAll: function () {
            $("[data-board]").each(function () {
                $(this).css("display", "none");
            });
        },
        enableCollapsibleOptGroups: true,
        onChange: function (option, checked, select) {
            if (checked == true) {
                $("[data-track='" + $(option).val() + "'").css("display", "table-cell");
            }
            else {
                $("[data-track='" + $(option).val() + "'").css("display", "none");
            }
            $(".double-scroll").doubleScroll({
                resetOnWindowResize: true,
                onlyIfScroll: true
            });
        }
    });

});