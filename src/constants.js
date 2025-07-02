export const DECKS = {
  BLUE: {
    resources: {
      sword: 3,
      scroll: 9,
      shield: 5,
      jump: 6,
      arrow: 7,
      combo: [{ scroll: 2 }, { scroll: 2 }],
    },
    actions: [
      { name: 'CANCEL', description: 'Cancel any Event', count: 1 },
      {
        name: 'MAGIC BOMB',
        description: 'Counts as one of each Resource. (Arrow, Sword etc.)',
        count: 3,
      },
      { name: 'FIREBALL', description: 'Defeat a Monster', count: 4 },
    ],
  },
  GREEN: {
    resources: {
      sword: 4,
      scroll: 4,
      shield: 3,
      jump: 7,
      arrow: 9,
      combo: [{ arrow: 2 }, { arrow: 2 }],
    },
    actions: [
      {
        name: 'WILD CARD',
        description: 'Counts as any Resource (Arrow, Sword etc.)',
        count: 8,
      },
      {
        name: 'HEALING HERBS',
        description:
          'Choose a player to draw 4 cards from the top of their discard pile',
        count: 2,
      },
      { name: 'SNIPE', description: 'Defeat a Person', count: 1 },
    ],
  },
  PURPLE: {
    resources: {
      sword: 7,
      scroll: 6,
      shield: 5,
      jump: 7,
      arrow: 3,
      combo: [{ jump: 2 }, { jump: 2 }, { jump: 2 }],
    },
    actions: [
      { name: 'SPRINT', description: 'Defeat an Obstacle', count: 3 },
      {
        name: 'BACKSTAB',
        description: 'Defeat a Person',
        count: 3,
      },
      {
        name: 'DONATION',
        description: 'Give your hand to another player',
        count: 1,
      },
      {
        name: 'STEAL',
        description: "Steal another player's hand. (Add it to your own.)",
        count: 2,
      },
    ],
  },
  RED: {
    resources: {
      sword: 5,
      scroll: 3,
      shield: 7,
      jump: 6,
      arrow: 5,
      combo: [
        { sword: 2 },
        { sword: 2 },
        { sword: 1, arrow: 1 },
        { sword: 1, arrow: 1 },
        { sword: 1, jump: 1 },
        { sword: 1, jump: 1 },
        { sword: 1, scroll: 1 },
        { sword: 1, scroll: 1 },
        { sword: 1, shield: 1 },
        { sword: 1, shield: 1 },
      ],
    },
    actions: [
      {
        name: 'ENRAGE',
        description: 'Choose 2 players to draw 3 cards each',
        count: 2,
      },
      {
        name: 'MIGHTY LEAP',
        description: 'Defeat an Obstacle',
        count: 2,
      },
    ],
  },
  YELLOW: {
    resources: {
      sword: 6,
      scroll: 8,
      shield: 9,
      jump: 3,
      arrow: 6,
      combo: [{ shield: 2 }, { shield: 2 }],
    },
    actions: [
      { name: 'HOLY HAND GRENADE', description: 'Defeat any card', count: 1 },
      {
        name: 'SMITE',
        description: 'Defeat a Monster',
        count: 1,
      },
      {
        name: 'HEAL',
        description:
          'Choose a player to put their discard pile back on top of their draw pile.',
        count: 1,
      },
      {
        name: 'DIVINE SHIELD',
        description:
          'Pause time until someone plays a card. All players draw 1 card.',
        count: 2,
      },
    ],
  },
};

export const DOORS = [
  {
    name: 'A TIMBER-WOLF',
    health: {
      sword: 2,
    },
    type: 'monster',
  },
  {
    name: 'A RATHER UNPLEASANT PHEASANT',
    health: {
      sword: 1,
      scroll: 1,
    },
    type: 'monster',
  },
  {
    name: 'GORBLIN',
    health: {
      sword: 1,
      jump: 1,
    },
    type: 'person',
  },
  {
    name: 'A CREATURE OF UNFATHOMABLE EVIL',
    health: {
      sword: 1,
      shield: 1,
    },
    type: 'person',
  },
  {
    name: 'UUGGHH...BOOTS',
    health: {
      sword: 1,
      arrow: 1,
    },
    type: 'monster',
  },
  {
    name: 'INVISIBLE WALL',
    health: {
      scroll: 2,
    },
    type: 'obstacle',
  },
  {
    name: 'JUST A BUNCH OF STAIRS',
    health: {
      scroll: 1,
      jump: 1,
    },
    type: 'obstacle',
  },
  {
    name: 'A STRAIGHT-UP GHOST',
    health: {
      scroll: 1,
      shield: 1,
    },
    type: 'monster',
  },
  {
    name: 'AN ARM DEALER',
    health: {
      scroll: 1,
      arrow: 1,
    },
    type: 'person',
  },
  {
    name: 'BOTTOMLESS PIT',
    health: {
      jump: 2,
    },
    type: 'obstacle',
  },
  {
    name: 'A ROSETTA STONE-GOLEM',
    health: {
      jump: 1,
      shield: 1,
    },
    type: 'monster',
  },
  {
    name: 'ADORABLE SLIME',
    health: {
      jump: 1,
      arrow: 1,
    },
    type: 'monster',
  },
  {
    name: 'JACK THE RIPPER IN A BOX',
    health: {
      shield: 2,
    },
    type: 'monster',
  },
  {
    name: 'A WARRIOR PRINCESS',
    health: {
      shield: 1,
      arrow: 1,
    },
    type: 'person',
  },
  {
    name: 'GRIFFIN-DOOR',
    health: {
      arrow: 2,
    },
    type: 'monster',
  },
  {
    name: 'LOTS AND LOTS OF ZOMBIES',
    health: {
      sword: 3,
    },
    type: 'monster',
  },
  {
    name: 'MASSIVE PAULDRONS',
    health: {
      sword: 2,
      scroll: 1,
    },
    type: 'person',
  },
  {
    name: 'A SLEEPING GIANT',
    health: {
      sword: 2,
      jump: 1,
    },
    type: 'monster',
  },
  {
    name: 'BARBER-ARIAN',
    health: {
      sword: 2,
      shield: 1,
    },
    type: 'person',
  },
  {
    name: 'A "GHOST"',
    health: {
      sword: 2,
      arrow: 1,
    },
    type: 'person',
  },
  {
    name: 'COLLAPSED CEILING',
    health: {
      sword: 1,
      scroll: 2,
    },
    type: 'obstacle',
  },
  {
    name: 'A LITERAL STRAWMAN',
    health: {
      sword: 1,
      scroll: 1,
      jump: 1,
    },
    type: 'obstacle',
  },
  {
    name: '7 UNHELPFUL DWARFS',
    health: {
      sword: 1,
      scroll: 1,
      shield: 1,
    },
    type: 'person',
  },
  {
    name: 'THE NECROBOUNCER',
    health: {
      sword: 1,
      scroll: 1,
      arrow: 1,
    },
    type: 'obstacle',
  },
  {
    name: 'THE CHROMICORN',
    health: {
      sword: 1,
      jump: 2,
    },
    type: 'obstacle',
  },
  {
    name: 'A CHAIR THAT IS VERY UNCOMFORTABLE',
    health: {
      sword: 1,
      jump: 1,
      shield: 1,
    },
    type: 'obstacle',
  },
  {
    name: 'A VERY LONG LOADING SCREEN',
    health: {
      sword: 1,
      jump: 1,
      arrow: 1,
    },
    type: 'obstacle',
  },
  {
    name: 'A "SHORTCUT"',
    health: {
      sword: 1,
      shield: 2,
    },
    type: 'obstacle',
  },
  {
    name: 'A GAGGLE OF SCREAMING CHILDREN',
    health: {
      sword: 1,
      shield: 1,
      arrow: 1,
    },
    type: 'person',
  },
  {
    name: 'SHARK WITH LEGS!!',
    health: {
      sword: 1,
      arrow: 2,
    },
    type: 'monster',
  },
  {
    name: 'LIVING VINES',
    health: {
      scroll: 3,
    },
    type: 'obstacle',
  },
  {
    name: 'AN OVERPRICED MERCHANT',
    health: {
      scroll: 2,
      jump: 1,
    },
    type: 'person',
  },
  {
    name: 'WALL OF SPIKES',
    health: {
      scroll: 2,
      shield: 1,
    },
    type: 'obstacle',
  },
  {
    name: 'AN OVERLY DRAMATIC MONOLOGUE',
    health: {
      scroll: 2,
      arrow: 1,
    },
    type: 'person',
  },
  {
    name: 'EXACTLY 26 NINJAS',
    health: {
      scroll: 1,
      jump: 2,
    },
    type: 'person',
  },
  {
    name: 'THE DUCK OF CANTERBURY',
    health: {
      scroll: 1,
      jump: 1,
      shield: 1,
    },
    type: 'monster',
  },
  {
    name: 'STEVE',
    health: {
      scroll: 1,
      jump: 1,
      arrow: 1,
    },
    type: 'person',
  },
  {
    name: 'EEEEWWWWWWW...',
    health: {
      scroll: 1,
      shield: 2,
    },
    type: 'monster',
  },
  {
    name: 'A TERRIBLE, NO-GOOD, AWFUL PUPPET SHOW',
    health: {
      scroll: 1,
      shield: 1,
      arrow: 1,
    },
    type: 'person',
  },
  {
    name: 'THE CARPAL TUNNEL',
    health: {
      scroll: 1,
      arrow: 2,
    },
    type: 'obstacle',
  },
  {
    name: 'A LUDICROUSLY LARGE WALL OF ICE',
    health: {
      jump: 3,
    },
    type: 'obstacle',
  },
  {
    name: 'QUICKSAND',
    health: {
      jump: 2,
      shield: 1,
    },
    type: 'obstacle',
  },
  {
    name: 'A DEFINITLY NOT BOOBY-TRAPPED CHEST',
    health: {
      jump: 1,
      shield: 2,
    },
    type: 'obstacle',
  },
  {
    name: 'GROZZNAK THE WALL',
    health: {
      jump: 1,
      shield: 1,
      arrow: 1,
    },
    type: 'person',
  },
  {
    name: 'SIR FUZZYLUMPS',
    health: {
      jump: 1,
      arrow: 2,
    },
    type: 'monster',
  },
  {
    name: 'A SURPRISE DODGEBALL TOURNAMENT',
    health: {
      jump: 2,
      arrow: 1,
    },
    type: 'obstacle',
  },
  {
    name: 'A CACTUS THAT WANTS A HUG',
    health: {
      shield: 3,
    },
    type: 'monster',
  },
  {
    name: 'SQUIRE NEDWARD',
    health: {
      shield: 2,
      arrow: 1,
    },
    type: 'person',
  },
  {
    name: 'TWO GUYS, ONE BOW',
    health: {
      shield: 1,
      arrow: 2,
    },
    type: 'monster',
  },
  {
    name: "JACKED O'LANTERNS",
    health: {
      arrow: 3,
    },
    type: 'monster',
  },
  {
    name: 'A DEADLY GAME OF HOPSCOTCH',
    health: {
      jump: 2,
      arrow: 1,
    },
    type: 'obstacle',
  },
  {
    name: 'GAB-ERWOCKY',
    health: {
      scroll: 1,
      arrow: 1,
      sword: 1,
    },
    type: 'monster',
  },
  {
    name: 'A SUSPICIOUS LOOKING CRATE',
    health: {
      shield: 1,
      sword: 1,
      scroll: 1,
    },
    type: 'obstacle',
  },
  {
    name: 'DISAPPEARING PLATFORMS',
    health: {
      jump: 1,
      arrow: 1,
      scroll: 1,
    },
    type: 'obstacle',
  },
  {
    name: 'A PRINT-AND-PLAY CARD GAME',
    health: {
      shield: 2,
      sword: 1,
    },
    type: 'obstacle',
  },
];

export const CHALLENGES = [
  {
    name: 'AMBUSH',
    description:
      'Flip over the next 2 Dungeon Cards. You must defeat both before moving on.',
  },
  {
    name: 'A BOO-BOO',
    description: 'All players: Discard a card',
  },
  {
    name: 'CONFUSION',
    description: 'All players: Pass your hand to another player',
  },
  {
    name: 'SUDDEN ILLNESS',
    description: 'All players: Discard your hand',
  },
  {
    name: 'TRAP DOOR',
    description: 'All players: Discard 3 cards',
  },
  {
    name: 'GIMME A HAND!',
    description: 'All players: Pass your hand to the same player',
  },
  {
    name: 'LOCKED DOOR!',
    description:
      'Pick a Resource (Arrow, Sword etc.). All players must discard all cards with that Resource.',
  },
  {
    name: 'AN UNGODLY AMOUNT OF PORCUPINES',
    description: 'All players: Draw 3 cards then discard 3 cards',
  },
  {
    name: 'DUNGEON ERROR IN YOUR FAVOR',
    description: 'All players: Draw 5 cards',
  },
  {
    name: 'YET MORE SPIKES!',
    description: 'Choose a player to discard their hand',
  },
];

export const MINI_BOSSES = [
  {
    name: 'DAS BOOT!',
    health: {
      sword: 2,
      jump: 3,
    },
    type: 'mini_boss',
  },
  {
    name: 'A LOW-TECH MECH',
    health: {
      sword: 2,
      arrow: 3,
    },
    type: 'mini_boss',
  },
  {
    name: 'THE GOBLIN KING',
    health: {
      scroll: 2,
      shield: 2,
      sword: 1,
    },
    type: 'mini_boss',
  },
  {
    name: 'A VERY MINI MINI-BOSS',
    health: {
      jump: 1,
      shield: 1,
      scroll: 1,
    },
    type: 'mini_boss',
  },
  {
    name: 'THE DREADED TRI-BREAD',
    health: {
      jump: 2,
      scroll: 1,
      arrow: 2,
    },
    type: 'mini_boss',
  },
  {
    name: 'A MINIATURE T-REX',
    health: {
      shield: 2,
      arrow: 2,
      sword: 2,
    },
    type: 'mini_boss',
  },
  {
    name: 'THE COLLECTOR',
    health: {
      shield: 1,
      arrow: 1,
      sword: 1,
      scroll: 1,
      jump: 1,
    },
    type: 'mini_boss',
  },
  {
    name: 'A WIZARD OF ILL REPUTE',
    health: {
      scroll: 4,
      jump: 2,
    },
    type: 'mini_boss',
  },
  {
    name: 'THE RAT KING',
    health: {
      sword: 3,
      jump: 3,
    },
    type: 'mini_boss',
  },
  {
    name: 'GIANT ENEMY CRAB',
    health: {
      arrow: 3,
      shield: 3,
    },
    type: 'mini_boss',
  },
];

export const BOSSES = [
  {
    name: 'BABY BARBARIAN',
    level: 1,
    health: {
      sword: 2,
      arrow: 2,
      jump: 3,
    },
  },
  {
    name: 'THE GRIME REAPER',
    level: 2,
    health: {
      scroll: 7,
      shield: 3,
    },
  },
  {
    name: 'ZOLA THE GORGON',
    level: 3,
    health: {
      sword: 4,
      shield: 3,
      jump: 3,
    },
  },
  {
    name: "A FREAKIN' DRAGON!!!",
    level: 4,
    health: {
      sword: 1,
      arrow: 5,
      jump: 4,
      shield: 1,
    },
  },
  {
    name: 'THE DUNGEON MASTER',
    level: 5,
    health: {
      sword: 3,
      arrow: 3,
      shield: 3,
      scroll: 3,
    },
  },
  {
    name: 'THE K.I.C.K. 9000',
    level: 6,
    health: {
      sword: 4,
      arrow: 4,
      jump: 1,
      shield: 2,
    },
  },
  {
    name: 'THE DUNGEON MASTER (FINAL FORM)',
    level: 7,
    health: {
      sword: 2,
      arrow: 2,
      jump: 4,
      scroll: 5,
      shield: 2,
    },
  },
];
