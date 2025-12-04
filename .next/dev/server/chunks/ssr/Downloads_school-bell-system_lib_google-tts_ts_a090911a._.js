module.exports = [
"[project]/Downloads/school-bell-system/lib/google-tts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Google Translate TTS Service (Unofficial)
 * Provides natural-sounding voices via Google's public TTS endpoint.
 * Useful as a high-quality fallback when paid AI voices are not configured.
 */ __turbopack_context__.s([
    "getGoogleTTSUrl",
    ()=>getGoogleTTSUrl,
    "playGoogleTTS",
    ()=>playGoogleTTS
]);
const getGoogleTTSUrl = (text, language = "english")=>{
    // Map internal languages to Google TTS codes
    const langMap = {
        english: "en",
        arabic: "ar",
        hausa: "ha",
        twi: "ak" // Akan (Twi)
    };
    const lang = langMap[language] || "en";
    const encodedText = encodeURIComponent(text);
    // Use our local proxy to avoid CORS issues
    return `/api/tts?text=${encodedText}&lang=${lang}`;
};
const playGoogleTTS = (text, language = "english")=>{
    return new Promise((resolve)=>{
        try {
            const url = getGoogleTTSUrl(text, language);
            const audio = new Audio(url);
            audio.onended = ()=>{
                console.log("[GoogleTTS] Playback finished");
                resolve(true);
            };
            audio.onerror = (e)=>{
                console.error("[GoogleTTS] Playback error:", e);
                resolve(false);
            };
            console.log(`[GoogleTTS] Playing: "${text}" (${language})`);
            audio.play().catch((err)=>{
                console.error("[GoogleTTS] Play failed (likely autoplay policy):", err);
                resolve(false);
            });
        } catch (error) {
            console.error("[GoogleTTS] Setup error:", error);
            resolve(false);
        }
    });
};
}),
];

//# sourceMappingURL=Downloads_school-bell-system_lib_google-tts_ts_a090911a._.js.map