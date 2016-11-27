System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var categories;
    return {
        setters:[],
        execute: function() {
            exports_1("categories", categories = [
                { name: 'All', selected: true },
                { name: 'Web', selected: false },
                { name: 'Mobile', selected: false },
                { name: 'IoT', selected: false },
                { name: 'Data Engineering', selected: false },
            ]);
        }
    }
});
//# sourceMappingURL=categories.js.map