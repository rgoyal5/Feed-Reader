$(function() {
    describe('RSS Feeds', function() {
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(false);
        });
        //check if all feeds have url's and aren't null
        it('URLs defined and not null', function() {
            for(var x=0;x<allFeeds.length;x++)
			{
				expect(allFeeds[x].url).toBeDefined();
				expect(allFeeds[x].url.length >= 1).toBe(true);
			}
        });
        //check if all feeds have names's and aren't null
        it('Name defined and not null', function() {
            for(var x=0;x<allFeeds.length;x++)
			{
				expect(allFeeds[x].name).toBeDefined();
				expect(allFeeds[x].name.length >= 1).toBe(true);
			}
        });
    });
        //menu is hidden by default
    describe('The menu', function() {
        it('Menu-hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
		// menu changes view on click
        it('Change view on click', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        //Checks for entry
        it('Have Entry', function(done) {
            expect($('.feed .entry').length > 0).toBe(true);
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New feed Selection', function() {
        it('Feeds Loads or not', function(done) {
            var Feed1;
            var Feed2;
            loadFeed(0, function() {
                Feed1 = $('.feed').html();
                //checks whether new content is loaded or not
                loadFeed(1, function() {
                    Feed2 = $('.feed').html();
                    expect(Feed1).not.toEqual(Feed2); //compares the first feed with the second
                    done();
                });
            });
        });
    });

}());