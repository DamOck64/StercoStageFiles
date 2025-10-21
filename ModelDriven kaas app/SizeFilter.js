
function filterSizeLookup(executionContext) {


    var ApplicableForm = "cr981_cheese_size" //Input target lookup colum schema name
    var forToFilter = "cr981_atribute" // input eav column schema name
    var filterID = "569070002" // input choice column number id

    var formContext = executionContext.getFormContext();

    var sizeControl = formContext.getControl(ApplicableForm);

    if (sizeControl) {

        var fetchXml = `<filter type='and'> +
                       <condition attribute='${forToFilter}' operator='eq' value='${filterID}' /> +
                       </filter>`;

        sizeControl.addPreSearch(function () {
            sizeControl.addCustomFilter(fetchXml);
        });
    }
}