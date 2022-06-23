const fillers = {
    medium: ["novel", "movie", "game", "painting", "screenplay", "anime"],
    adventurer: ["dudes", "bros", "adventurers", "travellers", "fellows", "citizens", "Ashen Ones", "Dragonborn", "Tarnished", "$adventurer and $adventurerAdj $adventurer", "$adventurer, $adventurer, and $adventurer", "Gamers"],
    adventurerAdj: ["FortKnight", "cool", "demon-hunting", "pro", "novice"],
    pre: ["Fra", "Tro", "Gre", "Pan", "Ast", "Ara"],
    post: ["gria", "ston", "gott","-on-the-lee", "ora", "Ara", "uwu"],
    people: ["fire", "air", "water", "wizard", "sacred", "cherished", "honored", "forgotten", "apathetic", "mystic", "orca"],
    group: ["clan", "tribe", "tower", "village", "town"],
    item: ["axes", "staves", "books", "cloaks", "shields", "clubs", "swords", "magic gloves", "galvels", "fists", "maces", "potatoes"],
    num: ["two", "three", "eleven", "so many", "too many", "an unsatisfying number of", "barely any", "an unspecified amount of", "surely a satisfactory number of"],
    looty: ["gleaming", "valuable", "esteemed", "rare", "exalted", "scintillating", "kinda gross but still useful", "complete garbage"],
    loots: ["coins", "chalices", "ingots", "hides", "victory points", "gems","scrolls", "bananas", "noodles", "goblins", "CS Majors", "college credits"],
    baddies: ["orcs", "glubs", "fishmen", "cordungles", "mountain trolls", "college professors", "dragon", "evil $adventurer", "agents of chaos"],
    intro: ["Check out this new $medium!", "Have you heard about this $medium coming out?"],
    objective: ["quest", "bounty", "mission", "task"],
    action: ["slay", "befriend", "do battle with", "search for", "investigate"],
    hook: ["It's got", "It's about", "There's", "So"],
    origin: ["from $pre$post", "of the $people $group"],
    end: ["...wait! I can't spoil it", "they find $looty $loots to gear up", "they have an epic battle against even more $baddies"]
  };
  
  const template = `$intro
  
  $hook $num $adventurerAdj $adventurer $origin, and they are on a $objective to $action $num $baddies using $item!
  
  The best part is when $end!
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;

    let grammar = tracery.createGrammar(spellbook);
    console.log(grammar.flatten('#origin#'))
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
