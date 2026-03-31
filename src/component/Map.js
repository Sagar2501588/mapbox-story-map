import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

mapboxgl.accessToken =
    "pk.eyJ1Ijoicm95YWtzaGF5IiwiYSI6ImNtaG4xajNkbTBoejQya3NqdTJvcnNxdGYifQ.E28RXpfwqtYaSvlLN_E00A";

function Map({ chapter, chapters, height = "500px" }) {
    const mapContainer = useRef(null);
    const map = useRef(null);


    let rotationFrame;

    const startRotation = (center) => {
        const rotate = () => {
            if (!map.current) return;

            const bearing = map.current.getBearing();

            map.current.easeTo({
                center: center,       // 🔥 center fixed
                bearing: bearing + 0.1, // 🔥 smooth rotation
                duration: 50,
                easing: (t) => t
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

            return;
        }

        // 🛑 stop previous rotation
        stopRotation();

        // 🎥 move camera
        map.current.flyTo({
            center: chapter.location.center,
            zoom: chapter.location.zoom,
            pitch: chapter.location.pitch || 0,
            bearing: chapter.location.bearing || 0,
            offset: [0, -150]
        });

        // 🔥 START CONTINUOUS ROTATE
        if (chapter.rotateAnimation) {
            setTimeout(() => {
                startRotation(chapter.location.center);
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

            const marker = new mapboxgl.Marker(el)
                .setLngLat(chap.location.center)
                .addTo(map.current);

            window.allMarkers.push(marker);
        });
    }, [chapters, chapter]); // 🔥 VERY IMPORTANT FIX

    // 🧩 resize fix
    useEffect(() => {
        if (map.current) {
            setTimeout(() => {
                map.current.resize();
            }, 100);
        }
    }, [chapter]);

    useEffect(() => {
        return () => stopRotation();
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