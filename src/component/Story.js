import React, { useEffect, useState } from "react";
import scrollama from "scrollama";
import Map from "./Map";
import "./Story.css";

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
            src: "/assets/cover.png",
            title: "Delhi Through Time: The 10 Most Historic Places to Visit",
            subtitle: "Journey through the heart of India’s capital as we reveal the iconic landmarks that shaped Delhi’s rich history."
        },

        {
            type: "text",
            content:
                "Delhi is not just a city—it is a timeline of empires, cultures, and architectural brilliance. From Mughal forts to colonial landmarks and spiritual centers, every monument tells a story. This story map takes you on a journey through ten of Delhi’s most iconic places and uncovers the history behind them."
        },

        // {
        //     type: "map-1",
        //     chapter: {
        //         location: {
        //             center: [77.2090, 28.6139],
        //             zoom: 8.5,
        //         }
        //     },
        //     height: "350px"
        // },

        {
            type: "text",
            content:
                "The map above highlights the key locations that define Delhi’s historical landscape. From the old city to modern landmarks, these sites are spread across the capital, each representing a different chapter of its past."
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
                "Now, let’s explore Delhi in a more immersive way. Scroll through the story to discover each landmark, its history, and its significance—while the map guides you through the journey."
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
                    image: "/assets/redfort.jpg",
                    alignment: "left",
                    location: {
                        center: [77.238953, 28.655704],  // 📍 exact
                        zoom: 19,                     // 🔍 zoom
                        pitch: 68.9,                     // 🎥 tilt
                        bearing: 114.02                  // 🧭 rotation
                    },
                    style: "mapbox://styles/royakshay/cmneb0w08000101shhkpk89ih",
                    mapAnimation: "flyTo"
                },
                {
                    id: "india-gate",
                    title: "India Gate",
                    description: "Standing proudly in the heart of New Delhi, India Gate is a grand war memorial built in 1931 to honor the brave Indian soldiers who lost their lives during World War I and the Third Anglo-Afghan War. Designed by the renowned British architect Sir Edwin Lutyens, this monumental arch rises majestically against the skyline, reflecting both sacrifice and national pride. Its walls are inscribed with the names of thousands of soldiers, making it a place of remembrance and respect. Over time, India Gate has also become a vibrant gathering spot for locals and visitors alike, surrounded by lush green lawns and illuminated beautifully at night. It stands not only as a symbol of history but also as a living landmark of unity, patriotism, and the spirit of modern India.",
                    image: "/assets/indiagate.jpg",
                    alignment: "right",
                    location: {
                        center: [77.229421, 28.613035],
                        zoom: 18.59,
                        pitch: 56.42,
                        bearing: -44.50
                    },
                    style: "mapbox://styles/royakshay/cmneb0w08000101shhkpk89ih",
                    mapAnimation: "flyTo"
                },
                {
                    id: "qutub-minar",
                    title: "Qutub Minar",
                    description: "Rising gracefully above the skyline of Delhi, the Qutub Minar stands as one of the finest examples of Indo-Islamic architecture and a testament to the beginnings of Muslim rule in India. Built in 1193 by Qutb-ud-din Aibak and later completed by his successors, this towering minaret reaches a height of 73 meters, making it one of the tallest brick minarets in the world. Crafted from red sandstone and marble, its intricate carvings, Arabic inscriptions, and detailed balconies reflect remarkable craftsmanship and historical significance. Surrounded by ancient ruins and the famous Quwwat-ul-Islam Mosque, the Qutub Minar complex tells a story of conquest, culture, and architectural brilliance. Today, it is a UNESCO World Heritage Site and remains a major attraction, drawing visitors from around the world to witness its grandeur and legacy.",
                    image: "/assets/qutubminar.jpg",
                    alignment: "left",
                    location: {
                        center: [77.185283, 28.524430],
                        zoom: 18.36,
                        pitch: 54.88,
                        bearing: -105.63
                    },
                    mapAnimation: "flyTo"
                },
                {
                    id: "humayun-tomb",
                    title: "Humayun’s Tomb",
                    description: "Often regarded as the precursor to the Taj Mahal, Humayun’s Tomb is a stunning example of Mughal architecture built in 1570 by Empress Bega Begum in memory of Emperor Humayun. Designed with Persian influences, this grand mausoleum features a symmetrical layout, lush gardens, and intricate red sandstone and white marble work. It marks the beginning of a new era in Mughal architectural style, blending beauty with geometric precision. Today, it stands as a UNESCO World Heritage Site and a peaceful retreat that reflects the elegance and legacy of the Mughal dynasty.",
                    image: "/assets/humayun.jpg",
                    alignment: "right",
                    location: {
                        center: [77.2507, 28.5933],
                        zoom: 18.57,
                        pitch: 65.15,
                        bearing: 0
                    },
                    mapAnimation: "flyTo"
                },
                {
                    id: "akshardham",
                    title: "Akshardham Temple",
                    description: "A modern architectural marvel, the Akshardham Temple showcases the richness of Indian culture, spirituality, and craftsmanship. Opened in 2005, this grand temple complex is dedicated to Bhagwan Swaminarayan and is built entirely from intricately carved sandstone and marble without the use of steel. Surrounded by beautifully landscaped gardens and water features, the temple offers a serene and immersive experience. Its exhibitions, light shows, and spiritual ambiance make it not just a place of worship but also a center of cultural learning and inspiration.",
                    image: "/assets/akshardham.jpg",
                    alignment: "left",
                    location: {
                        center: [77.277643, 28.612553],
                        zoom: 18.41,
                        pitch: 58.00,
                        bearing: -82.46
                    },
                    mapAnimation: "flyTo"
                },
                {
                    id: "lodhi-garden",
                    title: "Lodhi Garden",
                    description: "A perfect blend of history and nature, Lodhi Garden is a peaceful green oasis in the heart of Delhi, dotted with tombs from the 15th-century Lodhi dynasty. Spread across vast landscaped lawns, the garden features beautiful pathways, historic structures, and serene water bodies that attract both history enthusiasts and nature lovers. The architectural remnants, including the tombs of Sikandar Lodhi and Mohammed Shah, offer a glimpse into Delhi’s pre-Mughal era. Today, it remains a popular spot for morning walks, relaxation, and cultural exploration.",
                    image: "/assets/lodhi.jpg",
                    alignment: "right",
                    location: {
                        center: [77.219428, 28.593160],
                        zoom: 15.90,
                        pitch: 48.00,
                        bearing: -32.00
                    },
                    mapAnimation: "flyTo"
                },
                {
                    id: "lotus-temple",
                    title: "Lotus Temple",
                    description: "Known for its striking lotus-shaped design, the Lotus Temple is one of Delhi’s most iconic modern landmarks and a symbol of peace and unity. Completed in 1986, this Bahá'í House of Worship welcomes people of all religions to meditate and reflect in silence. Its unique architecture, made of white marble petals, creates a serene and visually captivating environment. Surrounded by tranquil pools and gardens, the temple stands as a powerful representation of harmony, spirituality, and inclusiveness in the modern world.",
                    image: "/assets/lotus.jpg",
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

                // 🖼️ IMAGE
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

                // 📝 TEXT
                if (sec.type === "text") {
                    return (
                        <section key={index} className="text-section">
                            <div className="text-container">
                                <p>{sec.content}</p>
                            </div>
                        </section>
                    );
                }

                if (sec.type === "map-2") {
                    return (
                        <section key={index} className={`map-section ${sec.type}`}>

                            {/* 🔥 TITLE */}
                            <div className="map-title">
                                Location Map of All Tourist Points
                            </div>

                            <div className="map-container">
                                <Map chapter={sec.chapter} height={sec.height} />
                            </div>
                        </section>
                    );
                }



                // 🗺️ NORMAL MAP (map-1, map-2)
                if (sec.type === "map-1" || sec.type === "map-2") {
                    return (
                        <section key={index} className={`map-section ${sec.type}`}>
                            <div className="map-container">
                                <Map chapter={sec.chapter} height={sec.height} />
                            </div>
                        </section>
                    );
                }

                // 🔥 SPECIAL MAP-3 (SCROLL STORY MAP)
                if (sec.type === "map-3") {
                    return (
                        <section key={index} className="map-3">

                            {/* LEFT SIDE STORY */}
                            <div className="map3-story">
                                {sec.chapters.map((chap) => (
                                    <div key={chap.id} id={chap.id} className="step">
                                        <div className="story-card">
                                            <h3>{chap.title}</h3>
                                            <p>{chap.description}</p>

                                            {/* 🖼️ IMAGE UNDER TEXT */}
                                            {chap.image && (
                                                <div className="story-image">
                                                    <img
                                                        src={chap.image}
                                                        alt={chap.title}
                                                        onClick={() => setSelectedImage(chap.image)}  // ✅ এখানে add
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* RIGHT SIDE MAP (ONLY ONE MAP) */}
                            <div className="map3-map">

                                {/* 🗺️ MAP */}
                                {activeChapter && (
                                    <Map
                                        chapter={activeChapter}
                                        chapters={sec.chapters}   // 🔥 ADD THIS
                                        height={sec.height}
                                    />
                                )}

                            </div>

                        </section>
                    );
                }

                return null;
            })}

            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="full" />
                </div>
            )}

            <footer className="story-footer">
                <p> 2026 Story Map Project</p>
            </footer>
        </div>
    );
}

export default Story;