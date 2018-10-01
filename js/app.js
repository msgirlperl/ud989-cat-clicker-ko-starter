const Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/');
    this.level = ko.computed(() => {
        let clicks = this.clickCount();
        if (clicks < 10) return 'newborn';
        if (clicks < 20) return 'infant';
        return 'teen';
    }, this)
   
    this.cats = ko.observableArray([{name: 'Tabtab'}, {name: 'T-bone'}, {name: 'Mr. T'}, {name: 'Tabitha Tab Tabby Catty Cat'}]);
};

const ViewModel = function() {
    this.currentCat = ko.observable( new Cat());

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());