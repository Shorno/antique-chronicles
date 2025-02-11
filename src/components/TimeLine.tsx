import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scroll, Clock, MapPin } from "lucide-react";

const historicalEvents = [
    {
        id: 1,
        title: "Ancient Egypt",
        date: "3000 BC - 30 BC",
        description:
            "Ancient Egypt is renowned for its monumental pyramids, pharaohs, and rich mythology. This civilization along the Nile laid the foundations for art, architecture, and culture in the ancient world.",
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1600",
        location: "Nile River Valley",
        achievement: "Built the Great Pyramids"
    },
    {
        id: 2,
        title: "Classical Greece",
        date: "800 BC - 146 BC",
        description:
            "Classical Greece is celebrated for its revolutionary ideas in philosophy, art, and politics. Its legacy includes the birth of democracy and timeless contributions in literature and drama.",
        image: "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?auto=format&fit=crop&q=80&w=1600",
        location: "Mediterranean Region",
        achievement: "Established Democracy"
    },
    {
        id: 3,
        title: "Roman Empire",
        date: "27 BC - 476 AD",
        description:
            "The Roman Empire left an indelible mark on Western civilization through its innovations in law, engineering, and governance. Its vast network of roads and monuments still inspire modern societies.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1600",
        location: "Mediterranean & Europe",
        achievement: "Built the Colosseum"
    },
    {
        id: 4,
        title: "Ancient China",
        date: "2100 BC - 220 AD",
        description:
            "Ancient China flourished with dynasties that pioneered paper, printing, and innovative philosophies. Its cultural heritage is rich with art, science, and timeless wisdom.",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=1600",
        location: "East Asia",
        achievement: "Invented Paper Making"
    },
];

export default function HistoricalContextTimeline() {
    const [activeEvent, setActiveEvent] = useState(historicalEvents[0]);
    const [direction, setDirection] = useState(0);

    const handleEventChange = (event: typeof historicalEvents[0]) => {
        setDirection(event.id > activeEvent.id ? 1 : -1);
        setActiveEvent(event);
    };

    return (
        <section className="min-h-screen  bg-gradient-to-b from-stone-100 to-stone-200 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <Scroll className="w-12 h-12 text-stone-700 dark:text-amber-500" />
                    </div>
                    <h2 className="text-4xl font-bold text-stone-800 dark:text-white font-serif">
                        Journey Through History
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 dark:text-gray-300">
                        Explore the key civilizations that shaped our ancient world
                    </p>
                </div>

                <div className="relative flex justify-between items-center mb-16">
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-stone-500 to-transparent dark:via-amber-500"
                         style={{ top: "50%" }} />

                    {historicalEvents.map((event) => (
                        <div key={event.id} className="relative z-10 flex flex-col items-center">
                            <motion.button
                                onClick={() => handleEventChange(event)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-20 h-20 rounded-full flex items-center justify-center 
                                    border-4 transition-all duration-300 ${
                                    activeEvent.id === event.id
                                        ? "bg-stone-700 border-stone-800 dark:bg-amber-500 dark:border-amber-600"
                                        : "bg-white border-stone-300 dark:bg-gray-800 dark:border-gray-700 hover:border-stone-500"
                                }`}
                            >
                                <span className={`text-sm font-bold text-center leading-tight ${
                                    activeEvent.id === event.id ? "text-white" : "text-stone-700 dark:text-white"
                                }`}>
                                    {event.date.split(" ")[0]}
                                    <br />
                                    {event.date.split(" ")[1]}
                                </span>
                            </motion.button>
                            <div className={`mt-4 text-sm font-semibold transition-colors duration-300 ${
                                activeEvent.id === event.id ? "text-stone-800 dark:text-amber-500" : "text-stone-500 dark:text-gray-400"
                            }`}>
                                {event.title}
                            </div>
                        </div>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeEvent.id}
                        initial={{ opacity: 0, x: direction * 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -direction * 50 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <img
                                src={activeEvent.image}
                                alt={activeEvent.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-3xl font-bold font-serif mb-2">{activeEvent.title}</h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm">{activeEvent.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">{activeEvent.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
                            <div className="prose dark:prose-invert max-w-none">
                                <h4 className="text-xl font-semibold text-stone-700 dark:text-amber-500 mb-4">
                                    Key Achievement
                                </h4>
                                <p className="text-2xl font-serif mb-6 text-stone-800 dark:text-white">
                                    {activeEvent.achievement}
                                </p>
                                <h4 className="text-xl font-semibold text-stone-700 dark:text-amber-500 mb-4">
                                    Historical Context
                                </h4>
                                <p className="text-stone-600 dark:text-gray-300 leading-relaxed">
                                    {activeEvent.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}