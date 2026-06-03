import { BookSummary } from "./types";

export const preCuratedBooks: BookSummary[] = [
  {
    id: "huckleberry-finn",
    title: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
    era: "1884",
    oneSentenceSummary: "An orphaned boy and a runaway slave forge an forbidden alliance of humanity and survival while rafting down the mighty Mississippi River.",
    introduction: "Mark Twain’s masterpiece is not merely a panoramic portrait of pre-Civil War America, but a shattering indictment of the social structures that sustained the Institution of Slavery. Set against the moving canvas of the Mississippi River, the novel acts as a profound meditation on the conflict between natural human empathy and a diseased, codified 'civilized' conscience.",
    themes: [
      {
        name: "Natural Empathy vs. Institutionalized Conscience",
        description: "Throughout his journey, Huck undergoes a critical internal dialectic: the battle between his natural moral compass and the corrupt social, religious, and legal codes of the Antebellum South that he has been conditioned to believe are divine laws. He repeatedly chastises himself for doing the 'wrong' thing—helping Jim escape—unable to consciously articulate that his inner morality is infinitely superior to society's legal cruelty.",
        quote: "That’s just the way: a person does a low-down thing, and then he don't want to take no consequences of it."
      },
      {
        name: "The River as an Egalitarian Sanctuary",
        description: "The Mississippi River, particularly when navigated upon the raft, represents an alternative moral universe. Free from the social stratification, hypocrisy, and violence of the riverbanks, the raft becomes a space of pure communion, equality, and brotherhood for Huck and Jim—an island of peace that stands in stark opposition to the chaotic and predatory settlements ashore.",
        quote: "We said there warn't no home like a raft, after all. Other places do seem so cramped up and smothery, but a raft don't."
      },
      {
        name: "The False Romanticism of Aristocracy and Violence",
        description: "Twain ruthlessly parodies the romantic traditions of European literature (which he largely blamed on Sir Walter Scott). Through the Grangerford-Shepherdson blood feud and the theatrical operations of the King and the Duke, the novel exposes how romantic concepts of 'honor,' 'royalty,' and 'aristocracy' are used to mask hollow, violent, and exploitative behavior.",
        quote: "The men took their guns along... and kept them between their knees or stood them handy against the wall."
      }
    ],
    epicMoments: [
      {
        title: "The Ultimate Moral Transcendence: 'All Right, Then, I'll Go to Hell'",
        act: "Chapter 31",
        description: "Overcome by guilt for keeping Jim's escape secret, Huck writes a letter to Miss Watson revealing Jim’s whereabouts. Sitting in silence, Huck reflects on their time on the river, recalling Jim’s overwhelming kindness, loyalty, and declaration of love. Recognizing that society deems betraying Miss Watson as a mortal sin, Huck makes his decision: he tears up the letter, choosing eternal damnation out of pure devotion to Jim's freedom.",
        impact: "This is the absolute moral climax of the novel. Huck accepts the ultimate metaphysical penalty ('hell') to commit what his heart knows is the only real good, demonstrating the total inversion of moral values in a slave-owning society."
      },
      {
        title: "Navigating the Blinding Mist: The Great Separation",
        act: "Chapter 15",
        description: "A thick, disorienting fog descends on the Mississippi, separating Huck in the canoe from Jim on the raft. The river's scale is rendered terrifying as Huck floats helplessly in the sightless void. When they magically reunite, Huck tries to play a cruel trick on Jim, claiming it was all a dream. An emotionally devastated Jim rebukes Huck's dishonesty, pointing out that true friends do not make fools of those who weep for their loss.",
        impact: "This confrontation forces Huck to see Jim as a complex human being with deep emotions and dignified self-respect, leading Huck to humble himself and apologize to a black man—a monumental step in his moral awakening."
      },
      {
        title: "The Grangerford Feud: The Siphon of Romancified Blood",
        act: "Chapters 17–18",
        description: "Huck is taken in by the Grangerford family, who live in aristocratic luxury. However, Huck is horrified to discover they are engaged in a multigenerational, senseless blood feud with the neighboring Shepherdsons. The tragedy explodes when a young Grangerford elopes with a Shepherdson, culminating in a brutal shootout on the riverbank where Huck participates by pulling his dying young friend, Buck, from the water.",
        impact: "This sequence serves as Twain’s ultimate deconstruction of 'Southern chivalry.' The tragic execution of young boys exposes the deadly pathology of code-bound violence built on forgotten slurs."
      }
    ],
    characterProfiles: [
      {
        name: "Huckleberry Finn",
        role: "Protagonist",
        archetype: "The Innocent Rogue / Natural Cynic",
        analysis: "A social outcast who lacks formal education but possesses an intuitive, uncorrupted sense of logic. Rather than acquiring a standard education, Huck relies on his streetwise pragmatism and observation to survive. His psychological arc is a continuous, painful battle to shed his internalized, prejudiced social conscience in favor of his inherent humanity."
      },
      {
        name: "Jim",
        role: "Co-Protagonist / Sanctuary Figure",
        archetype: "The Noble Protector / Saintly Fugitive",
        analysis: "A warm, resilient father figure who flees Miss Watson's estate to avoid being sold downriver, separating him from his beloved family. Jim is the emotional anchor of the novel. His wisdom is grounded in folklore and deep human empathy, demonstrating an capacity for unconditional love that contrasts sharply with the white adult characters Huck encounters."
      },
      {
        name: "Pap Finn",
        role: "Antagonist / Catalyst",
        archetype: "The Parasitic Sire / Savage Shadow",
        analysis: "Huck’s abusive, alcoholic father who represents the lowest, most rotten tier of frontier society. Pap's vicious rants against government, education, and black people encapsulate the toxic, ignorance-infused racism that sustains white supremacy. His threat of ultimate violence forces Huck to fake his own death and embark on the river."
      }
    ],
    quotes: [
      {
        text: "I about made up my mind to paper it all up and not tell Miss Watson; but I felt good and all washed clean of sin for the first time... and then I says, 'All right, then, I'll go to hell'—and tore it up.",
        speaker: "Huckleberry Finn",
        significance: "The defining line of American literature, representing the triumph of individual moral necessity over corrupted societal statutes."
      },
      {
        text: "People will call me a low-down Abolitionist and despise me for keeping mum—but that don't make no difference. I ain't a-going to tell, and I ain't a-going back there no more.",
        speaker: "Huckleberry Finn",
        significance: "Reflects Huck's early, absolute disavowal of civilized social judgment in favor of keeping his promise to Jim."
      },
      {
        text: "It was fifteen minutes before I could work myself up to go and humble myself to a nigger; but I done it, and I warn't ever sorry for it afterwards, neither.",
        speaker: "Huckleberry Finn",
        significance: "A pivotal psychological breakthrough where Huck overcomes the deeply-entrenched racial caste systems of his upbringing to acknowledge Jim's equal human dignity."
      }
    ]
  },
  {
    id: "the-odyssey",
    title: "The Odyssey",
    author: "Homer",
    era: "c. 8th Century BCE",
    oneSentenceSummary: "The legendary warrior Odysseus battles fearsome monsters, wrathful gods, and treacherous temptations to return home and reclaim his kingdom after the Trojan War.",
    introduction: "Homer’s epic poem is the monumental foundation stone of Western narrative literature. Tracking the ten-year voyage of a soldier returning from the ashes of Troy, the text is an immortal investigation of identity, family, justice, and the transformative power of intelligence ('metis') over brute cosmic forces.",
    themes: [
      {
        name: "Nostos (The Sacred Drive of Homecoming)",
        description: "Unlike the Iliad, which focuses on heroic glory ('kleos') achieved through death on the battlefield, the Odyssey celebrates 'nostos'—the drive to return home and preserve one's domestic and civic life. Odysseus rejects Calypso's offer of eternal youth and immortality on a paradise island, choosing instead to risk death on the sea to return to his mortal wife Penelope and his rocky, challenging home of Ithaca.",
        quote: "I pine for home, and long for the sight of it. Even if some god should wreck me again on the wine-dark sea..."
      },
      {
        name: "Xenia (The Cosmic Laws of Hospitality)",
        description: "In the Homeric world, hospitality ('xenia') is a sacred, divine mandate overseen by Zeus Xenios. It dictates that hosts must feed and shelter strangers before asking their names, and guests must respect the host's household. The poem serves as a moral sorting mechanism: civilized characters (like Eumaeus and Alcinous) uphold xenia, while barbarians (like Polyphemus) and corrupt citizens (the Suitors) violate it, leading to their divinely-sanctioned destruction.",
        quote: "No stranger or beggar is turned away from Ithaca, for all wanderers and beggars are sent by Zeus."
      },
      {
        name: "Metis (Cunning and Strategic Wit)",
        description: "Odysseus’s defining attribute is not physical strength, but his quick-witted intelligence, deception, and capability to endure. 'Metis' represents the power of mortal intellect to outmaneuver gods, monsters, and fate itself. From deceptive storytelling to physical disguises, survival in the Odyssey is contingent on hidden identities and strategic patience.",
        quote: "My name is Nobody; that is what my mother and father call me, and all my friends."
      }
    ],
    epicMoments: [
      {
        title: "Outwitting Polyphemus: The Deception of 'Nobody'",
        act: "Book IX",
        description: "Trapped in the cave of the giant Cyclops Polyphemus, who has eaten several of his men, Odysseus plans a brilliant escape. He plies the monster with potent wine and claims his name is 'Nobody' ('Outis'). Once the giant falls into a drunken stupor, Odysseus and his men drive a fiery olive-wood stake into his single eye. When Polyphemus screams to his kindred that 'Nobody is killing me by fraud or force!', they ignore his cries, allowing the Greeks to escape.",
        impact: "This sequence defines Odysseus's intellect and introduces his hamartia: as he sails away, his pride forces him to shout his real name, prompting Polyphemus to invoke Poseidon's curse, which condemns Odysseus to lose all his men and wander for a decade."
      },
      {
        title: "The Seduction of the Sirens: The Bound Hero",
        act: "Book XII",
        description: "To sail safely past the Sirens, whose ethereal, beautiful songs lure sailors to throw themselves to their deaths on the jagged rocks, Odysseus commands his men to plug their ears with beeswax. Spurred by an intellectual desire to hear the songs, he orders his crew to bind him tightly to the ship’s mast, with instructions to tie him tighter if he begs to be released. Hearing the Sirens promise total cosmic knowledge, Odysseus screams to be freed, but his loyal crew binds him tighter until the danger has passed.",
        impact: "This scene highlights the hero's curiosity, risk-taking, and calculated self-awareness, showing his ability to intellectualize desire and bypass danger through physical self-restraint."
      },
      {
        title: "The Great Bow and the Cleansing of Ithaca",
        act: "Books XXI–XXII",
        description: "Disguised as a dirty, older beggar, Odysseus enters his palace, which has been overrun by greedy, threatening suitors seeking Penelope's hand. Penelope announces she will marry whoever can string Odysseus's massive hunting bow and shoot an arrow through twelve axe-heads. The suitors fail in embarrassment. The beggar steps up, effortlessly strings the weapon, and looses the arrow perfectly. Shedding his rags, Odysseus stands on the threshold, blockades the exits, and begins the spectacular, relentless slaughter of the suitors.",
        impact: "A magnificent climax of tension and combat, restoring the divine cosmological order and reclaiming his role as husband, father, and absolute king of Ithaca."
      }
    ],
    characterProfiles: [
      {
        name: "Odysseus",
        role: "Protagonist",
        archetype: "The Wily Wanderer / Polytropos",
        analysis: "A master strategist, storyteller, warrior, and king. Odysseus's journey is a psychological transition from the destructive warrior of Troy to the humble survivor and restorer of family peace. He is defined by his capacity to suppress his impulses and endure hardship, valuing his identity as a father and king above divine immortality."
      },
      {
        name: "Penelope",
        role: "Co-Protagonist / Shield of Ithaca",
        archetype: "The Cunning Matriarch / Loyal Tactician",
        analysis: "Odysseus’s equal in wit, Penelope single-handedly preserves the throne of Ithaca for twenty years against aggressive, usurping suitors. She uses 'metis' equivalent to her husband's—most notably by weaving and unraveling Lord Laertes' shroud to delay major marriage decisions, and testing the returned Odysseus with the secret of their immovable matrimonial bed."
      },
      {
        name: "Telemachus",
        role: "Supporting Protagonist",
        archetype: "The Prince Coming of Age",
        analysis: "Odysseus's son, born as his father left for war. Telemachus begins the epic in a state of helpless despair, overshadowed by the suitors. His safe voyage to nestor and Menelaus (the 'Telemachy') forms a sub-narrative of maturation and self-actualization, preparing him to fight alongside his father as an equal peer."
      }
    ],
    quotes: [
      {
        text: "Tell me, Muse, of the man of many turns, who was driven far and wide after he had sacked the sacred citadel of Troy.",
        speaker: "Homer (Invocation)",
        significance: "The monumental opening lines of the epic, introducing Odysseus as 'polytropos' (of many paths or turns), marking his intellectual dexterity."
      },
      {
        text: "My name is Nobody. Nobody is my name... and that's what they call me.",
        speaker: "Odysseus",
        significance: "A masterpiece of language play ('Outis' sound-alike to 'Metis', cunning) that saves Odysseus's life from the Cyclopes and represents his strategic erasure of ego."
      },
      {
        text: "There is nothing more noble or more beautiful than when two people who see eye to eye keep house together, man and wife, confounding their enemies and delighting their friends.",
        speaker: "Odysseus",
        significance: "Expresses the ancient Greek ideal of 'homophrosyne'—like-mindedness between husband and wife, which is the emotional soul of his union with Penelope."
      }
    ]
  }
];
