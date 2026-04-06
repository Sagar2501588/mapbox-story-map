import React, { useEffect, useState } from "react";
import scrollama from "scrollama";
import Map from "./Map";
import "./Story.css";
import redfort from "../assets/redfort.jpg";
import indiagate from "../assets/indiagate.jpg";
import qutubminar from "../assets/qutubminar.jpg";
import humayun from "../assets/humayun.jpg";
import akshardham from "../assets/akshardham.jpg";
import lodhi from "../assets/lodhi.jpg";
import lotus from "../assets/lotus.jpg";
import cover from "../assets/cover.png";
import delhivideo from "../assets/delhivideo.mp4";

function Story() {

    const [activeChapter, setActiveChapter] = useState(null);
    useEffect(() => {
        const map3 = sections.find(sec => sec.type === "map-3");
        if (map3) {
            setActiveChapter(map3.chapters[0]);
        }
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const scroller = scrollama();

        setTimeout(() => {
            scroller
                .setup({
                    step: ".step",
                    offset: 0.5,
                })
                .onStepEnter((response) => {

                    // highlight
                    document
                        .querySelectorAll(".step")
                        .forEach(el => el.classList.remove("active"));

                    response.element.classList.add("active");

                    const id = response.element.id;
                    const map3 = sections.find(sec => sec.type === "map-3");
                    const chapter = map3?.chapters.find(c => c.id === id);

                    if (chapter) {
                        setActiveChapter(chapter);
                    }
                });
        }, 300);

        return () => scroller.destroy();
    }, []);


    const sections = [
        {
            type: "image",
            src: cover,
            title: "Delhi Through Time: The 10 Most Historic Places to Visit",
            subtitle: "Journey through the heart of India’s capital as we reveal the iconic landmarks that shaped Delhi’s rich history."
        },

        {
            type: "text",
            content:
                "Delhi is not one city. It is many cities, built over each other — each layer carrying the memory of an empire, a culture, a people. From the mythical Indraprastha to the Mughal capital of Shahjahanabad, from colonial New Delhi to today’s bustling metropolis — Delhi is a living timeline."
        },

        {
            type: "map-1",
            video: delhivideo,
            text: `Delhi has been rebuilt many times.<br>
                • Indraprastha (Mythological)<br>
                • Mehrauli (Sultanate)<br>
                • Shahjahanabad (Mughal)<br>
                • New Delhi (British)<br>
                Each city left behind a unique architectural and cultural legacy, creating the rich tapestry that is modern Delhi.`,
            height: "400px",
            // 🔥 NEW TABLE DATA
            table: [
                {
                    era: "Mythological Era",
                    period: "Ancient (Mahabharata Period)",
                    built: "Indraprastha",
                    description: "Believed to be the capital of the Pandavas, Indraprastha represents the earliest known reference to Delhi in ancient Indian texts.",
                    significance: "Marks the mythical origin of Delhi as a city of power and civilization."
                },
                {
                    era: "Delhi Sultanate",
                    period: "12th – 16th Century",
                    built: "Qutub Minar, Mehrauli Archaeological Complex, Alai Darwaza",
                    description: "The establishment of Islamic rule introduced new architectural styles, including arches, domes, and minarets.",
                    significance: "This period laid the foundation of Delhi as a major political center in North India."
                },
                {
                    era: "Mughal Empire",
                    period: "16th – 18th Century",
                    built: "Red Fort, Jama Masjid, Chandni Chowk, Humayun’s Tomb",
                    description: "Delhi flourished as a cultural and political capital under the Mughals, marked by grand architecture and urban planning.",
                    significance: "Defined the cultural identity of Old Delhi and established it as a global center of art and trade."
                },
                {
                    era: "British Colonial Era",
                    period: "19th – 20th Century",
                    built: "India Gate, Rashtrapati Bhavan, Parliament House, Connaught Place",
                    description: "The British redesigned Delhi into a planned capital with wide avenues and administrative buildings.",
                    significance: "Introduced modern urban planning and established New Delhi as the administrative capital."
                },
                {
                    era: "Modern Delhi",
                    period: "Post-1947 (Independent India)",
                    built: "Akshardham Temple, Lotus Temple, Delhi Metro, Cyber City",
                    description: "A rapidly growing metropolis combining heritage with modern infrastructure and global connectivity.",
                    significance: "Represents India’s political, economic, and cultural hub in the contemporary world."
                }
            ]


        },

        {
            type: "text",
            content:
                "The map above presents a spatial narrative of Delhi’s historical evolution, highlighting the key locations that collectively define the city’s identity. Rather than existing as a single, unified settlement, Delhi is composed of multiple layers of urban development, each shaped by different rulers, cultures, and time periods.\n\nFrom the dense and vibrant lanes of Old Delhi, where Mughal-era monuments and markets continue to thrive, to the wide, planned avenues of New Delhi introduced during the British colonial period, the city reflects a continuous transformation across centuries. Moving further south, the remnants of the Delhi Sultanate in Mehrauli reveal some of the earliest architectural expressions that helped establish Delhi as a center of power.\n\nEach location on the map is more than just a geographic point — it represents a distinct chapter in the story of Delhi. Together, these sites form a connected historical landscape, allowing viewers to explore how the city has grown, shifted, and redefined itself over time. By interacting with this map, users can trace Delhi’s journey from its ancient origins to its role as a modern capital, experiencing history not just through text, but through place and space."
        },

        {
            type: "map-2",
            chapter: {
                location: {
                    center: [77.22783688376326, 28.645249683878756],
                    zoom: 10.7,
                },
                style: "mapbox://styles/royakshay/cmnefiuv9002n01sge9ur3d3g"
            },
            height: "600px"
        },

        {
            type: "text",
            content:
                "Now, let us move beyond the overview and step into a more immersive exploration of Delhi.\n\nThis journey is designed to unfold gradually, allowing you to experience the city not just as a collection of places, but as a sequence of interconnected stories shaped by time.\n\nAs you scroll through the narrative, each section will introduce a new landmark, revealing its history, cultural significance, and role in shaping the identity of Delhi.\n\nFrom monumental forts and sacred spaces to vibrant streets and modern landmarks, every location contributes to the city’s layered character.\n\nAlongside the narrative, the map will dynamically guide your journey. With each scroll, it will shift focus, zooming into specific areas and highlighting key locations, helping you understand how these places are connected across space.\n\nThis synchronized experience allows you to visualize Delhi’s transformation while following its story.\n\nTake your time to explore, observe, and connect the dots, because in Delhi, every place is part of a larger story waiting to be discovered."
        },

        // 🔥 MAIN STORY MAP (UPDATED)
        {
            type: "map-3",
            height: "100vh",
            chapters: [
                {
                    id: "red-fort",
                    title: "Red Fort",
                    description: "Standing tall as a symbol of Mughal grandeur and India’s independence, the Red Fort was built in 1648 by Emperor Shah Jahan. Its massive red sandstone walls, royal halls, and intricate architecture once housed the Mughal court. Today, it remains a UNESCO World Heritage Site and the historic stage for India’s Independence Day celebrations.",
                    image: redfort,
                    alignment: "left",
                    location: {
                        center: [77.238953, 28.655704],  // 📍 exact
                        zoom: 18,                     // 🔍 zoom
                        pitch: 68.9,                     // 🎥 tilt
                        bearing: 114.02                  // 🧭 rotation
                    },
                    style: "mapbox://styles/royakshay/cmneb0w08000101shhkpk89ih",
                    mapAnimation: "flyTo",
                    rotateAnimation: true
                },
                {
                    id: "india-gate",
                    title: "India Gate",
                    description: "Standing proudly in the heart of New Delhi, India Gate is a grand war memorial built in 1931 to honor the brave Indian soldiers who lost their lives during World War I and the Third Anglo-Afghan War. Designed by the renowned British architect Sir Edwin Lutyens, this monumental arch rises majestically against the skyline, reflecting both sacrifice and national pride. Its walls are inscribed with the names of thousands of soldiers, making it a place of remembrance and respect. Over time, India Gate has also become a vibrant gathering spot for locals and visitors alike, surrounded by lush green lawns and illuminated beautifully at night. It stands not only as a symbol of history but also as a living landmark of unity, patriotism, and the spirit of modern India.",
                    image: indiagate,
                    alignment: "right",
                    location: {
                        center: [77.229421, 28.613035],
                        zoom: 18.59,
                        pitch: 56.42,
                        bearing: -44.50
                    },
                    style: "mapbox://styles/royakshay/cmneb0w08000101shhkpk89ih",
                    mapAnimation: "flyTo",
                    rotateAnimation: true
                },
                {
                    id: "qutub-minar",
                    title: "Qutub Minar",
                    description: "Rising gracefully above the skyline of Delhi, the Qutub Minar stands as one of the finest examples of Indo-Islamic architecture and a testament to the beginnings of Muslim rule in India. Built in 1193 by Qutb-ud-din Aibak and later completed by his successors, this towering minaret reaches a height of 73 meters, making it one of the tallest brick minarets in the world. Crafted from red sandstone and marble, its intricate carvings, Arabic inscriptions, and detailed balconies reflect remarkable craftsmanship and historical significance. Surrounded by ancient ruins and the famous Quwwat-ul-Islam Mosque, the Qutub Minar complex tells a story of conquest, culture, and architectural brilliance. Today, it is a UNESCO World Heritage Site and remains a major attraction, drawing visitors from around the world to witness its grandeur and legacy.",
                    image: qutubminar,
                    alignment: "left",
                    location: {
                        center: [77.185283, 28.524430],
                        zoom: 18.36,
                        pitch: 54.88,
                        bearing: -105.63
                    },
                    mapAnimation: "flyTo",
                    rotateAnimation: true
                },
                {
                    id: "humayun-tomb",
                    title: "Humayun’s Tomb",
                    description: "Often regarded as the precursor to the Taj Mahal, Humayun’s Tomb is a stunning example of Mughal architecture built in 1570 by Empress Bega Begum in memory of Emperor Humayun. Designed with Persian influences, this grand mausoleum features a symmetrical layout, lush gardens, and intricate red sandstone and white marble work. It marks the beginning of a new era in Mughal architectural style, blending beauty with geometric precision. Today, it stands as a UNESCO World Heritage Site and a peaceful retreat that reflects the elegance and legacy of the Mughal dynasty.",
                    image: humayun,
                    alignment: "right",
                    location: {
                        center: [77.2507, 28.5933],
                        zoom: 18.57,
                        pitch: 65.15,
                        bearing: 0
                    },
                    mapAnimation: "flyTo",
                    rotateAnimation: true
                },
                {
                    id: "akshardham",
                    title: "Akshardham Temple",
                    description: "A modern architectural marvel, the Akshardham Temple showcases the richness of Indian culture, spirituality, and craftsmanship. Opened in 2005, this grand temple complex is dedicated to Bhagwan Swaminarayan and is built entirely from intricately carved sandstone and marble without the use of steel. Surrounded by beautifully landscaped gardens and water features, the temple offers a serene and immersive experience. Its exhibitions, light shows, and spiritual ambiance make it not just a place of worship but also a center of cultural learning and inspiration.",
                    image: akshardham,
                    alignment: "left",
                    location: {
                        center: [77.277643, 28.612553],
                        zoom: 18.41,
                        pitch: 58.00,
                        bearing: -82.46
                    },
                    mapAnimation: "flyTo",
                    rotateAnimation: true
                },
                {
                    id: "lodhi-garden",
                    title: "Lodhi Garden",
                    description: "A perfect blend of history and nature, Lodhi Garden is a peaceful green oasis in the heart of Delhi, dotted with tombs from the 15th-century Lodhi dynasty. Spread across vast landscaped lawns, the garden features beautiful pathways, historic structures, and serene water bodies that attract both history enthusiasts and nature lovers. The architectural remnants, including the tombs of Sikandar Lodhi and Mohammed Shah, offer a glimpse into Delhi’s pre-Mughal era. Today, it remains a popular spot for morning walks, relaxation, and cultural exploration.",
                    image: lodhi,
                    alignment: "right",
                    location: {
                        center: [77.219428, 28.593160],
                        zoom: 15.90,
                        pitch: 48.00,
                        bearing: -32.00
                    },
                    mapAnimation: "flyTo",
                    rotateAnimation: true
                },
                {
                    id: "lotus-temple",
                    title: "Lotus Temple",
                    description: "Known for its striking lotus-shaped design, the Lotus Temple is one of Delhi’s most iconic modern landmarks and a symbol of peace and unity. Completed in 1986, this Bahá'í House of Worship welcomes people of all religions to meditate and reflect in silence. Its unique architecture, made of white marble petals, creates a serene and visually captivating environment. Surrounded by tranquil pools and gardens, the temple stands as a powerful representation of harmony, spirituality, and inclusiveness in the modern world.",
                    image: lotus,
                    alignment: "left",
                    location: {
                        center: [77.259069, 28.553469],
                        zoom: 17.82,
                        pitch: 64.50,
                        bearing: -116.80
                    },
                    mapAnimation: "flyTo",
                    rotateAnimation: true
                }
            ]
        }
    ];

    return (
        <div className="story-page">
            {sections.map((sec, index) => {

                // 🖼️ IMAGE SECTION (hero cover)
                if (sec.type === "image") {
                    return (
                        <section
                            key={index}
                            className="hero-section"
                            style={{ backgroundImage: `url(${sec.src})` }}
                        >
                            <div className="hero-overlay">
                                <h1>{sec.title}</h1>
                                <p>{sec.subtitle}</p>
                            </div>
                        </section>
                    );
                }

                // 📝 TEXT SECTION (normal paragraph content)
                if (sec.type === "text") {
                    return (
                        <section key={index} className="text-section">
                            <div className="text-container">
                                <p>{sec.content}</p>
                            </div>
                        </section>
                    );
                }

                if (sec.type === "map-1") {
                    return (
                        <section key={index} className="map-section map-1">

                            {/* 🔥 TOP: TEXT + IMAGE */}
                            <div className="map1-wrapper">

                                {/* LEFT SIDE */}
                                <div className="map1-text">
                                    <p dangerouslySetInnerHTML={{ __html: sec.text }}></p>
                                </div>

                                {/* RIGHT SIDE */}
                                <div className="map1-image">
                                    {sec.video ? (
                                        <video
                                            src={sec.video}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (
                                        <img src={sec.img} alt="map" />
                                    )}
                                </div>

                            </div>

                            {/* 🔥 BOTTOM: CENTERED TABLE */}
                            {sec.table && (
                                <div className="map1-table-wrapper">

                                    {/* 🔥 LEFT HEADING */}
                                    <div className="table-heading-side">
                                        <h2>Historical Eras of Delhi</h2>
                                    </div>

                                    {/* 🔥 RIGHT TABLE */}
                                    <table className="map-table">
                                        <thead>
                                            <tr>
                                                <th>Era</th>
                                                <th>Key Constructions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sec.table.map((row, i) => (
                                                <tr key={i}>
                                                    <td>{row.era}</td>
                                                    <td>{row.built}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                            )}

                        </section>
                    );
                }

                // 🗺️ MAP-2 (static overview map with markers)
                if (sec.type === "map-2") {
                    return (
                        <section key={index} className={`map-section ${sec.type}`}>

                            {/* 🔥 TITLE shown above map */}
                            <div className="map-title">
                                Location Map of All Tourist Points
                            </div>

                            <div className="map-container">
                                {/* 🔥 Map receives chapter config + all chapters for markers */}
                                <Map
                                    chapter={sec.chapter}
                                    chapters={sections.find(s => s.type === "map-3")?.chapters}
                                    height={sec.height}   // 📏 controlled from sections object
                                />
                            </div>
                        </section>
                    );
                }

                // 🗺️ GENERIC MAP (fallback for map-1 / map-2)
                if (sec.type === "map-2") {
                    return (
                        <section key={index} className={`map-section ${sec.type}`}>
                            <div className="map-container">
                                {/* 🔥 simple map without markers */}
                                <Map chapter={sec.chapter} height={sec.height} />
                            </div>
                        </section>
                    );
                }

                // 🔥 MAIN STORY MAP (scroll-driven interactive map)
                if (sec.type === "map-3") {
                    return (
                        <section key={index} className="map-3">

                            {/* 📝 LEFT SIDE STORY CONTENT */}
                            <div className="map3-story">
                                {sec.chapters.map((chap) => (
                                    <div key={chap.id} id={chap.id} className="step">
                                        <div className="story-card">
                                            <h3>{chap.title}</h3>
                                            <p>{chap.description}</p>

                                            {/* 🖼️ IMAGE INSIDE STORY CARD */}
                                            {chap.image && (
                                                <div className="story-image">
                                                    <img
                                                        src={chap.image}
                                                        alt={chap.title}
                                                        onClick={() => setSelectedImage(chap.image)}  // 🔍 opens modal
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 🗺️ RIGHT SIDE MAP AREA */}
                            <div className="map3-map">

                                {/* 🔥 only render map when chapter is active */}
                                {activeChapter && (
                                    <div className="map-card">   {/* 🎴 card wrapper for styling */}

                                        <Map
                                            chapter={activeChapter}   // 📍 controls camera (center, zoom, pitch)
                                            chapters={sec.chapters}   // 📍 used for markers
                                            height="100%"             // 📏 map fills entire card
                                        />

                                    </div>
                                )}
                            </div>
                        </section>
                    );
                }

                return null;
            })}

            {/* 🔍 IMAGE MODAL (fullscreen preview) */}
            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="full" />
                </div>
            )}

            {/* 🔚 FOOTER */}
            <footer className="story-footer">
                <p> 2026 Story Map Project</p>
            </footer>
        </div>
    );
}

export default Story;