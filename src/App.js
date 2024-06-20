import './App.css';
import { ItemsContext } from './ItemsContext';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import Destinations from './Destinations';
import FullCardContent from './FullCardContent';
import About from './About';
import Contact from './Contact';
import Missing from './Missing';
import Namibia from './namibia.jpg';
import Rwanda from './Rwanda.png';
import Tanzania from './Tanzania.jpg';
import Ethiopia from './Ethiopia.png';
import Botswana from './Botswana.jpg';
import Morocco from './Morocco.jpg';
import Mauritius from './Mauritius.jpg';
import Egypt from './Egypt.jpg';
import Seychelles from './Seychelles.jpg';
import SA from './South-Africa.jpg';
import { Route, Routes } from "react-router-dom";

function App() {
  const items = [
    {
        id : 1,
        name : 'Namibia',
        title : `Where Dunes Dance and Silence Speaks`,
        image : Namibia,
        details : `In Namibia, nature holds court in a grand spectacle of extremes. Surrender to the mesmerizing dance of ochre dunes in the Namib Desert, the oldest in the world. Stride across their rippled expanse, feeling dwarfed by their ancient grandeur. Kayak amidst playful seals in the lively lagoon of Walvis Bay, where pink flamingos gather and dolphins frolic. Climb the iconic Deadvlei, a hauntingly beautiful clay pan punctuated by skeletal trees, frozen in time against a backdrop of towering orange dunes. Trek through the otherworldly landscapes of Damaraland, where ancient rock art whispers tales of the San people, and encounter desert-adapted elephants roaming the arid plains. Namibia is a sanctuary for the soul, where silence speaks volumes and nature's artistry reigns supreme.`
    },
    {
        id : 2,
        name : 'Rwanda',
        title : 'A Symphony of Wildlife and Resilience',
        image : Rwanda,
        details : "In Rwanda, hope springs eternal from the ashes of the past. Come face-to-face with the majestic mountain gorillas in Volcanoes National Park, sharing intimate moments with these gentle giants amidst lush bamboo forests. Delve into the poignant history of Kigali at the Genocide Memorial, honoring lives lost and celebrating a nation's resilience. Trek through the emerald Nyungwe Forest, home to chimpanzees, colobus monkeys, and a symphony of birdsong. Wander amidst the rolling hills of the Land of a Thousand Hills, where terraced farms paint the landscape in vibrant hues. Rwanda offers a profound blend of wildlife encounters, cultural immersion, and a testament to the enduring strength of the human spirit."
    },
    {
        id : 3,
        name : 'Zanzibar, Tanzania',
        title : 'Where Spices Swirl and Dreams Unfurl',
        image : Tanzania,
        details : "Zanzibar beckons with the allure of spice-laden breezes and idyllic island escapes. Dive into crystalline waters teeming with coral reefs, where vibrant fish dance among a kaleidoscope of underwater gardens. Bask on pristine beaches fringed by swaying palms, indulging in the rhythm of the tides and the warmth of the sun. Explore the fragrant alleys of Stone Town, where centuries of trade have left their mark in a fusion of Arabic, African, and European influences. Wander amidst ancient ruins and spice plantations, where the scent of cloves, cardamom, and cinnamon perfumes the air. Zanzibar is a sensory feast for beach lovers, history enthusiasts, and all those seeking a slice of paradise."
    },
    {
        id : 4,
        name : 'Ethiopia',
        title : 'Where Faith meet Mountains',
        image : Ethiopia,
        details : "In Ethiopia, ancient mysteries interweave with breathtaking landscapes to create a tapestry of time and faith. Hike the Simien Mountains, the “Roof of Africa,” where jagged peaks pierce the sky and churches carved from rock perch precariously on cliffs, their weathered walls whispering tales of centuries past. Delve into the rich history of Axum, where an ancient obelisk stands sentinel and the ruins of a once-mighty kingdom reveal glimpses of a glorious past. In Lalibela, marvel at the eleven monolithic churches carved from living rock, a testament to the power of faith and human ingenuity. Dance to the pulsating rhythms of traditional music and let yourself be swept away by the vibrant energy of Ethiopian culture. From the bustling markets of Addis Ababa to the remote reaches of the Omo Valley, where tribal traditions hold sway, Ethiopia offers an unforgettable journey through time, faith, and breathtaking beauty."
    },
    {
        id : 5,
        name : 'Botswana',
        title : 'Where Wildlife Reigns and the Delta Dreams',
        image : Botswana,
        details : "In Botswana, wilderness becomes an immersive theater, and your senses take center stage. Float amidst the wildlife-studded waterways of the Okavango Delta, a jewel-toned oasis in the heart of the Kalahari Desert. Witness hippos yawning lazily in the twilight, elephants trumpeting as they gather at watering holes, and crocodiles basking on sun-drenched banks. Track majestic elephants in Chobe National Park, where herds traverse ancient baobab trees and the Zambezi River teems with life. Immerse yourself in the silent serenity of the Makgadikgadi Pans, where vast salt flats shimmer under the endless sky, and witness the awe-inspiring zebra migrations that paint the plains in black and white stripes. Botswana is a paradise for safari enthusiasts, a land where wildlife reigns supreme and nature's artistry leaves you breathless."
    },
    {
        id : 6,
        name : 'Morocco',
        title : 'A Kaleidoscope of Senses and Enchanting Encounters',
        image : Morocco,
        details : "In Morocco, vibrant chaos dances with ancient allure, drawing you into a kaleidoscope of senses and experiences. Lose yourself in the labyrinthine alleys of Marrakech's medina, where haggling is an art form and treasures lie hidden around every corner. Savor the intoxicating blend of spices that fill the air, and let the rhythmic chant of street vendors weave a captivating melody. In Essaouira, the “Windy City,” barter for handwoven rugs and sip mint tea on breezy terraces overlooking the crashing Atlantic waves. Venture into the vast expanse of the Sahara Desert, where star-studded skies ignite your imagination and camel caravans trace paths through ancient dunes. From the snow-capped peaks of the Atlas Mountains to the sun-drenched beaches of Agadir, Morocco offers a journey through vibrant cities, enchanting deserts, and a culture that will leave you mesmerized."
    },
    {
        id : 7,
        name : 'Mauritius',
        title : 'Emerald Paradise for Relaxation and Discovery',
        image : Mauritius,
        details : "Mauritius, nestled like a jewel in the turquoise waters of the Indian Ocean, beckons with the promise of idyllic island escapades. Dive into crystal-clear lagoons, where vibrant coral reefs burst with life and colorful fish dart amidst swaying coral gardens. Hike verdant mountains cloaked in rainforests, following meandering trails that reveal cascading waterfalls and breathtaking panoramas. Discover the island's unique Creole cuisine, a delicious fusion of African, Indian, and European influences, relishing aromatic curries, fresh seafood, and tropical fruits. Immerse yourself in the laid-back island vibes, swaying to the rhythm of Sega music and basking in the warm embrace of the sun on pristine beaches. Mauritius offers a haven for romance, adventure, and a chance to reconnect with nature in all its beauty."
    },
    {
        id : 8,
        name : 'Egypt',
        title : 'Whispers of Pharaohs and Timeless Monuments',
        image : Egypt,
        details : "Egypt, the cradle of civilization, whispers tales of ancient pharaohs and lost civilizations amidst its timeless monuments. Unravel the mysteries of the Pyramids of Giza, colossal testaments to human ingenuity that stand as timeless guardians of the desert. Cruise the majestic Nile, the lifeblood of ancient Egypt, tracing the steps of pharaohs and witnessing millennia of history unfold along its banks. Explore the Valley of the Kings, where intricately painted tombs whisper secrets of a magnificent past. Wander amidst the imposing columns of Karnak Temple and lose yourself in the labyrinthine alleys of ancient Cairo, where history hangs heavy in the air. Egypt's treasures are not confined to the past; explore vibrant bazaars, dive into the colorful coral reefs of the Red Sea, and witness the rhythmic dance of Sufi dervishes under the starry desert sky."
    },
    {
        id : 9,
        name : 'Seychelles',
        title : 'A Sanctuary for Romance and Island Escapades',
        image : Seychelles,
        details : "In the Seychelles, where granite islands rise like emerald jewels from the turquoise embrace of the Indian Ocean, paradise found its earthly home. Sail amidst a constellation of islands, each boasting its own unique charm, from the lush rainforests of Mahé to the pristine beaches of La Digue. Snorkel alongside playful sea turtles in crystal-clear waters, where vibrantly colored fish dance amidst coral gardens. Hike scenic trails, discovering hidden coves and breathtaking panoramas. Unwind in luxurious resorts, where attentive service and opulent amenities cater to your every whim. Seychelles is a haven for romance, a secluded sanctuary where time slows down and the rhythm of the waves becomes your soundtrack. Whether you seek adventure or blissful relaxation, this island archipelago offers a perfect escape, etched forever in your memories."
    },
    {
        id : 10,
        name : 'South Africa',
        title : 'Adventure Awaits, From Mountains to Big Five',
        image : SA,
        details : "South Africa, a crucible of diversity and adventure, invites you to explore its contrasting landscapes and vibrant cultures. Hike Table Mountain overlooking Cape Town, a natural amphitheater where city meets wilderness, and witness breathtaking views that stretch to the horizon. Bungee jump off Bloukrans Bridge, the highest commercial bridge jump in the world, for an adrenaline rush that will leave you breathless. Witness the Big Five on a safari in Kruger National Park, where lions roar, elephants trumpet, and the untamed spirit of Africa comes alive. Dive into the vibrant cultures of Cape Town, from the bustling V&A Waterfront to the historic Bo-Kaap neighborhood, painted in a rainbow of colors. Embrace the warmth of South African hospitality, savor rich wines in Stellenbosch, and explore the rugged beauty of Garden Route, where coastal adventures and hidden gems await. From cosmopolitan cities to remote wildlife reserves, South Africa offers a smorgasbord of experiences that will leave you wanting more."
    }
];


  return (
    <section className='App'>
      <Header />
      <ItemsContext.Provider value={{items}}>
      <Routes>
        <Route exact path='/' element={<Body />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/destinations/:itemsId' element={<FullCardContent />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Missing />} />
      </Routes>
      </ItemsContext.Provider>
      <Footer />
    </section>
  );
}

export default App;