(function() {
  'use strict';

  var quotesArray = [
    {
      name: 'Sarah Welch',
    	quote: 'Matt brings both of out-of-the-box creativity and dog-on-a-bone relentlessness to solving problems and building things. He is a huge asset to any project.',
    	email: 'sarah@getbuttonedup.com'
    },
    {
    	name: 'Seth Hopper',
    	quote: 'One of the greatest assets of Matt is a curiosity that is both broad and deep.',
    	email: 'seth@seth-hopper.com'
    },
    {
    	name: 'Bob Coscarelli',
    	quote: 'Matt blends the perfect ratio of book smarts, street smarts and situational-awareness...A major asset to any team',
    	email: 'bob@coscarelli.com'
    },
    {
    	name: 'BethAnn Slater',
    	quote: 'Matthew is an out of the box thinker that finds the new in the ordinary and makes it possible. He does not take no for an answer and loves to learn at every turn.',
    	email: 'bethann@middleburgmontessori.com'
    },
    {
    	name: 'Brian Goegan',
    	quote: 'Matt Grosso is professional, experienced, and innovative. It is with pride and purpose that I recommend him!',
    	email: 'brian.goegan@asu.edu'
    },
    {
    	name: 'Brian Patrick',
    	quote: 'Matthew Grosso and I have worked together on many projects over the last 15 years. We only wish we could have Matt as a full time part of our staff at Skyline Indie Film Fest.',
    	email: 'bpatrick@skylineindiefilmfest.org'
    },
    {
    	name: 'James Basham',
    	quote: 'In any field of work, one finds problems. No matter how varied or complex the issue, I have always counted on Matt to help find solutions.',
    	email: 'jamesbasham@gmail.com'
    },
    {
    	name: 'Jennie Zumbusch',
    	quote: 'Matt is one of the most clever, enthusiastic, and curious people I know. He seeks out challenges in life and finds innovative ways to address them.',
    	email: 'Jennie.Zumbusch@gmail.com'
    },
    {
    	name: 'David Grosso',
    	quote: 'Matt is a dependable creative critical thinker that ensures the job is not just done but done the right way.',
    	email: 'david@grossoatlarge.com'
    },
    {
    	name: 'Andy Zumbusch',
    	quote: 'Matt is one of the most trustworthy and reliable people out there. He never backs down from a challenge, and is one of the first people I would call for a creative solution.',
    	email: 'andrew.zumbusch@gmail.com'
    },
    {
    	name: 'Mark Andreas',
    	quote: 'Matt is creative and highly curious, always seeking to understand at a deeper level than most, and when he sets his mind to something watch out.'
    },
    {
    	name: 'Jacob Shapiro',
    	quote: 'Matt Grosso is clever, resourceful and tenacious. His innate skill sets proved a valuable asset to me and my company as we worked to establish ourselves. His efforts have proven fruitful for ten years running.',
    	email: 'jacob.shapiro@gmail.com'
    },
    {
    	name: 'Matthew OMalley',
    	quote: 'I have known Matt to be consistent, helpful, and dedicated in the many projects I have worked on with him.',
    },
    {
    	name: 'Kathleen Donahue',
    	quote: 'Having worked with Matt as a business partner on two conventions, he has shown a refreshing commitment to excellence in the products and services we offered our customers.',
    	email: 'kathleen@labyrinthgameshop.com'
    },
    {
    	name: 'Ben Rosset',
    	quote: 'Ingenuity, creativity, and talent are three words that come to mind when describing Matt. He sees the big picture and is great at bringing a vision to life',
    	email: 'rosset37@gmail.com'
    },
    {
    	name: 'Adam Bee',
    	quote: 'Matt is well above average in every way. From building huge trebuchets to launching a tabletop convention in DC, Matt has a proven track record as a bold creator.',
    	email: 'charles.adam.bee@gmail.com'
    },
    {
    	name: 'Mike Manglitz',
    	quote: 'I have known Matt for most of his life. I have also known many other people, but almost nobody combines honesty, insightfulness, moral sensitivity, and passion about their curiosity and interests quite like Matt does.',
    	email: '80manglitz@cua.edu'
    },
    {
    	name: 'MegAnn Slater',
    	quote: 'Matt is determined and thoughtful. I have never known him to do any task half-heartedly.',
    	email: 'slaterma@guilford.edu'
    },
    {
    	name: 'Pedrom Rejai',
    	quote: 'Matt is one of the smartest people I know, but his intelligence is unmatched by his dedication and enthusiasm for what he puts his mind to. He is one of those people you look at and think that the possibilities of what he can accomplish are endless.',
    	email: 'pedrom86@gmail.com'
    }
  ];

  function buildQuoteElement(quoteObject) {
    var quoteElement = $('<div>');
    var quoteText = $('<p>').text(quoteObject.quote);
    var quoteLink = $('<a>').attr('href', 'mailto:' + quoteObject.email);
    var quoteName = $('<h3>').text(quoteObject.name);

    // quoteText.innerText = quoteObject.quote;
    // quoteName.innerText = quoteObject.name;
    quoteLink.append(quoteName);
    quoteElement.append(quoteText).append(quoteLink);
    console.log(quoteElement);
    return quoteElement;
  }

  buildQuoteElement(quotesArray[0]);
})();
