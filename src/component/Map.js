import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

mapboxgl.accessToken =
    "pk.eyJ1Ijoicm95YWtzaGF5IiwiYSI6ImNtaG4xajNkbTBoejQya3NqdTJvcnNxdGYifQ.E28RXpfwqtYaSvlLN_E00A";

function Map({ chapter, chapters, height = "500px" }) {
    const mapContainer = useRef(null);
    const map = useRef(null);


    let rotationFrame;

    const startRotation = (center, fixedZoom, fixedPitch) => {
        if (!center || fixedZoom == null) return;   // ✅ ADD HERE

        const rotate = () => {
            if (!map.current) return;               // ✅ AND HERE

            map.current.jumpTo({
                center: center,
                zoom: fixedZoom,
                pitch: fixedPitch || 0,
                bearing: map.current.getBearing() + 0.01
            });

            rotationFrame = requestAnimationFrame(rotate);
        };

        rotate();
    };

    const stopRotation = () => {
        if (rotationFrame) {
            cancelAnimationFrame(rotationFrame);
        }
    };

    // 🗺️ INIT MAP + CAMERA MOVE
    useEffect(() => {

        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: chapter.style || "mapbox://styles/mapbox/dark-v11",
                center: chapter.location.center,
                zoom: chapter.location.zoom,
                pitch: chapter.location.pitch || 0,
                bearing: chapter.location.bearing || 0,
            });

            // ✅ ADD EVENTS HERE (ONLY ONCE)
            map.current.on("load", () => {
                // 🔥 HOVER CURSOR
                map.current.on("mouseenter", "delhi-tourist-points", () => {
                    map.current.getCanvas().style.cursor = "pointer";
                });

                map.current.on("mouseleave", "delhi-tourist-points", () => {
                    map.current.getCanvas().style.cursor = "";
                });

            });

            return;
        }

        // 🛑 stop previous rotation
        map.current.stop();   // ✅ ADD THIS LINE

        // 🎥 move camera
        map.current.flyTo({
            center: chapter.location.center,
            zoom: chapter.location.zoom,
            pitch: chapter.location.pitch || 0,
            bearing: chapter.location.bearing || 0,
            // offset: [0, -150]
        });


        map.current.once("idle", () => {
            if (!map.current.getLayer("delhi-tourist-points")) return;

            // 🔥 CLICK
            // map.current.on("click", "delhi-tourist-points", (e) => {
            //     const feature = e.features[0];
            //     const name = feature.properties.name || "No name";

            //     new mapboxgl.Popup()
            //         .setLngLat(feature.geometry.coordinates)
            //         .setText(name)
            //         .addTo(map.current);
            // });

            // 🔥 CURSOR
            map.current.on("mouseenter", "delhi-tourist-points", () => {
                map.current.getCanvas().style.cursor = "pointer";
            });

            map.current.on("mouseleave", "delhi-tourist-points", () => {
                map.current.getCanvas().style.cursor = "";
            });
        });

        // 🔥 START CONTINUOUS ROTATE
        if (chapter.rotateAnimation) {
            setTimeout(() => {
                startRotation(
                    chapter.location.center,
                    chapter.location.zoom,
                    chapter.location.pitch
                );
            }, 1500);
        }

    }, [chapter]);

    // 📍 ADD MARKERS (FIXED)
    useEffect(() => {
        if (!map.current || !chapters || chapters.length === 0) return;

        // remove old markers
        if (window.allMarkers) {
            window.allMarkers.forEach((m) => m.remove());
        }

        window.allMarkers = [];

        chapters.forEach((chap) => {
            const el = document.createElement("div");
            el.className = "custom-marker";

            const popup = new mapboxgl.Popup({ offset: 25 }).setText(chap.title);

            const marker = new mapboxgl.Marker(el)
                .setLngLat(chap.location.center)
                // .setPopup(popup)   // ✅ ADD THIS
                .addTo(map.current);

            window.allMarkers.push(marker);
        });
    }, [chapters, chapter]); // 🔥 VERY IMPORTANT FIX

    // 🧩 resize fix
    useEffect(() => {
        if (map.current) {
            requestAnimationFrame(() => {
                map.current.resize();
            });
        }
    }, [chapter]);

    useEffect(() => {
        return () => stopRotation();
    }, []);

    useEffect(() => {
        if (!map.current) return;

        const handleResize = () => map.current.resize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            ref={mapContainer}
            style={{
                width: "100%",
                height: height,   // 🔥 IMPORTANT
            }}
        />
    );
}

export default Map;