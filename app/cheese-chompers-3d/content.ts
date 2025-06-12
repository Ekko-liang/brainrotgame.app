import { content as globalContent } from "@/config/content";

export const cheeseChompersContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Cheese Chompers 3D: The Ultimate Rat Knockout Adventure!",
    game: {
      url: '/cheese-chompers-3d.embed',
      title: "cheesechompers3d",
      externalUrl: '/game/cheesechompers3d/index.html'
    },
    description: `Welcome to cheese chompers 3d, the funniest and wildest rat game online! In cheese chompers 3d, you become a silly rat in a big 3D world. You can run, jump, flip, and knock out other rats. cheese chompers 3d is full of action, laughs, and surprises. Every time you play cheese chompers 3d, you find something new. The world of cheese chompers 3d is always changing. There are secret places, hidden cheese, and funny moments. cheese chompers 3d is not just a game, it is a wild adventure. Are you ready to join the cheese chompers 3d world?` 
  },

  // 特性部分配置
  features: {
    // Title reflecting the new game concept
    title: "Why Cheese Chompers 3D is So Much Fun!",
    items: [
      {
        // Highlights the core knockout gameplay with rats
        title: "Big 3D Arena",
        description: `cheese chompers 3d gives you a huge arena to run, jump, and knock out other rats. There are cheese piles, spinning platforms, and secret spots. Every place in cheese chompers 3d is different. You can explore for hours and always find something new. The world of cheese chompers 3d is full of color and life. You never get bored in cheese chompers 3d.`
      },
      {
        // Explains its origin and unique theme
        title: "Silly Physics",
        description: `In cheese chompers 3d, rats can fly, bounce, and crash. Every move is funny and wild. The physics in cheese chompers 3d make every game different. Sometimes you jump so high you see the whole arena! Sometimes you smash into things and send them flying. cheese chompers 3d is full of silly moments. You will laugh a lot in cheese chompers 3d.`
      },
      {
        // Focuses on a key game mechanic
        title: "Easy to Play, Hard to Master",
        description: `cheese chompers 3d is simple to start. Use your keyboard or screen to move, jump, and flip. But to be the best in cheese chompers 3d, you need skill. Learn how to use flips, find secret cheese, and master every arena. cheese chompers 3d is easy for everyone, but only the best rats win!`
      },
      {
        // Highlights a satisfying visual/gameplay element
        title: "No Waiting, Just Play",
        description: `cheese chompers 3d is online. No download. Just click and play. You can start cheese chompers 3d in seconds. Play for five minutes or five hours. cheese chompers 3d is always ready for you.`
      },
      {
        // Emphasizes accessibility and core keywords
        title: "Many Rats, Many Styles",
        description: `Pick your favorite rat in cheese chompers 3d. Each rat looks cool and has its own style. Some rats are fast, some are strong, some are just silly. Try them all in cheese chompers 3d. You can even find secret rats if you explore enough!`
      },
      {
        // Emphasizes accessibility and core keywords
        title: "Play Alone or With Friends",
        description: `cheese chompers 3d lets you play solo or battle friends. Every game is different! You can challenge your friends to see who is the best rat in cheese chompers 3d. Or play alone and try to beat your own high score. cheese chompers 3d is fun for everyone.`
      },
      {
        // Emphasizes accessibility and core keywords
        title: "Game Modes",
        description: `cheese chompers 3d has many ways to play. Try solo mode, battle mode, adventure mode, or time challenge. Each mode in cheese chompers 3d is full of surprises. You can always find a new way to play cheese chompers 3d.`
      }
    ]
  },
  
  whatIs: {
    // Title clearly defines the game type
    title: "What is Cheese Chompers 3D?",
    // Description based on the "knockout rat game" info
    description: `cheese chompers 3d is a wild online game. You are a silly rat in a big 3D arena. You can run fast, jump high, and knock out other rats. cheese chompers 3d is full of action and surprises. Every time you play, something new can happen. You can find cheese, secret places, and funny moments. cheese chompers 3d is about having fun, being silly, and trying to be the best rat in the arena.\n\nThe story of cheese chompers 3d starts in a busy city. One day, a magic cheese gives the rats super powers. Now, the rats can jump super high, run super fast, and knock out anything in their way. The rats in cheese chompers 3d love to compete. Who will be the cheesiest rat? That is up to you!\n\nIn cheese chompers 3d, you can meet many rats. Some are brave, some are silly, some just want to have fun. You can make your rat the hero of cheese chompers 3d. The world is big and full of secrets. cheese chompers 3d is always changing. New arenas, new cheese, and new adventures are waiting for you.`,
    logo: {
      // Image path unchanged
      src: "/assets/img/android-chrome-512x512.png",
      // Alt text updated for the new game concept and keywords
      alt: "Cheese Chompers 3D Logo"
    }
  },
  
  howToPlay: {
    // Title reflecting the knockout gameplay
    title: "How to Play Cheese Chompers 3D: The Ultimate Guide!",
    // Description focused on knockout mechanics
    description: `1. Start cheese chompers 3d and pick your rat.\n2. Use WASD or arrow keys to move.\n3. Jump with spacebar.\n4. Flip in the air for a speed boost.\n5. Knock out other rats to score points.\n6. Collect cheese to get stronger or faster.\n7. Try to stay in the arena and be the last rat standing.\n8. Explore the world of cheese chompers 3d and find secrets!\n\nAdvanced Tips for cheese chompers 3d:\n- Learn each arena. cheese chompers 3d has many maps, each with its own tricks.\n- Use flips at the right time. Some flips in cheese chompers 3d can change the game.\n- Watch out for traps and moving floors. cheese chompers 3d arenas are full of surprises.\n- Try every rat. Each rat in cheese chompers 3d is different.\n- Practice jumping and flipping. The best rats in cheese chompers 3d are always moving!\n\nGame Modes in cheese chompers 3d:\n- Solo Mode: Play alone and try to get the highest score.\n- Battle Mode: Fight other rats and be the last one standing.\n- Adventure Mode: Explore the world and find secrets.\n- Time Challenge: How fast can you finish the arena?\n\ncheese chompers 3d is easy to start, but there is always more to learn!`,
    // Image path unchanged - I am keeping the placeholder you had. If you have a more relevant image for a rat knockout game, you'd update this path.
    image: "/assets/cheese-chompers-3d/cheese-chompers-3d.png",
    // Alt text updated
    imageAlt: "How to Play Cheese Chompers 3D - Game Guide"
  },
  
  faq: {
    // Title updated
    title: "Cheese Chompers 3D: FAQ",
    items: [
      {
        value: "what-is-cheese-chompers-3d",
        question: "What is cheese chompers 3d?",
        answer: "cheese chompers 3d is an online 3D rat game. You run, jump, flip, and knock out other rats in a big arena."
      },
      {
        value: "is-it-free",
        question: "Is cheese chompers 3d free?",
        answer: "Yes! cheese chompers 3d is free to play online."
      },
      {
        value: "can-i-play-with-friends",
        question: "Can I play cheese chompers 3d with friends?",
        answer: "Yes! You can play alone or with friends in cheese chompers 3d."
      },
      {
        value: "what-are-flips",
        question: "What are flips in cheese chompers 3d?",
        answer: "Flips make your rat go faster and help you knock out other rats in cheese chompers 3d."
      },
      {
        value: "how-to-win",
        question: "How do I win in cheese chompers 3d?",
        answer: "Be the last rat in the arena or get the highest score in cheese chompers 3d!"
      },
      {
        value: "are-there-secrets",
        question: "Are there secrets in cheese chompers 3d?",
        answer: "Yes! cheese chompers 3d is full of secret places, hidden cheese, and funny surprises. Explore everywhere!"
      },
      {
        value: "can-i-customize-my-rat",
        question: "Can I customize my rat in cheese chompers 3d?",
        answer: "Yes! cheese chompers 3d lets you find secret rats and costumes. Try to unlock them all!"
      },
      {
        value: "what-platforms",
        question: "What platforms can I play cheese chompers 3d on?",
        answer: "cheese chompers 3d works on computers, tablets, and phones. Play anywhere!"
      },
      {
        value: "is-there-a-community",
        question: "Is there a community for cheese chompers 3d?",
        answer: "Yes! cheese chompers 3d has players from all over the world. Share your best scores and funny moments!"
      }
    ]
  },

  about: {
    title: "The World of Cheese Chompers 3D",
    description: `cheese chompers 3d is set in a big, bright arena. There are cheese piles, spinning platforms, and secret spots. Sometimes you play in a city, sometimes in a cheese cave, sometimes in a funny barn. Every place in cheese chompers 3d has new things to find. The rats in cheese chompers 3d are all different. Some are fast, some are strong, some are just silly. You can try them all and see which one you like best. cheese chompers 3d is always full of surprises.\n\nMaps in cheese chompers 3d:\n- Cheese Arena: Big space for running and knocking out rats.\n- City Rooftop: Watch out for moving platforms!\n- Cheese Cave: Find hidden cheese and secret doors.\n\ncheese chompers 3d is always adding new maps and features. Come back often to see what's new!`,
  },

  tips: {
    title: "Tips for Cheese Chompers 3D",
    items: [
      {
        title: "Jump and Flip a Lot",
        description: "In cheese chompers 3d, jumping and flipping helps you dodge and knock out other rats. Try to jump and flip often!"
      },
      {
        title: "Look for Cheese",
        description: "cheese chompers 3d has cheese hidden in the arena. Grab it to get stronger."
      },
      {
        title: "Watch the Arena",
        description: "cheese chompers 3d arenas have traps and moving parts. Stay alert!"
      },
      {
        title: "Try Every Rat",
        description: "Each rat in cheese chompers 3d is different. Try them all to find your favorite."
      },
      {
        title: "Have Fun!",
        description: "cheese chompers 3d is about fun. Don't worry if you lose. Just play again!"
      },
      {
        title: "Share Your Stories",
        description: "cheese chompers 3d is full of funny moments. Share your best stories with friends!"
      },
      {
        title: "Find the Secrets",
        description: "cheese chompers 3d has many secrets. Look everywhere and try to find them all!"
      }
    ]
  },

  testimonials: {
    title: "Players Love Cheese Chompers 3D",
    items: [
      {
        name: "Alex",
        quote: "cheese chompers 3d is so much fun! I like knocking out other rats and jumping high."
      },
      {
        name: "Sam",
        quote: "Every game in cheese chompers 3d is different. I always find something new!"
      },
      {
        name: "Jessie",
        quote: "cheese chompers 3d makes me laugh every time. The rats are so silly!"
      },
      {
        name: "Taylor",
        quote: "cheese chompers 3d has the best maps. I love the cheese cave and the city rooftop!"
      },
      {
        name: "Morgan",
        quote: "I found a secret rat in cheese chompers 3d! It was awesome."
      }
    ]
  },

  community: {
    title: "Join the Cheese Chompers 3D Community",
    description: `cheese chompers 3d has players from all over the world. Share your best scores, funny moments, and cool rat pictures. cheese chompers 3d is more fun when you play together.\n\nTips for the community:\n- Post your best scores online.\n- Share screenshots of funny moments in cheese chompers 3d.\n- Make new friends who love cheese chompers 3d.\n- Suggest new ideas for maps, rats, and cheese.\n\nThe cheese chompers 3d community is always growing. Join us and be part of the fun!`,
  }
};

