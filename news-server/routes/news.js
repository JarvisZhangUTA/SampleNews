var express = require('express');
var path = require('path');
var router = express.Router();

// Get News
router.get('/', function(req, res, next) {
    const news = [
        {
            url:'http://materializecss.com/collections.html',
            title: 'Version 1.0 is coming soon! See this GitHub post for more information.',
            description: 'Version 1.0 is coming soon! See this GitHub post for more information.Version 1.0 is coming soon! See this GitHub post for more information.',
            source: 'Goo',
            image: 'http://pad1.whstatic.com/images/thumb/c/c6/Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg/aid98444-v4-728px-Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg',
            digest: 'asd',
            reason: 'Hot',
            time: new Date().toDateString()
        },
        {
            url:'http://materializecss.com/collections.html',
            title: 'Version 1.0 is coming soon! See this GitHub post for more information.',
            description: 'Version 1.0 is coming soon! See this GitHub post for more information.Version 1.0 is coming soon! See this GitHub post for more information.',
            source: 'Goo',
            image: 'http://pad1.whstatic.com/images/thumb/c/c6/Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg/aid98444-v4-728px-Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg',
            digest: 'e21',
            reason: 'Recommended',
            time: new Date().toDateString()
        },
        {
            url:'http://materializecss.com/collections.html',
            title: 'Version 1.0 is coming soon! See this GitHub post for more information.',
            description: 'Version 1.0 is coming soon! See this GitHub post for more information.Version 1.0 is coming soon! See this GitHub post for more information.',
            source: 'Goo',
            image: 'http://pad1.whstatic.com/images/thumb/c/c6/Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg/aid98444-v4-728px-Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg',
            digest: 'asd',
            reason: 'Hot',
            time: new Date().toDateString()
        },
        {
            url:'http://materializecss.com/collections.html',
            title: 'Version 1.0 is coming soon! See this GitHub post for more information.',
            description: 'Version 1.0 is coming soon! See this GitHub post for more information.Version 1.0 is coming soon! See this GitHub post for more information.',
            source: 'Goo',
            image: 'http://pad1.whstatic.com/images/thumb/c/c6/Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg/aid98444-v4-728px-Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg',
            digest: 'e21',
            reason: 'Recommended',
            time: new Date().toDateString()
        },
        {
            url:'http://materializecss.com/collections.html',
            title: 'Version 1.0 is coming soon! See this GitHub post for more information.',
            description: 'Version 1.0 is coming soon! See this GitHub post for more information.Version 1.0 is coming soon! See this GitHub post for more information.',
            source: 'Goo',
            image: 'http://pad1.whstatic.com/images/thumb/c/c6/Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg/aid98444-v4-728px-Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg',
            digest: 'asd',
            reason: 'Hot',
            time: new Date().toDateString()
        },
        {
            url:'http://materializecss.com/collections.html',
            title: 'Version 1.0 is coming soon! See this GitHub post for more information.',
            description: 'Version 1.0 is coming soon! See this GitHub post for more information.Version 1.0 is coming soon! See this GitHub post for more information.',
            source: 'Goo',
            image: 'http://pad1.whstatic.com/images/thumb/c/c6/Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg/aid98444-v4-728px-Make-a-Toga-out-of-a-Bedsheet-Step-1-Version-4.jpg',
            digest: 'e21',
            reason: 'Recommended',
            time: new Date().toDateString()
        }
    ];

    res.json(news);
});

module.exports = router;
