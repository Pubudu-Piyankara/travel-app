import { BsTicketPerforated } from "react-icons/bs";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { MdOutlineFestival } from "react-icons/md";

export const NAVBAR_DATA = [
  { href: "/", key: "Home", label: "Home" },
  { href: "/", key: "Travel Guide", label: "Travel Guide" },
  { href: "/", key: "Acitivies", label: "Acitivies" },
  { href: "/", key: "Maps", label: "Maps" },
  { href: "/", key: "Festivals", label: "Festivals" },
];

export const services = [
  {
    title: "Best Destinations",
    description:
      "Discover the most beautiful and popular destinations to visit in Sri Lanka.",
    content:
      "Explore the top-rated travel spots and hidden gems that offer breathtaking scenery and unforgettable experiences.",
    button: "Explore More",
    icon: BsTicketPerforated,
  },
  {
    title: "Travel Guide",
    description:
      "Get comprehensive travel guides to help you plan your perfect trip.",
    content:
      "Find tips, itineraries, and essential information to make your travel experience seamless and enjoyable.",
    button: "Read Guide",
    icon: MdOutlineTipsAndUpdates,
  },
  {
    title: "Events and Festivals",
    description:
      "Experience the vibrant culture and traditions through various events and festivals.",
    content:
      "Stay updated on upcoming festivals, cultural events, and celebrations happening around Sri Lanka.",
    button: "See Events",
    icon: MdOutlineFestival,
  },
];

export const destinations = [
  {
    name: "Sigiriya",
    description:
      "Discover the awe-inspiring Sigiriya, an ancient rock fortress and UNESCO World Heritage site that stands majestically at the heart of Sri Lanka. Ascend nearly 200 meters to explore the ruins of a once-magnificent palace atop a colossal rock column. Marvel at the breathtaking frescoes, intricate gardens, and the legendary Mirror Wall. Sigiriya, often dubbed the 'Eighth Wonder of the World,' offers an unforgettable journey into the island's rich history and natural beauty, promising a travel experience like no other.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/02/10/15/40/sigiriya-3987508_1280.jpg",
  },
  {
    name: "The Temple of the Sacred Tooth Relic, Kandy",
    description:
      "Immerse yourself in the spiritual heart of Sri Lanka at the Temple of the Sacred Tooth Relic in Kandy. This revered temple, nestled within the lush landscapes of Kandy, houses the sacred tooth relic of Lord Buddha, a symbol of profound spiritual significance. Experience the vibrant rituals, intricate architecture, and serene surroundings that make this UNESCO World Heritage site a must-visit for pilgrims and travelers alike. The Temple of the Sacred Tooth Relic offers a unique glimpse into the island's rich cultural and religious heritage, promising a deeply enriching and unforgettable journey.",
    imageUrl:
      "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Galle",
    description:
      "Step back in time and explore the enchanting Galle Fort, a UNESCO World Heritage site that seamlessly blends history, culture, and coastal beauty. This 16th-century fort, originally built by the Portuguese and later expanded by the Dutch, is a captivating maze of cobblestone streets, colonial architecture, and vibrant cafes. Stroll along the ramparts with panoramic views of the Indian Ocean, visit charming boutiques, and immerse yourself in the rich tapestry of Sri Lanka's colonial past. Galle Fort promises an unforgettable journey through history, making it a must-visit destination for every traveler.",
    imageUrl:
      "https://images.unsplash.com/photo-1579989197111-928f586796a3?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Yala National Park",
    description:
      "Embark on an exhilarating adventure at Yala National Park, Sri Lanka's premier wildlife sanctuary. Renowned for its diverse ecosystems and abundant wildlife, Yala offers a thrilling safari experience where you can spot majestic leopards, playful elephants, and a myriad of exotic birds in their natural habitat. Traverse through dense jungles, serene lagoons, and open grasslands, each offering a unique glimpse into the park's rich biodiversity. Yala National Park is a haven for nature lovers and thrill-seekers alike, promising an unforgettable encounter with the wild beauty of Sri Lanka.",
    imageUrl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/19/dd/0c.jpg",
  },
];

export const festivals = [
  {
    name: "Sinhala and Tamil New Year",
    date: "April 13-14",
    description:
      "Celebrated in April, this festival marks the traditional New Year for the Sinhalese and Tamil communities. It features various cultural rituals, traditional games, and delicious feasts.",
  },
  {
    name: "Vesak",
    date: "May (Full Moon Day)",
    description:
      "Vesak commemorates the birth, enlightenment, and passing away of Lord Buddha. It is celebrated with beautiful lanterns, illuminated decorations, and acts of charity.",
  },
  {
    name: "Kandy Esala Perahera",
    date: "July/August",
    description:
      "One of the grandest festivals in Sri Lanka, the Kandy Esala Perahera is a spectacular procession honoring the Sacred Tooth Relic of Lord Buddha. It features traditional dances, fire-breathers, and lavishly decorated elephants.",
  },
  {
    name: "Deepavali",
    date: "October/November",
    description:
      "Also known as Diwali, this Hindu festival of lights symbolizes the victory of light over darkness and good over evil. It is celebrated with oil lamps, fireworks, and festive sweets.",
  },
  {
    name: "Christmas",
    date: "December 25",
    description:
      "Christmas is celebrated by the Christian community in Sri Lanka with midnight masses, carol singing, and festive gatherings. Streets and homes are decorated with lights and Christmas trees.",
  },
];