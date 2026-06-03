import { BookSummary } from "./types";

export const preCuratedBooks: BookSummary[] = [
  {
    id: "huckleberry-finn",
    title: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
    era: "1884",
    genre: "Historical & Satirical Fiction",
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
    genre: "Epic Poetry & Mythology",
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
        analysis: "Odysseus's son, born as his father left for war. Telemachus begins the epic in a state of helpless despair, overshadowed by the suitors. His safe voyage to Nestor and Menelaus (the 'Telemachy') forms a sub-narrative of maturation and self-actualization, preparing him to fight alongside his father as an equal peer."
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
  },
  {
    id: "all-quiet-on-the-western-front",
    title: "All Quiet on the Western Front",
    author: "Erich Maria Remarque",
    era: "1929",
    genre: "War & Historical Fiction",
    oneSentenceSummary: "A young German soldier experiences horrific physical and psychological trauma in the trenches of World War I, stripping away all illusions of patriotic glory.",
    introduction: "Erich Maria Remarque's masterpiece is famously the most powerful and authentic anti-war novel of the twentieth century. Written from the perspective of an ordinary German infantryman, the work documents how industrialized mass-inflicted carnage completely dismantled a generation's spiritual anchors, domestic possibilities, and mental survival.",
    themes: [
      {
        name: "The Systematic Decimation of a Generation",
        description: "The novel focuses on 'The Lost Generation'—young boys who were pressured directly from school desks into the trenches by nationalistic teachers. Remarque demonstrates how those who survived physically were nonetheless psychologically destroyed, rendered incapable of returning to ordinary, civilian life, and permanently alienated from their pasts.",
        quote: "We are not youth any longer. We don't want to take the world by storm. We are fleeing. We fly from ourselves. From our life."
      },
      {
        name: "The Falsehood of Nationalist Honor",
        description: "In the trenches, abstract political ideals like national glory, heroism, and imperial honor are exposed as toxic lies. The soldiers quickly realize that the schoolmasters and politicians who preached patriotism are safely behind the front line lines, and survival depends purely on raw animal instinct, luck, and absolute solidarity with fellow recruits.",
        quote: "The first bombardment showed us our mistake, and under it the world as they had taught it to us broke in pieces."
      },
      {
        name: "The Shared Communion of Suffering",
        description: "Remarque paints a tragic human fraternity that extends beyond national barricades. Confronting enemy combatants directly in shell-holes, the protagonist realizes that the French, English, and German recruits are identical instruments of fate, driven by the same anxieties, carrying the same pictures of mothers and sweethearts, and suffering the exact same cosmic pain.",
        quote: "It is only because you are an abstraction to me, a concept that lived in my brain and called forth an appropriate response... Now I see you are a man like me."
      }
    ],
    epicMoments: [
      {
        title: "The Graveyard Bombardment",
        act: "Chapter 4",
        description: "While laying wire at the front lines, Paul's unit is suddenly caught in a catastrophic artillery bombardment. Seeking refuge in a nearby cemetery, the recruits are forced to dig into the ground, hiding among shattered coffins and freshly exposed skeletons to survive the rain of high explosives, finding a grotesque shelter in the wombs of death.",
        impact: "This scene functions as a chilling literal metaphor: the living must rely on the dead for protection, signifying the complete disruption of normal human sanctuary and the cyclical nature of battlefield consumption."
      },
      {
        title: "The Murder and Penance in the Shell-Hole",
        act: "Chapter 9",
        description: "Trapped in No Man's Land under heavy counter-fire, Paul crawls into a waterlogged crater. When a French soldier leaps in to take cover, Paul stabs him instinctively in terror. Forced to spend several agonizing hours trapped with the dying man (Gérard Duval) as he slowly gasps his last breath, Paul is overcome by profound remorse, reading Duval's personal letters and vowing to write to his family.",
        impact: "The emotional center of the novel. It represents the total collapse of military indoctrination, exposing the raw, tragic equality of human brotherhood under uniform colors."
      },
      {
        title: "Katczinsky's Final Wound: The Broken Shield",
        act: "Chapter 11",
        description: "Kat, the beloved old veteran, mentor, and provider of Paul's squad, is wounded in his shin. Paul laboriously carries his bleeding comrade on his back through miles of shelling to the safety of a medical station. But upon arrival, Paul is shattered to discover that during the trek, a tiny, stray piece of shrapnel had struck Kat in the temple, killing him instantly.",
        impact: "This loss represents the final severing of Paul's connection to survival. With Kat's sudden death, all remaining guidance, hope, and community are evaporated."
      }
    ],
    characterProfiles: [
      {
        name: "Paul Bäumer",
        role: "Protagonist",
        archetype: "The Fatalist Soldier",
        analysis: "An artistic, sensitive twenty-year-old German recruit who wanted to write poetry before entering the cataclysm. Paul becomes the tragic chronicler of his squad's extinction. To survive, he is forced to cultivate a profound emotional detachment ('military numbness'), yet his inner sensitivity breaks through in moments of profound sympathy."
      },
      {
        name: "Stanislaus Katczinsky (Kat)",
        role: "Mentor / Squad Leader",
        archetype: "The Resourceful Veteran",
        analysis: "A forty-year-old cobbler who becomes the spiritual father of Paul's squad. Kat possesses an uncanny, animalistic instinct for locating hot food, dry blankets, and predicting incoming artillery fire. He represents the survival of common sense and mutual care amidst absolute madness."
      },
      {
        name: "Kantorek",
        role: "Antagonist / Catalyst",
        archetype: "The Blind Jingoist",
        analysis: "Paul’s authoritarian schoolmaster who used passionate, empty slogans of war-glory to pressure Paul's entire classroom into volunteering for the army. He represents the systemic, old-world institutional hypocrisy that sacrificed young lives to sustain archaic national pride."
      }
    ],
    quotes: [
      {
        text: "We are not youth any longer. We don't want to take the world by storm. We are fleeing. We fly from ourselves. From our life. We were eighteen and had begun to love life and the world; and we had to shoot it to pieces.",
        speaker: "Paul Bäumer",
        significance: "Highlights the absolute dislocation of the 'Lost Generation,' who were deprived of building adult personalities before learning to destroy."
      },
      {
        text: "Forgive me, comrade. How could you be my enemy? If we threw away these rifles and these uniforms you could be my brother.",
        speaker: "Paul Bäumer (to Gérard Duval)",
        significance: "A direct plea for peace that dismantles the artificial divisions of war, acknowledging the underlying spiritual connection between conscripted foes."
      },
      {
        text: "He fell in October 1918, on a day that was so quiet and still on the whole front, that the army report confined itself to the single sentence: All quiet on the Western Front.",
        speaker: "Third Person Narrator",
        significance: "The devastating, ironic conclusion showing how a single human's ultimate tragedy is reduced to statistical silence in official military columns."
      }
    ]
  },
  {
    id: "the-catcher-in-the-rye",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    era: "1951",
    genre: "Coming-of-Age Fiction",
    oneSentenceSummary: "A disillusioned teenager wanders a cold and hypocritical New York City over a weekend, desperately seeking authentic human connection while resisting the inevitability of growing up.",
    introduction: "J.D. Salinger's classic remains the ultimate manifesto of adolescent alienation, grief, and psychological vulnerability. Written in the highly distinctive vernacular of Holden Caulfield, the story acts as a sharp critique of the post-war American social landscape while mourning the tragic loss of childhood innocence.",
    themes: [
      {
        name: "The Preservation of Childhood Innocence",
        description: "Holden is obsessed with shielding children from the harsh, corrupt realities of the adult world. This preoccupation stems from his unresolved grief over the death of his brilliant younger brother, Allie. Holden visualizes his ultimate calling as a protective guardian who catches children before they slide off a cliff into the hollow compromises of maturity.",
        quote: "I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff..."
      },
      {
        name: "Alienation as a Protective Shield",
        description: "Holden systematically alienates himself from his peers, teachers, and society, viewing them as disingenuous or 'phony.' However, this cynicism is fundamentally a protective defense mechanism: by refusing to engage genuinely with others, he immunizes his emotionally fragile psyche from the risks of rejection, intimacy, and pain.",
        quote: "I was sort of crying. I don't know why, but I was. I guess it was because I was feeling so damn depressed and lonesome."
      },
      {
        name: "The Hypocrisy and Commercialism of 'Phoniness'",
        description: "For Holden, 'phoniness' is the defining trait of adult behavior. It encompasses social vanity, theatrical emotional displays, commercial greed, and superficial relationships. He despises how adults perform social roles rather than expressing authentic human truth, making him seek shelter in the pure, unpretentious honesty of children.",
        quote: "It was one of the worst schools I ever went to. It was full of phonies... they didn't do anything but study so that you could be smart enough to buy a goddam Cadillac."
      }
    ],
    epicMoments: [
      {
        title: "The Physical Fracturing of Holden and Stradlater",
        act: "Chapter 6",
        description: "Holden waits anxiously in his dorm room for his roommate Stradlater, who has gone on a date with Jane Gallagher—a girl Holden deeply respects and romanticizes. When Stradlater returns and behaves with careless locker-room arrogance about Jane, Holden is consumed by a blind protective fury and attacks Stradlater. He is easily overpowered, left bloody on the floor, weeping at his inability to protect Jane's purity.",
        impact: "This violent conflict serves as Holden's breaking point, prompting him to pack his bags and flee Pencey Prep in the middle of the night, initiating his aimless New York odyssey."
      },
      {
        title: "The Disorienting Confrontation at Mr. Antolini's",
        act: "Chapter 24",
        description: "Holding Mr. Antolini in high academic and personal esteem, Holden seeks shelter at his house. The teacher offers sensible, deep guidance about Holden's intellectual tailspin. However, Holden wakes up in the middle of the night to find Mr. Antolini stroking his forehead. Terrified and interpreting this as a predatory 'phony' violation of trust, Holden flees into the cold night in a state of utter panic.",
        impact: "This scene strips Holden of his last adult ally, intensifying his psychological isolation and leading to a physical and emotional breakdown on the New York streets."
      },
      {
        title: "The Carousel and the Rain-Soaked Awakening",
        act: "Chapter 25",
        description: "Holden prepares to run away to the West, but meets his little sister Phoebe to say goodbye. Refusing to let him go alone, Phoebe packs her bags, forcing Holden to realize he must stay. He takes her to the Central Park carousel. As heavy rain falls, Holden sits on a bench, drenched, watching Phoebe ride the carousel and reach for the gold ring, feeling a sudden, pure, and overwhelming surge of joy.",
        impact: "The emotional resolution of the novel. Holden accepts that you must let children reach for the gold ring (growing up with all its risks) without trying to catch them; he finds peace in the simple beauty of the moment."
      }
    ],
    characterProfiles: [
      {
        name: "Holden Caulfield",
        role: "Protagonist",
        archetype: "The Fragile Cynic / Outcast Defender",
        analysis: "A sixteen-year-old expellee from various prestigious prep schools, grieving the death of his brother. Holden is incredibly observant and empathetic but hides beneath a crust of judgmental sarcasm. His central struggle is the fear of change and the existential panic of entering a complex adult world he does not trust."
      },
      {
        name: "Phoebe Caulfield",
        role: "Supporting Figure",
        archetype: "The Uncorrupted Child / Anchor",
        analysis: "Holden’s ten-year-old sister who represents the pure childhood innocence he seeks to preserve. Despite her youth, she is highly rational, intuitive, and critical, pointing out Holden's self-defeating behaviors and acting as his single anchor to reality and therapeutic recovery."
      },
      {
        name: "Allie Caulfield",
        role: "Sanctuary Spirit",
        archetype: "The Saintly Spirit / Lost Ideal",
        analysis: "Holden’s younger brother who died of leukemia years prior. Allie is described as incredibly intelligent, kind, and red-haired. He remains frozen in time, an untarnished saint whom Holden talks to when depressed, serving as the quiet catalyst for Holden's psychological arrest."
      }
    ],
    quotes: [
      {
        text: "I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff—I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I'd do all day. I'd just be the catcher in the rye and all.",
        speaker: "Holden Caulfield",
        significance: "The central metaphor of the novel, expressing Holden's desire to act as a savior who preserves the perfect sanctuary of childhood from the corruption of age."
      },
      {
        text: "The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one.",
        speaker: "Mr. Antolini (quoting Wilhelm Stekel)",
        significance: "A vital thematic warning to Holden, advising him to abandon his self-destructive romantic martyrdom and engage pragmatically with life."
      },
      {
        text: "Don't ever tell anybody anything. If you do, you start missing everybody.",
        speaker: "Holden Caulfield",
        significance: "The final, poignant line showing Holden's deep capacity for affection and the vulnerability that comes with breaking down your emotional barriers."
      }
    ]
  },
  {
    id: "fahrenheit-451",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    era: "1953",
    genre: "Dystopian & Sci-Fi Fiction",
    oneSentenceSummary: "In a sterile, high-tech future where literature is outlawed and 'firemen' burn all books, one fireman rebels after discovering the transformative power of the written word.",
    introduction: "Ray Bradbury’s lyrical dystopia is a terrifyingly prophetic warnings against the voluntary surrender of human intellect to passive, screen-based sensory overload. It champions the painful, messy beauty of deep contemplation and critical dissent over the comfortable, anesthetized happiness mandated by a totalitarian state.",
    themes: [
      {
        name: "The Anesthetic Power of Technology and Media",
        description: "In Montag's world, citizens are perpetually plugged into 'seashell' radios and surrounded by towering 'parlor walls' that broadcast mindless, sensational entertainment. Bradbury argues that technology, when used to eliminate silence and difficult thoughts, actively degrades the human capacity for reflection, memory, and genuine empathetic relationships.",
        quote: "No one has time any more for anyone else. You're one of the few who put up with me."
      },
      {
        name: "The Tyranny of Conformity vs. Intellectual Freedom",
        description: "The outlawing of books was not initially imposed by a dictator, but demanded by the public. Minority groups and citizens found different ideas offensive, leading society to voluntarily burn books to achieve a flat, uncontroversial conformity where no one is challenged or made to feel intellectually unequal.",
        quote: "We must all be alike. Not everyone born free and equal, as the Constitution says, but everyone made equal."
      },
      {
        name: "Literature as the Mirror of Human Complexity",
        description: "Through the academic mentor Faber, Bradbury outlines that books are not sacred simply because they are paper, but because of the quality, texture, and deep truths they contain. They represent a mirror that shows the cracks and pores of humanity—demanding that we look at our failures and achievements with rigorous honesty.",
        quote: "The good writers touch life often. The mediocre ones run a quick hand over her."
      }
    ],
    epicMoments: [
      {
        title: "The Martyring of the Old Woman and Her Books",
        act: "Part 1: The Hearth and the Salamander",
        description: "Responding to an alarm, Montag and his fellow firemen invade an old attic filled with hidden books. Instead of fleeing, the elderly owner refuses to leave her stash. Surrounded by kerosene, she strikes an ordinary kitchen match himself and commits suicide, burning alongside her books inside her own home.",
        impact: "This horrific scene shatters Montag's complacency. It proves to him that books must possess an immense, transcendent value if a person is willing to die to protect them, prompting him to hide his first stole novel."
      },
      {
        title: "The Burning of Montag's House and Beatty's Execution",
        act: "Part 3: Burning Bright",
        description: "Montag is betrayed by his wife, Mildred, and forced by Captain Beatty to systematically burn his own home with a flamethrower. Under Beatty's relentless verbal taunts and threats to hunt down Montag's mentor Faber, Montag turns the flamethrower directly onto Beatty, incinerating him, before running into the dark as a fugitive.",
        impact: "The ultimate climax of Montag's rebellion. He physically destroys his past, kills the representative of the burning state, and commits fully to the outlaw struggle."
      },
      {
        title: "The Exile Book-Men and the Phoenix of the Ash",
        act: "Part 3: Burning Bright",
        description: "Escaping the mechanical hound, Montag floats downriver and meets a community of wandering intellectuals led by Granger. Each member has memorized a complete book of literature or philosophy to preserve it for future generations. As a nuclear strike vaporizes the city behind them, they pack their camp and march back to rebuild society, inspired by the myth of the phoenix.",
        impact: "A hopeful, legendary conclusion, showing that while physical empires and technology easily collapse, the ideas and spirit preserved in human memory are immortal."
      }
    ],
    characterProfiles: [
      {
        name: "Guy Montag",
        role: "Protagonist",
        archetype: "The Waking Citizen / Seeker",
        analysis: "A third-generation fireman who takes pride in his work until a series of encounters awakens his crushed consciousness. Montag represents the ordinary citizen transitioning from intellectual sleep to revolutionary awareness, struggling to articulate his newly found thoughts against a suffocating culture."
      },
      {
        name: "Captain Beatty",
        role: "Antagonist",
        archetype: "The Corrupt Scholar / Nihilist",
        analysis: "The highly intelligent, well-read captain of the fire station. Beatty has read widely but concluded that books are contradictory, confusing, and destructive to public happiness. He uses his literary knowledge as a weapon to dismantle Montag's rebellion, representing a self-loathing, educated defender of systemic ignorance."
      },
      {
        name: "Clarisse McClellan",
        role: "Mentor / Catalyst",
        archetype: "The Pure Visionary / Seer",
        analysis: "A seventeen-year-old girl whose family practices the old, forgotten habits of walking, looking at nature, and talking. Her curiosity and simple question 'Are you happy?' destabilize Montag's entire paradigm, acting as the quiet spark that ignites his rebellion before her sudden disappearance."
      }
    ],
    quotes: [
      {
        text: "There must be something in books, things we can't imagine, to make a woman stay in a burning house; there must be something there. You don't stay for nothing.",
        speaker: "Guy Montag",
        significance: "Marks Montag's psychological break from his profession, recognizing that books are vessels of a vital human fire worth defending."
      },
      {
        text: "Do you know why books such as this are so important? Because they have quality. And what does the word quality mean? To me, it means texture. This book has pores. It has features. This book can go under the microscope. You'll find life under the glass, streaming past in infinite profusion.",
        speaker: "Faber (Professor of Literature)",
        significance: "Bradbury’s definition of great art—it is raw, detailed, containing the uncomfortable truth of human flaws rather than smooth, polished entertainment."
      },
      {
        text: "We must all be alike. Not everyone born free and equal, as the Constitution says, but everyone made equal. Each man the image of every other; then all are happy, for there are no mountains to make them cower, to judge themselves against.",
        speaker: "Captain Beatty",
        significance: "Exposes the psychological driver of totalitarian censorship: the democratic search for universal comfort achieved by purging intellectual differences."
      }
    ]
  },
  {
    id: "to-kill-a-mockingbird",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    era: "1960",
    genre: "Southern Gothic & Social Fiction",
    oneSentenceSummary: "A young girl in the Jim-Crow South learns profound lessons in empathy, systemic racism, and human integrity as her father defends a wrongly accused black man in a tragic trial.",
    introduction: "Harper Lee's Pulitzer Prize-winning Southern Gothic masterpiece is a cornerstone of American moral training. Blending a child's raw, curious growth with the toxic realities of racial prejudice, the novel serves as an eternal handbook on the courage required to stand for systemic justice.",
    themes: [
      {
        name: "The Moral Imperative of Compassionate Empathy",
        description: "The governing philosophy of the novel is Atticus's belief that true morality requires viewing reality from other people's perspectives. This empathy must be extended not only to the victims of systemic racial injustice, but also to the poor, the isolated, and even those blinded by generations of racial hatred.",
        quote: "You never really understand a person until you consider things from his point of view..."
      },
      {
        name: "The Destruction of the Innocent Mockingbird",
        description: "The mockingbird serves as the central moral symbol of the novel: a harmless creature that sings beautiful songs and brings only joy. To kill a mockingbird is a sin because they are entirely innocent. This symbol directly maps onto characters destroyed by societal cruelty, most notably Tom Robinson and Boo Radley.",
        quote: "Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird."
      },
      {
        name: "The Inherent Coexistence of Good and Evil",
        description: "Lee documents the moral awakening of Scout and Jem from a romanticized childhood world into a complex adult world plagued by deep racism, hatred, and social hierarchy. The novel argues that while moral depravity is a real force in social institutions, individual warmth and absolute ethical integrity can still survive.",
        quote: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand."
      }
    ],
    epicMoments: [
      {
        title: "Atticus Confronts the Lynch-Mob at the Jail",
        act: "Chapter 15",
        description: "Atticus sits in a solitary chair outside the Maycomb jailhouse, reading his newspaper under a single lightbulb to protect his client, Tom Robinson, from a hostile lynch mob that arrives under cover of darkness. The tension is dissolved when Scout, Jem, and Dill run into the circle. Scout's innocent, friendly conversation with Mr. Cunningham shame-confronts him about his child, breaking the mob's collective malice and forcing them to disperse.",
        impact: "This scene highlights the power of quiet moral conviction over collective violence, demonstrating how simple human connection can dissolve systemic hatred."
      },
      {
        title: "The Courtroom Verdict and the Defeated Ascent",
        act: "Chapter 21",
        description: "Following a rigorous trial where Atticus clearly proves Tom Robinson’s innocence, the white jury returns a guilty verdict based purely on ancient racial tribalism. As an exhausted, defeated Atticus packs his briefcase and walks solitary down the center aisle, the black citizens packed in the balcony stand up silently in a profound, massive gesture of respect.",
        impact: "A devastating climax of socio-legal tragedy. It highlights the deeply entrenched systemic racism of the South while honoring Atticus's immense, uncompromising dignity."
      },
      {
        title: "The Halloween Assault and Arthur Radley's Reveal",
        act: "Chapters 28–29",
        description: "While walking home from a school pageant in the dark, Scout and Jem are brutally attacked by Bob Ewell. Scout is blinded by her clumsy ham costume, but hears a struggle, and a stranger carries an injured Jem home. Doctor and sheriff arrive, and Scout notices a pale, silent man leaning against the corner of the bedroom. She realizes with sudden, tears-soaked awe that it is Boo Radley, who has stepped out of his house to save them.",
        impact: "The ultimate convergence of the novel's twin plots. Boo Radley, the neighborhood ghostly monster of childhood gossip, is revealed as the gentlest, ultimate physical savior and guardian of innocence."
      }
    ],
    characterProfiles: [
      {
        name: "Atticus Finch",
        role: "Mentor / Spiritual Father",
        archetype: "The Ultimate Moral Conscience",
        analysis: "A widowed lawyer in Maycomb who treats his children with dignity and behaves with absolute, unyielding ethical consistency. Atticus represents the rare individual who acts in private exactly as he preaches in public, maintaining a calm, empathetic rationality against a storm of popular prejudice."
      },
      {
        name: "Jean Louise 'Scout' Finch",
        role: "Protagonist",
        archetype: "The Awakening Childhood Observer",
        analysis: "An inquisitive, tomboyish girl who narrates the novel looking back at her childhood. Scout is hot-headed but intellectually sharp. Her journey is an intellectual ascent from reactive childhood patterns into analytical, empathetic adulthood, learning to view people's flaws with deep sympathy."
      },
      {
        name: "Arthur 'Boo' Radley",
        role: "Sanctuary Figure",
        archetype: "The Secret Guardian / Mockingbird",
        analysis: "An isolated recluse who became the subject of gothic neighborhood legends and rumors. Boo is intensely shy and physically fragile, but expresses deep affection for the Finch children by leaving small gifts in a hollow tree knot, culminating in his heroic defense of their lives."
      }
    ],
    quotes: [
      {
        text: "You never really understand a person until you consider things from his point of view—until you climb into his skin and walk around in it.",
        speaker: "Atticus Finch",
        significance: "The ethical core of the novel, summarizing Atticus's philosophy of universal compassion that overrides prejudice."
      },
      {
        text: "Real courage is when you know you're licked before you begin, but you begin anyway and see it through no matter what. You rarely win, but sometimes you do.",
        speaker: "Atticus Finch",
        significance: "Defines Atticus's willingness to take on the Tom Robinson case despite knowing the racial biases of Maycomb's court would doom the verdict, elevating duty over pragmatism."
      },
      {
        text: "I think there's just one kind of folks. Folks.",
        speaker: "Scout Finch",
        significance: "A child's pure, simplified wisdom that cuts through years of social stratification, racial castes, and family class systems."
      }
    ]
  },
  {
    id: "zero-to-one",
    title: "Zero to One",
    author: "Peter Thiel with Blake Masters",
    era: "2014",
    genre: "Strategic Non-Fiction & Business Philosophy",
    oneSentenceSummary: "True progress comes not from replicating existing models (going from 1 to n), but from creating entirely new, monopolistic innovations that move the world from zero to one.",
    introduction: "Peter Thiel’s provocative guide to startup strategy is a philosophical treatise on building the future. It challenges standard economic dogma by advocating for creative monopolies, rigorous vertical integration, and deep secrets over incremental improvement.",
    themes: [
      {
        name: "Creative Monopolies vs. Perfect Competition",
        description: "Thiel argues that perfect competition is an economic ideal that destroys profitability for businesses. Instead, progress is driven by 'creative monopolies'—companies that are so exceptionally good at what they do that no other firm can offer a close substitute, allowing them to fund sustained, long-term innovation.",
        quote: "All happy companies are different: each one earns a monopoly by solving a unique problem. All failed companies are the same: they failed to escape competition."
      },
      {
        name: "Definite Optimism vs. Indefinite Pessimism",
        description: "The book categorizes views of the future into four quadrants. Thiel champions 'Definite Optimism'—the belief that the future will be better if we plan for it and work to create it—in contrast to the prevailing modern state of 'Indefinite Optimism,' where people expect progress but rely on finance, luck, and incremental choices rather than discrete engineering plans.",
        quote: "A business with a good definite plan will always be underrated in a world where people see the future as random."
      }
    ],
    epicMoments: [
      {
        title: "The Rejection of the Dot-Com Dogma",
        act: "Chapter 2",
        description: "Thiel dissects the psychological trauma of the 1999 Dot-Com crash and shows how it forced founders to adopt four bad, reactionary rules: make incremental advances, stay lean and flexible, improve on competition, and focus on product instead of sales. Thiel systematically dismantles these beliefs, suggesting their opposites are far truer.",
        impact: "Forces innovators to realize that bold plans, bad plans, and aggressive sales are superior to incremental consensus."
      },
      {
        title: "The Monopoly Secrets of PayPal's Survival",
        act: "Chapter 5",
        description: "Recounting the frantic, high-burn early days of PayPal, Thiel describes the intense competitive war with Elon Musk's X.com. Recognizing that mutual competition was threatening to ruin both operations, they decided to merge 50/50, solidifying their grip and building a legendary foundation for the PayPal Mafia.",
        impact: "Demonstrates how avoiding destructive competition and consolidating power represents the ultimate path to structural dominance."
      }
    ],
    characterProfiles: [
      {
        name: "The Creative Monopolist",
        role: "The Founder",
        archetype: "The Unique Contrarian",
        analysis: "A figure who questions mainstream axioms and looks for deep secrets in nature or human society. They prioritize absolute proprietary technology, network effects, scale, and distinct branding to bypass competitive systems entirely."
      },
      {
        name: "The Indefinite Optimist",
        role: "The Modern Bureaucrat",
        archetype: "The Incrementalist",
        analysis: "A profile that expects the future to get better but doesn't know how specifically, leading them to pursue optionality, finance, consulting, and law instead of inventing substantive new physical or digital platforms."
      }
    ],
    quotes: [
      {
        text: "What important truth do very few people agree with you on?",
        speaker: "Peter Thiel (The Contrarian Question)",
        significance: "The intellectual core of the book, designed to uncover hidden opportunities and challenge comfortable social conformity."
      },
      {
        text: "Monopoly is the condition of every successful business.",
        speaker: "Peter Thiel",
        significance: "Dismantles standard free-market propaganda by pointing out that lasting value is created only by escaping competition."
      }
    ]
  },
  {
    id: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    era: "2011",
    genre: "Cognitive Psychology & Behavioral Economics",
    oneSentenceSummary: "An elegant tour of the human mind exposes the constant, delicate tension between intuitive, rapid, but bias-prone thinking and slow, deliberate, but highly lazy analytical reasoning.",
    introduction: "Nobel laureate Daniel Kahneman summarizes decades of pioneering research with Amos Tversky, revealing the cognitive biases and heuristics that shape our daily decisions. The text dismantles the traditional 'rational agent' model of classical economics with dry, clinical precision.",
    themes: [
      {
        name: "System 1 vs. System 2 Dialectic",
        description: "The human brain operates via two agents: System 1, which runs automatically, instantly, with little effort and no sense of voluntary control, and System 2, which allocates focus to demanding mental operations. System 2 is lazy and often accepts the simplified, biased outputs of System 1 without checking.",
        quote: "System 1 is gullible and biased to believe, System 2 is in charge of doubting and unbelieving, but System 2 is sometimes busy and often lazy."
      },
      {
        name: "Heuristics, Anchoring, and Cognitive Illusions",
        description: "When faced with a complex question, System 1 automatically substitutes an easier, related question without our awareness. This creates systematic errors like anchoring (basing judgements on totally random initial numbers) and the availability heuristic (judgement of frequency based on how easily examples come to mind).",
        quote: "We can be blind to the obvious, and we are also blind to our blindness."
      }
    ],
    epicMoments: [
      {
        title: "The Discovery of Prospect Theory and Loss Aversion",
        act: "Part 4: Choices",
        description: "Kahneman details the legendary experiments that overthrew standard Utility Theory. He proves that human choices are not driven by absolute values, but by relative changes from a reference point. Crucially, the pain of losing something is mathematically twice as intense as the pleasure of gaining the exact same thing.",
        impact: "Dismantled the foundational economic assumption of the 'Homo Economicus' (rational human agent), launching behavioral economics."
      },
      {
        title: "The Conflict of the Two Selves",
        act: "Part 5: Two Selves",
        description: "Conducting the celebrated 'Cold Pressor' pain experiments, Kahneman reveals that our 'Experiencing Self' (what we actually feel in the moment) is utterly distinct from our 'Remembering Self' (how we look back on it). Humans make choices based on memories, which are heavily distorted by the 'Peak-End Rule'—remembering only the peak intensity and the final moments of an experience.",
        impact: "Exposes the tragic truth that we systematically make decisions that do not maximize our actual ongoing happiness, but instead feed distorted narrative memories."
      }
    ],
    characterProfiles: [
      {
        name: "System 1",
        role: "The Intuitive Agent",
        archetype: "The Instant Storyteller",
        analysis: "A highly emotional, associative machine that continuously drafts coherent interpretations of our environment. It is extremely fast, loves patterns, detects causal relationships where none exist, and struggles with basic statistics."
      },
      {
        name: "System 2",
        role: "The Analytical Inspector",
        archetype: "The Lazy Thinker",
        analysis: "A deliberate, logical, and highly effortful mechanism that performs complex computations and overrides impulse. It has severe concentration limits and is easily depleted by stress or fatigue, often delegating judgments to System 1."
      }
    ],
    quotes: [
      {
        text: "Nothing in life is as important as you think it is, while you are thinking about it.",
        speaker: "Daniel Kahneman (The Focusing Illusion)",
        significance: "Captures the core bias of human attention, which artificially inflates the significance of any single factor we focus on."
      },
      {
        text: "We are prone to overestimate how much we understand the world and to underestimate the role of chance in events.",
        speaker: "Daniel Kahneman",
        significance: "Launches a profound critique of historical narratives and professional forecasting, which invent simple stories to explain complex, chaotic systems."
      }
    ]
  }
];
