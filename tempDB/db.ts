import {IOnboardingEntities, IWordData, wordTypes} from "@/tempDB/types";
import alphabets from '../assets/images/alphabets.png'
import goToGoal from '../assets/images/goToGoal.png'
import learn from '../assets/images/learn.png'
import vocabularyLearn from '../assets/images/klipartz.png'
import bg1 from '../assets/images/abstract.webp'
import bg2 from '../assets/images/pexels.webp'
import bg3 from '../assets/images/pexels-enginakyurt-1493226.webp'
import bg4 from '../assets/images/pexels-fwstudio-33348-129731.webp'
import bg5 from '../assets/images/pexels-joaojesusdesign.webp'
import {pageKey} from "@/redux/user/types";

export const onboardingData: IOnboardingEntities = {
    '1': {
        id: 1,
        title: 'Expand your Vocabulary in 1 minute a day',
        description: 'Learn 10,000+ new wards with a new daily habit that takes just 1 minute',
        method: () => {},
        methodTitle: 'Get started',
        image: alphabets,
        skip: false,
        pageKay: pageKey.whereHear,
        questions: null,
    },
    '2': {
        id: 2,
        title: 'How did you hear about Vocabulary?',
        description: 'Select an option to continue',
        method: null,
        methodTitle: '',
        skip: true,
        pageKay: pageKey.whereHear,
        questions: [
            'TikTok',
            'Instagram',
            'Facebook',
            'Google Play',
            'Web Search',
            'Friend/family',
            'Other',
        ],
    },
    '3': {
        id: 3,
        title: 'Tailor your word recommendations',
        description: 'Answer a few questions to get personalized word suggestion',
        method: () => {},
        methodTitle: 'Continue',
        image: goToGoal,
        skip: false,
        pageKay: pageKey.ageRange,
        questions: null,
    },
    '4': {
        id: 4,
        title: 'How old are you?',
        description: 'Your age is used personalize your content',
        method: null,
        methodTitle: '',
        skip: true,
        pageKay: pageKey.ageRange,
        questions: [
            '13 to 17',
            '18 to 24',
            '25 to 34',
            '35 to 44',
            '45 to 54',
            '55+',
        ],
    },
    '5': {
        id: 5,
        title: 'Which option represents you best?',
        description: 'Select an option to continue',
        method: null,
        methodTitle: '',
        skip: true,
        pageKay: pageKey.gender,
        questions: [
            'Female',
            'Male',
            'Other',
            'Prefer not to say',
        ],
    },
    '6': {
        id: 6,
        title: 'What do you want to be called?',
        description: 'Your name is used to personalize your experience',
        method: () => {},
        methodTitle: 'Continue',
        skip: true,
        pageKay: pageKey.userName,
        questions: 'input',
    },
    '7': {
        id: 7,
        title: 'What is your vocabulary level?',
        description: 'Select an option to continue',
        method: null,
        methodTitle: '',
        skip: false,
        pageKay: pageKey.level,
        questions: [
            'Beginner',
            'Intermediate',
            'Advanced',
        ],
    },
    '8': {
        id: 8,
        title: "Let's make Vocabulary yours",
        description: 'Customize the app to make the most of your experience',
        method: () => {},
        methodTitle: 'Continue',
        image: learn,
        skip: false,
        pageKay: pageKey.timeLearning,
        questions: null,
    },
    '9': {
        id: 9,
        title: 'How much time will you devote to learning?',
        description: 'You can always change your goal later',
        method: null,
        methodTitle: '',
        skip: false,
        pageKay: pageKey.timeLearning,
        questions: [
            '1 minute a day',
            '3 minute a day',
            '5 minute a day',
        ],
    },
    '10': {
        id: 10,
        title: 'Learn Words with daily reminders',
        description: 'Allow notifications to get daily words',
        method: null,
        methodTitle: 'Allow and Save',
        skip: false,
        pageKay: pageKey.remindersTime,
        questions: null,
    },
    '11': {
        id: 11,
        title: 'Which theme would you like to start with?',
        description: 'Choose from a larger selection of themes or create your own later',
        method: () => {},
        methodTitle: 'Continue',
        skip: false,
        pageKay: pageKey.background,
        questions: [
            bg1,
            bg2,
            bg3,
            bg4,
            bg5,
            'bg6',
        ],
    },
    '12': {
        id: 12,
        title: 'Set up Vocabulary to get personalized words',
        description: 'Some final questions to customize Vocabulary to what you want to achieve',
        method: () => {},
        methodTitle: 'Continue',
        image: vocabularyLearn,
        skip: false,
        pageKay: pageKey.goal,
        questions: null,
    },
    '13': {
        id: 13,
        title: 'Do you have a specific goal in mind?',
        description: 'Select an option to continue',
        method: () => {},
        methodTitle: 'Continue',
        skip: false,
        pageKay: pageKey.goal,
        questions: [
            'Enhance my lexicon',
            'Get ready for a test',
            'Improve my job prospects',
            'Enjoy learning new words',
            'Other',
        ],
    },
    '14': {
        id: 14,
        title: 'Which topics are you interested in?',
        description: 'Select an option to continue',
        method: () => {},
        methodTitle: 'Continue',
        skip: false,
        pageKay: pageKey.topic,
        questions: [
            'Society',
            'Words in foreign languages',
            'Human body',
            'Emotions',
            'Business',
            'Other',
        ],
    },
}



export const wordData: IWordData = {
    [wordTypes.SOCIETY]: [
        {
            id: 1,
            word: "Community",
            description: "A group of people living together or sharing common interests.",
            latin: "Communitas",
            phrase: "A neighborhood gathering to celebrate culture."
        },
        {
            id: 2,
            word: "Equality",
            description: "The state of being equal in status, rights, and opportunities.",
            latin: "Aequalitas",
            phrase: "Everyone having the same chance to succeed."
        },
        {
            id: 3,
            word: "Justice",
            description: "The quality of being fair and reasonable.",
            latin: "Iustitia",
            phrase: "A courtroom ensuring fairness for all."
        },
        {
            id: 4,
            word: "Culture",
            description: "The ideas, customs, and social behavior of a particular people or society.",
            latin: "Cultura",
            phrase: "A festival showcasing music, food, and traditions."
        },
        {
            id: 5,
            word: "Diversity",
            description: "The state of being diverse; variety.",
            latin: "Diversitas",
            phrase: "A classroom filled with students from various backgrounds."
        },
        {
            id: 6,
            word: "Empathy",
            description: "The ability to understand and share the feelings of others.",
            latin: "Empathia",
            phrase: "Listening to a friend's problems with care."
        },
        {
            id: 7,
            word: "Leadership",
            description: "The action of leading a group of people or an organization.",
            latin: "Ductus",
            phrase: "A guide directing a team toward a common goal."
        },
        {
            id: 8,
            word: "Freedom",
            description: "The power or right to act, speak, or think as one wants.",
            latin: "Libertas",
            phrase: "A person expressing their thoughts openly."
        },
        {
            id: 9,
            word: "Solidarity",
            description: "Unity or agreement of feeling or action among individuals with a common interest.",
            latin: "Solidaritas",
            phrase: "Workers marching together for better rights."
        },
        {
            id: 10,
            word: "Rights",
            description: "Legal, social, or ethical principles of freedom or entitlement.",
            latin: "Iura",
            phrase: "Voting as a fundamental right in democracy."
        },
        {
            id: 11,
            word: "Responsibility",
            description: "The state or fact of being accountable for something.",
            latin: "Responsabilitas",
            phrase: "A leader ensuring the well-being of their team."
        },
        {
            id: 12,
            word: "Democracy",
            description: "A system of government by the whole population, typically through elected representatives.",
            latin: "Democratia",
            phrase: "Citizens casting votes in an election."
        },
        {
            id: 13,
            word: "Economy",
            description: "The system of production, distribution, and consumption of goods and services.",
            latin: "Oeconomia",
            phrase: "A bustling marketplace filled with trade."
        },
        {
            id: 14,
            word: "Education",
            description: "The process of receiving or giving systematic instruction, especially at a school or university.",
            latin: "Educatio",
            phrase: "A teacher guiding students through learning."
        },
        {
            id: 15,
            word: "Charity",
            description: "The voluntary giving of help, typically in the form of money, to those in need.",
            latin: "Caritas",
            phrase: "A food drive helping local families."
        },
        {
            id: 16,
            word: "Innovation",
            description: "The introduction of new ideas, methods, or products.",
            latin: "Innovatio",
            phrase: "A startup creating eco-friendly solutions."
        },
        {
            id: 17,
            word: "Harmony",
            description: "A pleasing arrangement of parts; agreement or concord.",
            latin: "Harmonia",
            phrase: "A community living in peace with each other."
        },
        {
            id: 18,
            word: "Tradition",
            description: "Customs or beliefs passed down from generation to generation.",
            latin: "Traditio",
            phrase: "Families celebrating holidays with age-old practices."
        },
        {
            id: 19,
            word: "Unity",
            description: "The state of being united or joined as a whole.",
            latin: "Unitas",
            phrase: "A group of people working together for a common goal."
        },
        {
            id: 20,
            word: "Sustainability",
            description: "The ability to maintain balance and avoid depletion of resources.",
            latin: "Sustentabilitas",
            phrase: "Using renewable energy to preserve the environment."
        }
    ],
    [wordTypes.FOREIGN_LANG]: [
        {
            id: 1,
            word: "Language",
            description: "A system of communication used by a particular community or country.",
            latin: "Lingua",
            phrase: "The ability to express thoughts in words."
        },
        {
            id: 2,
            word: "Dialect",
            description: "A particular form of a language specific to a region or group.",
            latin: "Dialectus",
            phrase: "A unique way of speaking in a local area."
        },
        {
            id: 3,
            word: "Translation",
            description: "The process of converting text or speech from one language to another.",
            latin: "Translatio",
            phrase: "Bridging understanding between languages."
        },
        {
            id: 4,
            word: "Interpreter",
            description: "A person who translates spoken language in real-time.",
            latin: "Interpres",
            phrase: "Converting conversations between people instantly."
        },
        {
            id: 5,
            word: "Vocabulary",
            description: "The body of words used in a particular language.",
            latin: "Vocabularium",
            phrase: "Building a treasure of meaningful words."
        },
        {
            id: 6,
            word: "Grammar",
            description: "The set of rules that govern the structure of sentences in a language.",
            latin: "Grammatica",
            phrase: "The foundation for constructing meaningful sentences."
        },
        {
            id: 7,
            word: "Phonetics",
            description: "The study of the sounds of human speech.",
            latin: "Phonetica",
            phrase: "Learning how sounds shape languages."
        },
        {
            id: 8,
            word: "Fluency",
            description: "The ability to speak or write a language effortlessly and accurately.",
            latin: "Fluentia",
            phrase: "Communicating with ease and confidence."
        },
        {
            id: 9,
            word: "Accent",
            description: "A distinctive way of pronouncing a language.",
            latin: "Accentus",
            phrase: "A unique speech pattern from a region or group."
        },
        {
            id: 10,
            word: "Polyglot",
            description: "A person who knows and can use several languages.",
            latin: "Polyglottus",
            phrase: "Someone fluent in multiple languages."
        },
        {
            id: 11,
            word: "Syntax",
            description: "The arrangement of words to create sentences in a language.",
            latin: "Syntaxis",
            phrase: "Structuring words to form clear ideas."
        },
        {
            id: 12,
            word: "Cognition",
            description: "The mental action of acquiring knowledge and understanding through thought and experience.",
            latin: "Cognitio",
            phrase: "How the brain processes and learns new languages."
        },
        {
            id: 13,
            word: "Linguistics",
            description: "The scientific study of language and its structure.",
            latin: "Linguistica",
            phrase: "Exploring the science of human communication."
        },
        {
            id: 14,
            word: "Bilingual",
            description: "A person who is fluent in two languages.",
            latin: "Bilinguis",
            phrase: "Navigating two languages with ease."
        },
        {
            id: 15,
            word: "Pronunciation",
            description: "The way in which a word is spoken.",
            latin: "Pronuntiatio",
            phrase: "Mastering the sound of each word."
        },
        {
            id: 16,
            word: "Idioms",
            description: "Expressions whose meanings are not predictable from the literal words.",
            latin: "Idioma",
            phrase: "Phrases that add color to conversation."
        },
        {
            id: 17,
            word: "Semantics",
            description: "The study of meaning in language.",
            latin: "Semantica",
            phrase: "Understanding the nuances of word meanings."
        },
        {
            id: 18,
            word: "Translation Memory",
            description: "A database that stores previously translated texts for reuse.",
            latin: "Memoria Translationis",
            phrase: "A tool that enhances efficiency in translating."
        },
        {
            id: 19,
            word: "Orthography",
            description: "The conventional spelling system of a language.",
            latin: "Orthographia",
            phrase: "Learning the standard rules of spelling."
        },
        {
            id: 20,
            word: "Dialectology",
            description: "The scientific study of dialects within a language.",
            latin: "Dialectologia",
            phrase: "Exploring regional variations in speech."
        }
    ],
    [wordTypes.HUMAN_BODY]: [
        {
            id: 1,
            word: "Heart",
            description: "The organ that pumps blood throughout the body.",
            latin: "Cor",
            phrase: "The heart beats steadily, ensuring life."
        },
        {
            id: 2,
            word: "Brain",
            description: "The organ that serves as the center of the nervous system.",
            latin: "Cerebrum",
            phrase: "The brain processes thoughts, emotions, and actions."
        },
        {
            id: 3,
            word: "Lungs",
            description: "The pair of organs that allow breathing and oxygen exchange.",
            latin: "Pulmones",
            phrase: "The lungs expand and contract with each breath."
        },
        {
            id: 4,
            word: "Skin",
            description: "The outer layer of the body that protects internal organs.",
            latin: "Cutis",
            phrase: "The skin acts as a shield and regulates temperature."
        },
        {
            id: 5,
            word: "Bones",
            description: "The rigid structures that form the skeleton and provide support.",
            latin: "Ossa",
            phrase: "Bones give the body shape and strength."
        },
        {
            id: 6,
            word: "Muscles",
            description: "Tissues that allow movement by contracting and relaxing.",
            latin: "Musculi",
            phrase: "Muscles power every movement of the body."
        },
        {
            id: 7,
            word: "Stomach",
            description: "The organ where food is digested after swallowing.",
            latin: "Ventriculus",
            phrase: "The stomach breaks down food into nutrients."
        },
        {
            id: 8,
            word: "Liver",
            description: "The organ that detoxifies chemicals and produces bile.",
            latin: "Iecur",
            phrase: "The liver plays a vital role in metabolism."
        },
        {
            id: 9,
            word: "Kidneys",
            description: "The pair of organs that filter blood and produce urine.",
            latin: "Renes",
            phrase: "The kidneys cleanse the body by removing waste."
        },
        {
            id: 10,
            word: "Eyes",
            description: "The organs of vision that detect light and color.",
            latin: "Oculi",
            phrase: "The eyes capture the beauty of the world."
        },
        {
            id: 11,
            word: "Ears",
            description: "The organs of hearing and balance.",
            latin: "Aures",
            phrase: "The ears detect sounds and maintain equilibrium."
        },
        {
            id: 12,
            word: "Teeth",
            description: "The hard structures in the mouth used for chewing food.",
            latin: "Dentes",
            phrase: "Teeth break down food into smaller pieces for digestion."
        },
        {
            id: 13,
            word: "Tongue",
            description: "The muscular organ in the mouth that aids in speaking and tasting.",
            latin: "Lingua",
            phrase: "The tongue distinguishes sweet, sour, salty, and bitter flavors."
        },
        {
            id: 14,
            word: "Spine",
            description: "The column of bones that supports the body and protects the spinal cord.",
            latin: "Spina",
            phrase: "The spine enables posture and flexibility."
        },
        {
            id: 15,
            word: "Blood",
            description: "The fluid that circulates in the arteries and veins, delivering oxygen and nutrients.",
            latin: "Sanguis",
            phrase: "Blood carries life-giving oxygen to every cell."
        },
        {
            id: 16,
            word: "Nerves",
            description: "Fibers that transmit signals between the brain and the body.",
            latin: "Nervi",
            phrase: "Nerves control reflexes and sensations."
        },
        {
            id: 17,
            word: "Hair",
            description: "The strands of keratin that grow from follicles on the skin.",
            latin: "Capilli",
            phrase: "Hair protects the scalp and regulates temperature."
        },
        {
            id: 18,
            word: "Nails",
            description: "The hard coverings at the tips of fingers and toes.",
            latin: "Ungues",
            phrase: "Nails shield the fingertips and assist in gripping."
        },
        {
            id: 19,
            word: "Arteries",
            description: "Blood vessels that carry oxygen-rich blood from the heart to the body.",
            latin: "Arteriae",
            phrase: "Arteries transport oxygen to tissues and organs."
        },
        {
            id: 20,
            word: "Veins",
            description: "Blood vessels that carry blood back to the heart.",
            latin: "Venae",
            phrase: "Veins return deoxygenated blood to be refreshed."
        }
    ],
    [wordTypes.EMOTIONS]: [
        {
            id: 1,
            word: "Happiness",
            description: "A state of well-being and contentment.",
            latin: "Felicitas",
            phrase: "Happiness is the light that brightens our days."
        },
        {
            id: 2,
            word: "Sadness",
            description: "A feeling of sorrow or unhappiness.",
            latin: "Tristitia",
            phrase: "Sadness softens the heart and deepens understanding."
        },
        {
            id: 3,
            word: "Anger",
            description: "A strong feeling of annoyance, displeasure, or hostility.",
            latin: "Ira",
            phrase: "Anger burns like fire, but it can spark change."
        },
        {
            id: 4,
            word: "Love",
            description: "An intense feeling of deep affection.",
            latin: "Amor",
            phrase: "Love connects hearts and transcends boundaries."
        },
        {
            id: 5,
            word: "Fear",
            description: "An unpleasant emotion caused by the threat of danger, pain, or harm.",
            latin: "Timor",
            phrase: "Fear sharpens instincts and prompts caution."
        },
        {
            id: 6,
            word: "Joy",
            description: "A feeling of great pleasure and happiness.",
            latin: "Gaudium",
            phrase: "Joy fills the soul with boundless energy."
        },
        {
            id: 7,
            word: "Disgust",
            description: "A strong feeling of aversion or repulsion.",
            latin: "Fastidium",
            phrase: "Disgust signals rejection of the undesirable."
        },
        {
            id: 8,
            word: "Surprise",
            description: "A sudden feeling of wonder or astonishment.",
            latin: "Miratio",
            phrase: "Surprise breathes excitement into the ordinary."
        },
        {
            id: 9,
            word: "Hope",
            description: "A feeling of expectation and desire for a certain thing to happen.",
            latin: "Spes",
            phrase: "Hope sustains us when all seems lost."
        },
        {
            id: 10,
            word: "Gratitude",
            description: "The quality of being thankful and showing appreciation.",
            latin: "Gratitudo",
            phrase: "Gratitude opens the heart to abundance."
        },
        {
            id: 11,
            word: "Jealousy",
            description: "A feeling of envy toward someone’s achievements or possessions.",
            latin: "Invidia",
            phrase: "Jealousy is a shadow cast by insecurity."
        },
        {
            id: 12,
            word: "Guilt",
            description: "A feeling of responsibility for a wrongdoing.",
            latin: "Culpa",
            phrase: "Guilt weighs heavily but teaches us accountability."
        },
        {
            id: 13,
            word: "Empathy",
            description: "The ability to understand and share the feelings of another.",
            latin: "Empathia",
            phrase: "Empathy bridges the gap between souls."
        },
        {
            id: 14,
            word: "Shame",
            description: "A painful feeling of humiliation or distress.",
            latin: "Pudor",
            phrase: "Shame hides in the shadows of self-perception."
        },
        {
            id: 15,
            word: "Pride",
            description: "A feeling of deep pleasure or satisfaction from achievements.",
            latin: "Superbia",
            phrase: "Pride shines in moments of accomplishment."
        },
        {
            id: 16,
            word: "Confusion",
            description: "A state of being bewildered or unclear in one’s mind.",
            latin: "Confusio",
            phrase: "Confusion invites curiosity and exploration."
        },
        {
            id: 17,
            word: "Compassion",
            description: "Sympathetic concern for the suffering of others.",
            latin: "Compassio",
            phrase: "Compassion heals wounds and nurtures connection."
        },
        {
            id: 18,
            word: "Loneliness",
            description: "A feeling of sadness due to a lack of companionship.",
            latin: "Solitudinem",
            phrase: "Loneliness is a quiet echo in an empty space."
        },
        {
            id: 19,
            word: "Excitement",
            description: "A feeling of great enthusiasm and eagerness.",
            latin: "Excitatio",
            phrase: "Excitement pulses like electricity through the veins."
        },
        {
            id: 20,
            word: "Contentment",
            description: "A state of satisfaction and peaceful happiness.",
            latin: "Contentio",
            phrase: "Contentment blooms in the simplicity of the present."
        }
    ],
    [wordTypes.BUSINESS]: [
        {
            id: 1,
            word: "Profit",
            description: "The financial gain made after deducting expenses from revenue.",
            latin: "Lucrum",
            phrase: "Profit drives the growth of enterprises."
        },
        {
            id: 2,
            word: "Revenue",
            description: "The total income generated by a business from its operations.",
            latin: "Reditus",
            phrase: "Revenue is the lifeblood of a company."
        },
        {
            id: 3,
            word: "Investment",
            description: "The act of allocating resources to generate income or profit.",
            latin: "Investitio",
            phrase: "Investment lays the foundation for future returns."
        },
        {
            id: 4,
            word: "Market",
            description: "A platform where buyers and sellers exchange goods or services.",
            latin: "Forum",
            phrase: "The market thrives on supply and demand."
        },
        {
            id: 5,
            word: "Strategy",
            description: "A plan of action designed to achieve long-term goals.",
            latin: "Strategia",
            phrase: "Strategy aligns vision with execution."
        },
        {
            id: 6,
            word: "Leadership",
            description: "The ability to guide and inspire a team or organization.",
            latin: "Ductus",
            phrase: "Leadership transforms vision into reality."
        },
        {
            id: 7,
            word: "Innovation",
            description: "The process of introducing new ideas, products, or methods.",
            latin: "Innovatio",
            phrase: "Innovation sparks progress and reinvention."
        },
        {
            id: 8,
            word: "Entrepreneur",
            description: "A person who starts and runs a business, taking on financial risks.",
            latin: "Entreprena",
            phrase: "Entrepreneurs turn ideas into thriving ventures."
        },
        {
            id: 9,
            word: "Customer",
            description: "An individual or organization that purchases goods or services.",
            latin: "Cliens",
            phrase: "The customer is at the heart of every business."
        },
        {
            id: 10,
            word: "Brand",
            description: "A unique identity that distinguishes a company or product.",
            latin: "Notam",
            phrase: "A strong brand builds trust and loyalty."
        },
        {
            id: 11,
            word: "Partnership",
            description: "A cooperative agreement between parties to achieve mutual goals.",
            latin: "Societas",
            phrase: "Partnerships strengthen networks and opportunities."
        },
        {
            id: 12,
            word: "Risk",
            description: "The possibility of loss or failure in business activities.",
            latin: "Periculum",
            phrase: "Risk accompanies every opportunity for reward."
        },
        {
            id: 13,
            word: "Growth",
            description: "The increase in size, value, or capacity of a business.",
            latin: "Crescere",
            phrase: "Growth signals a thriving and dynamic organization."
        },
        {
            id: 14,
            word: "Capital",
            description: "Financial assets used to fund operations and growth.",
            latin: "Capitale",
            phrase: "Capital fuels the engine of enterprise."
        },
        {
            id: 15,
            word: "Competition",
            description: "Rivalry between businesses to attract customers or achieve market share.",
            latin: "Certatio",
            phrase: "Competition fosters innovation and efficiency."
        },
        {
            id: 16,
            word: "Negotiation",
            description: "The process of reaching an agreement through discussion.",
            latin: "Negotium",
            phrase: "Negotiation balances interests for mutual benefit."
        },
        {
            id: 17,
            word: "Networking",
            description: "Building relationships to create professional opportunities.",
            latin: "Retis Coniunctio",
            phrase: "Networking connects people with shared goals."
        },
        {
            id: 18,
            word: "Supply",
            description: "The total amount of goods or services available for purchase.",
            latin: "Copia",
            phrase: "Supply meets demand in a balanced market."
        },
        {
            id: 19,
            word: "Demand",
            description: "The desire and ability of consumers to purchase goods or services.",
            latin: "Postulatio",
            phrase: "Demand drives the production of goods and services."
        },
        {
            id: 20,
            word: "Efficiency",
            description: "Achieving maximum productivity with minimum wasted effort or expense.",
            latin: "Efficientia",
            phrase: "Efficiency is the hallmark of a successful business."
        }
    ],
    [wordTypes.OTHER]: [
        {
            id: 1,
            word: "Journey",
            description: "An act of traveling from one place to another.",
            latin: "Iter",
            phrase: "A journey begins with a single step."
        },
        {
            id: 2,
            word: "Knowledge",
            description: "Facts, information, and skills acquired through experience or education.",
            latin: "Scientia",
            phrase: "Knowledge is the key to unlocking potential."
        },
        {
            id: 3,
            word: "Dream",
            description: "A series of thoughts, images, and sensations occurring in sleep or an aspiration.",
            latin: "Somnium",
            phrase: "Dreams inspire us to reach for the stars."
        },
        {
            id: 4,
            word: "Freedom",
            description: "The power or right to act, speak, or think as one wants.",
            latin: "Libertas",
            phrase: "Freedom is the soul's most cherished treasure."
        },
        {
            id: 5,
            word: "Nature",
            description: "The physical world and everything in it not made by humans.",
            latin: "Natura",
            phrase: "Nature thrives in harmony and balance."
        },
        {
            id: 6,
            word: "Wisdom",
            description: "The quality of having experience, knowledge, and good judgment.",
            latin: "Sapientia",
            phrase: "Wisdom grows through reflection and experience."
        },
        {
            id: 7,
            word: "Time",
            description: "The indefinite continued progress of existence and events.",
            latin: "Tempus",
            phrase: "Time is the most valuable resource we possess."
        },
        {
            id: 8,
            word: "Peace",
            description: "Freedom from disturbance or a state of tranquility.",
            latin: "Pax",
            phrase: "Peace resides in the hearts of the calm."
        },
        {
            id: 9,
            word: "Courage",
            description: "The ability to face danger or difficulty without fear.",
            latin: "Fortitudo",
            phrase: "Courage lights the way through darkness."
        },
        {
            id: 10,
            word: "Creativity",
            description: "The use of imagination or original ideas to create something.",
            latin: "Creativitas",
            phrase: "Creativity transforms the ordinary into extraordinary."
        },
        {
            id: 11,
            word: "Adventure",
            description: "An unusual and exciting or daring experience.",
            latin: "Aventurus",
            phrase: "Adventure calls to the brave and curious."
        },
        {
            id: 12,
            word: "Faith",
            description: "Complete trust or confidence in someone or something.",
            latin: "Fides",
            phrase: "Faith sustains us through uncertainty."
        },
        {
            id: 13,
            word: "Strength",
            description: "The quality or state of being physically strong or resilient.",
            latin: "Fortitudo",
            phrase: "Strength grows through perseverance."
        },
        {
            id: 14,
            word: "Community",
            description: "A group of people living in the same area or having shared interests.",
            latin: "Communitas",
            phrase: "Community thrives on connection and support."
        },
        {
            id: 15,
            word: "Kindness",
            description: "The quality of being friendly, generous, and considerate.",
            latin: "Humanitas",
            phrase: "Kindness makes the world a better place."
        },
        {
            id: 16,
            word: "Vision",
            description: "The ability to think about or plan the future with imagination or wisdom.",
            latin: "Visio",
            phrase: "Vision shapes the path to success."
        },
        {
            id: 17,
            word: "Balance",
            description: "An even distribution of weight or elements for stability.",
            latin: "Aequilibrium",
            phrase: "Balance brings harmony to life."
        },
        {
            id: 18,
            word: "Discovery",
            description: "The action of finding something unexpectedly.",
            latin: "Inventio",
            phrase: "Discovery expands the boundaries of knowledge."
        },
        {
            id: 19,
            word: "Harmony",
            description: "The quality of forming a pleasing and consistent whole.",
            latin: "Concordia",
            phrase: "Harmony enriches life with unity."
        },
        {
            id: 20,
            word: "Resilience",
            description: "The ability to recover quickly from difficulties.",
            latin: "Robur",
            phrase: "Resilience turns obstacles into stepping stones."
        }
    ]
}

