import React, { useState, useEffect } from "react";

export default function ViewCounter() {
    const [count, setCount] = useState("-"); 
    const API_URL = import.meta.env.VITE_COUNTER_API_URL;

    const syncViews = async (method = "GET") => {
        try {
            const response = await fetch(API_URL, { method });
            if (response.ok) {
                const data = await response.json();
                setCount(data.count ?? data); 
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => { syncViews("GET"); }, []);

    return (
        <div className="view_counter_container">
            <div className="view_counter">
                <span className="count">{count}</span>
                <span className="label">Views</span>
            </div>

            <button className="like-btn" onClick={() => syncViews("POST")}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
            </button>
        </div>
    );
}