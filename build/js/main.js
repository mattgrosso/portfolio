(function() {
  'use strict';

  var hashList = {
    home: {
      top: '-209vh',
      left: '-163vw'
    },
    projects: {
      top: '-72vh',
      left: '-121vw'
    },
    bootstrap: {
      top: '-75vh',
      left: '-329vw'
    },
    responsive: {
      top: '-265vh',
      left: '-273vw'
    },
    recommend: {
      top: '-335vh',
      left: '-83vw'
    },
    about: {
      top: '-215vh',
      left: '-400vw'
    }
  };

  if (window.location.hash === '') {
    $('.moveable-canvas').css({
      'top': hashList.home.top,
      'left': hashList.home.left,
    });
  }
  else if (window.location.hash.split('/')[1] === 'projects') {
    $('.moveable-canvas').css({
      'top': hashList.projects.top,
      'left': hashList.projects.left,
    });
  }
  else if (window.location.hash === '#/bootstrap') {
    $('.moveable-canvas').css({
      'top': hashList.bootstrap.top,
      'left': hashList.bootstrap.left,
    });
  }
  else if (window.location.hash === '#/responsive') {
    $('.moveable-canvas').css({
      'top': hashList.responsive.top,
      'left': hashList.responsive.left,
    });
  }
  else if (window.location.hash === '#/recommend') {
    $('.moveable-canvas').css({
      'top': hashList.recommend.top,
      'left': hashList.recommend.left,
    });
  }
  else if (window.location.hash === '#/about') {
    $('.moveable-canvas').css({
      'top': hashList.about.top,
      'left': hashList.about.left,
    });
  }

  window.addEventListener('hashchange', function hashNav() {
    moveCanvas();
  });

  function moveCanvas() {
    var hash = window.location.hash;
    if (hash === '') {
      $('.moveable-canvas').css({
        'top': hashList.home.top,
        'left': hashList.home.left,
      });
    }
    else if (hash === '#/projects') {
      window.location.hash = '#/projects/gametable';
      $('.moveable-canvas').css({
        'top': hashList.projects.top,
        'left': hashList.projects.left,
      });
    }
    else if (hash === '#/bootstrap') {
      $('.moveable-canvas').css({
        'top': hashList.bootstrap.top,
        'left': hashList.bootstrap.left,
      });
    }
    else if (hash === '#/responsive') {
      $('.moveable-canvas').css({
        'top': hashList.responsive.top,
        'left': hashList.responsive.left,
      });
    }
    else if (hash === '#/recommend') {
      $('.moveable-canvas').css({
        'top': hashList.recommend.top,
        'left': hashList.recommend.left,
      });
    }
    else if (hash === '#/about') {
      $('.moveable-canvas').css({
        'top': hashList.about.top,
        'left': hashList.about.left,
      });
    }
  }

  $('.move-stuff-form').on('submit', function moveStuff(event) {
    event.preventDefault();
    $('.moveable-canvas').css({
      'top': '-' + event.target[0].value + 'vh',
      'left': '-' + event.target[1].value + 'vw',
    });
  });

})();

(function() {
  'use strict';

  angular
    .module('portfolio', ['ui.router'])
    .config(portfolioConfig);

  portfolioConfig.$inject = ['$stateProvider'];

  function portfolioConfig($stateProvider) {

    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: '/templates/projects.template.html'
      })
      .state('gametable', {
        url: '/projects/gametable',
        templateUrl: '/templates/gametable.template.html'
      })
      .state('tictactoe', {
        url: '/projects/tictactoe',
        templateUrl: '/templates/tictactoe.template.html'
      })
      .state('evolution', {
        url: '/projects/evolution',
        templateUrl: '/templates/evolution.template.html'
      })
      .state('popsci', {
        url: '/projects/popsci',
        templateUrl: '/templates/popsci.template.html'
      });
  }


})();

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
  var quoteGridOpenSlotArray = [0,1,2,3,4,5,6,7,8,9,10,11];

  randomizeArray(quotesArray).forEach(function addQuotes(each) {
    var quoteElement = buildQuoteElement(each);
    var quoteRandomQuoteSlot = Math.floor(Math.random() * quoteGridOpenSlotArray.length);
    $('#quote-grid-' + quoteGridOpenSlotArray[quoteRandomQuoteSlot]).append(quoteElement);
    quoteGridOpenSlotArray.splice(quoteRandomQuoteSlot, 1);
  });

  $('.quote').hover(function hoverOverQuote() {
    $('.quote').removeClass('big-quote').addClass('small-quote');
    $(this).removeClass('small-quote').addClass('big-quote');
  }, function mouseOffQuote() {
    $('.quote').removeClass('big-quote').removeClass('small-quote');
  });

  function buildQuoteElement(quoteObject) {
    var quoteElement = $('<div>').addClass('quote');
    var quoteText = $('<p>').text(quoteObject.quote);
    var quoteLink = $('<a>').attr('href', 'mailto:' + quoteObject.email).attr('target', '_blank');
    var quoteName = $('<h3>').text(quoteObject.name);

    quoteLink.append(quoteName);
    quoteElement.append(quoteText).append(quoteLink);
    return quoteElement;
  }

  function randomizeArray(array, scrambledArray) {
    var givenArray = array;
    var randomizedArray = scrambledArray || [];
    if (givenArray.length > 0) {
      var randomIndex = Math.floor(Math.random() * givenArray.length);
      randomizedArray.push(givenArray[randomIndex]);
      givenArray.splice(randomIndex, 1);
      randomizeArray(givenArray, randomizedArray);
    }
    return randomizedArray;
  }

})();

//# sourceMappingURL=main.js.map