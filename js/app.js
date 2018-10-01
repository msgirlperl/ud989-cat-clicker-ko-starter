const initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Tabtab', 'T-bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Tigger']
    },
    {
        clickCount: 0,
        name: 'Scaredy',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Casper']
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Shooby']
    },
    {
        clickCount: 0,
        name: 'Sleepy',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['zzz']
    }
];

const Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);
    this.level = ko.computed(() => {
        let clicks = this.clickCount();
        if (clicks < 10) return 'newborn';
        if (clicks < 20) return 'infant';
        return 'teen';
    }, this);
};

const ViewModel = function() {

    const self = this;
    self.catList = ko.observableArray([]);

    initialCats.forEach(cat => self.catList().push(new Cat(cat)));

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    self.setCurrentCat = function(cat){
        self.currentCat(self.catList()[ko.contextFor(event.target).$index()]);
    }
};

ko.applyBindings(new ViewModel());