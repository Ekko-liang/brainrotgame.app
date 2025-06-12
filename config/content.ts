import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Start Play", href: "#game-section" },
        { text: "Hot Games", href: "#other-games" },
        { text: "Features", href: "#features" },
        { text: "What Is", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About Italian Brainrot Clicker",
      description: `
Italian Brainrot Clicker is a wild, funny meme clicker game for everyone! Play for free, unlock crazy meme characters, and see how high your Italian Brainrot score can go. No downloads, no waiting—just pure meme fun. Join the Italian Brainrot adventure today! Whether you love memes, enjoy clicker games, or just want to laugh, Italian Brainrot Clicker is the perfect game for you. Start your Italian Brainrot journey now and become the ultimate meme master!`
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Biogenerator", href: "https://biogenerator.cc" }
      ]
    },
    games: {
      title: "Games",
      links: [
        { text: "Italian Brainrot Clicker", href: "/" },
        { text: "Crazy Cow 3D", href: "/crazy-cow-3d" },
        { text: "Crazy Chicken 3D", href: "/crazy-chicken-3d" },
        { text: "Cheese Chompers 3D", href: "/cheese-chompers-3d" },
        { text: "Basketball Bros Unblocked", href: "/basketball-bros-unblocked" },
        { text: "Pokemon Gamma Emerald", href: "/pokemon-gamma-emerald" },
        { text: "Sprunki Incredibox", href: "/sprunki-incredibox" },
        { text: "Crazy Cattle 3D", href: "/crazy-cattle-3d" },
      ]
    },
    social: {
      title: "Share",
      links: [
        { icon: 'Facebook', href: 'https://facebook.com/yourpage', label: 'Facebook' },
        { icon: 'Twitter', href: 'https://twitter.com/yourpage', label: 'Twitter' }
      ] as import('../types/social').SocialLink[],
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Italian Brainrot Clicker. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate Italian Brainrot Clicker",
    votes: "votes",
    initialRating: 4.9,
    initialVotes: 321
  },
  gameSection: {
    title: "Italian Brainrot Clicker",
    game: {
      url: '/brainrot-clicker.embed',
      title: "brainrot-clicker",
      externalUrl: '/game/brainrot-clicker/index.html'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    },
  },
  howToPlay: {
    title: "How to Play Italian Brainrot Clicker: The Ultimate Meme Adventure!",
    description: `
Playing Italian Brainrot Clicker is simple and fun! Here's how you do it:

1. Click or tap anywhere on the screen to earn Italian Brainrot points.
2. Use your points to unlock new meme characters, like Spaghetti Cat or Meme Doge.
3. Buy upgrades to make your clicks even stronger! Try the Super Clicker or Meme Machine for extra fun.
4. Watch out for special events—sometimes, a giant pizza or a rainbow spaghetti will appear for bonus points!
5. Keep clicking to discover all the hidden Italian Brainrot secrets. There are so many memes to find!

Tips:
- The more you play, the better you get!
- Try to collect every Italian Brainrot character. Each one has a special move or sound.
- Play with friends and see who can get the most points. Italian Brainrot is more fun together!

Advanced tips:
- Save your Italian Brainrot points for big upgrades. Some upgrades give you double or triple points!
- Look for hidden meme codes. Sometimes, typing a secret word will unlock a special Italian Brainrot event.
- Try to beat your own high score every day. The more you play, the more Italian Brainrot fun you'll have!

Remember, Italian Brainrot Clicker is all about having fun and enjoying the silliest memes on the internet. Start clicking and let the Italian Brainrot adventure begin!`
    ,
    image: "/assets/brainrot-clicker/brainrot-clicker.jpg",
    imageAlt: "How to Play Italian Brainrot Clicker - Meme Game Guide"
  },
  whatIs: {
    title: "What Is Italian Brainrot Clicker? The Meme Game Everyone Is Talking About!",
    description: `
Italian Brainrot Clicker is a free online game where you tap, click, and laugh your way through the amazing world of Italian Brainrot memes. Imagine a place where spaghetti can talk, pizza can dance, and every click brings a new Italian Brainrot surprise! This game is made for meme fans who love jokes and silly fun.

In Italian Brainrot Clicker, your goal is to collect as many Italian Brainrot points as you can. Every tap gives you more points, and you can use them to unlock new meme characters, cool upgrades, and funny backgrounds. The more you play, the more the Italian Brainrot world grows!

Why do people love Italian Brainrot Clicker? Because it's easy, fast, and full of surprises. You don't need to read long instructions or wait for downloads. Just start clicking and let the Italian Brainrot magic begin! Can you become the ultimate Italian Brainrot meme master? There's only one way to find out—start playing now!

The Italian Brainrot universe is always expanding. New memes, new characters, and new adventures are added all the time. You can even share your Italian Brainrot score with friends and see who is the best meme clicker. The game is perfect for parties, sleepovers, or just a fun break. Italian Brainrot Clicker is more than a game—it's a whole world of laughter and creativity!`
    ,
    logo: {
      src: "/assets/brainrot-clicker/brainrot-clicker-logo.png",
      alt: "Italian Brainrot Clicker - Meme Game Logo"
    }
  },
  faq: {
    title: "Italian Brainrot Clicker: All Your Meme Questions Answered!",
    items: [
      {
        value: "what-is-italian-brainrot",
        question: "What is Italian Brainrot?",
        answer: `
Italian Brainrot is a super funny meme trend from the internet. It's all about silly jokes, crazy characters, and lots of laughs. In Italian Brainrot Clicker, you get to play with all these memes and have the best time ever! Italian Brainrot is everywhere—on TikTok, YouTube, and now in your favorite clicker game!`
      },
      {
        value: "is-it-free",
        question: "Is Italian Brainrot Clicker free?",
        answer: `
Yes! Italian Brainrot Clicker is 100% free to play. You don't need to pay or download anything. Just open the game and start clicking for Italian Brainrot fun! There are no hidden costs or ads that get in the way of your Italian Brainrot adventure.`
      },
      {
        value: "can-i-play-on-my-phone",
        question: "Can I play Italian Brainrot Clicker on my phone or tablet?",
        answer: `
Absolutely! Italian Brainrot Clicker works on computers, tablets, and phones. You can play anywhere you want, anytime you want. The Italian Brainrot fun never stops, no matter where you are!`
      },
      {
        value: "are-there-upgrades",
        question: "What kind of upgrades can I get?",
        answer: `
There are tons of upgrades in Italian Brainrot Clicker! You can get Super Clicks, Meme Boosters, and even unlock secret meme characters. Upgrades help you get more points and make the game even more fun. The Italian Brainrot world is full of surprises!`
      },
      {
        value: "can-i-play-with-friends",
        question: "Can I play Italian Brainrot Clicker with my friends?",
        answer: `
You can play together by seeing who gets the most points or who unlocks the rarest meme character. Share your scores and have fun competing for the title of Italian Brainrot Meme Master! The Italian Brainrot community is friendly and always ready for a new challenge.`
      },
      {
        value: "how-often-are-there-new-memes",
        question: "How often are there new Italian Brainrot memes in the game?",
        answer: `
All the time! Italian Brainrot Clicker is updated regularly with new memes, characters, and events. Every week, there's something new to discover. Keep playing and you'll always find fresh Italian Brainrot fun!`
      },
    ]
  },
  features: {
    title: "Why Italian Brainrot Clicker Is the Best Meme Game for Kids Who Love Fun!",
    items: [
      {
        title: "What Makes Italian Brainrot So Special?",
        description: `
Italian Brainrot is not just a meme—it's a whole world of wild, wacky, and wonderful fun! In Italian Brainrot Clicker, you get to explore the amazing universe of Italian Brainrot memes. Imagine a place where spaghetti can sing, pizza can dance, and every click brings a new Italian Brainrot surprise. This game is packed with silly jokes, crazy characters, and endless laughter. If you love memes, you'll love Italian Brainrot Clicker. It's the perfect game for kids who want to laugh, play, and discover something new every day. The Italian Brainrot world is always growing, so there's always something new to find!
        `
      },
      {
        title: "Super Easy to Play, Super Hard to Stop!",
        description: `
Italian Brainrot Clicker is made for everyone! You don't need to be a gaming expert to have fun. Just tap or click as fast as you can and watch your Italian Brainrot points go up, up, up! Every click brings you closer to unlocking new Italian Brainrot meme characters and awesome upgrades. The game is so easy to start, but once you begin, you won't want to stop. The Italian Brainrot adventure never ends, and there's always a new meme to discover. Can you become the ultimate Italian Brainrot Clicker champion?
        `
      },
      {
        title: "Meet the Funniest Italian Brainrot Meme Characters",
        description: `
Get ready to meet the silliest, funniest, and most outrageous Italian Brainrot meme characters ever! From Spaghetti Cat to Pizza Penguin, every Italian Brainrot character has a unique personality and special moves. Some can dance, some can sing, and some can even tell jokes! Collect them all and see what crazy things they do. Each Italian Brainrot character brings something new to the game, and you never know what will happen next. The more you play, the more Italian Brainrot friends you'll make!
        `
      },
      {
        title: "Unlock Cool Upgrades and Secret Surprises",
        description: `
In Italian Brainrot Clicker, there are tons of cool upgrades to discover. Get Super Clicks, Meme Boosters, and even Rainbow Spaghetti! Every upgrade makes your Italian Brainrot adventure even more exciting. Watch out for secret events and hidden meme parties—sometimes, a giant pizza or a rainbow spaghetti will appear for bonus points! The Italian Brainrot world is full of surprises, and you never know what's coming next. Keep clicking and see what you can find!
        `
      },
      {
        title: "Play Italian Brainrot Clicker Anywhere, Anytime",
        description: `
No downloads, no waiting, no worries! Italian Brainrot Clicker works right in your browser, on your computer, tablet, or phone. You can play at home, at school, or even on the bus. The Italian Brainrot fun never stops, and you can join the adventure anytime you want. Invite your friends and see who can get the highest Italian Brainrot score. The more, the merrier!
        `
      },
      {
        title: "Safe, Friendly, and Full of Laughter",
        description: `
Italian Brainrot Clicker is made for kids and families. There are no scary things or bad words—just lots of Italian Brainrot memes and laughter. Parents can feel good knowing their kids are playing a safe, fun, and creative game. The Italian Brainrot community is friendly and welcoming, so everyone can join the fun!
        `
      }
    ]
  }
} as const;


