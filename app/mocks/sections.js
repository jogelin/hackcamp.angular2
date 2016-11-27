System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var images, sections;
    return {
        setters:[],
        execute: function() {
            images = 'assets/img';
            exports_1("sections", sections = [
                { name: 'Books', cover: images + "/books.png" },
                { name: 'Computers', cover: images + "/computers.png" },
                { name: 'Photos', cover: images + "/photos.png" },
                { name: 'Automotive', cover: images + "/automotive.png" },
                { name: 'Sports', cover: images + "/sports.png" },
                { name: 'Movies', cover: images + "/movies.png" },
                { name: 'Handmade', cover: images + "/handmade.png" },
                { name: 'Credit & Payment', cover: images + "/credit-payments.png" },
                { name: 'Music', cover: images + "/music.png" },
                { name: 'Videos', cover: images + "/video.png" },
                { name: 'Home and decoration', cover: images + "/home.png" },
            ]);
        }
    }
});
//# sourceMappingURL=sections.js.map