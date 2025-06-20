import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; // Speaker icons

/**
 * TextToSpeech Component
 *
 * A React component that enables text-to-speech functionality using the Web Speech API.
 * It allows users to listen to the provided text and toggle speech playback.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be spoken aloud.
 *
 * @returns {JSX.Element} A button that toggles text-to-speech playback.
 *
 * Features:
 * - Uses `window.speechSynthesis` for speech synthesis.
 * - Supports toggling speech on and off.
 * - Displays different icons based on speech state.
 */
const TextToSpeech = ({ text }: { text: string }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeech = () => {
    const synth = window.speechSynthesis;

    if (isSpeaking) {
      synth.cancel(); // Stop speech if it's already speaking
      setIsSpeaking(false);
      return;
    }

    if (text.trim().length === 0) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // Set language
    utterance.rate = 1; // Adjust speed (1 is normal)

    utterance.onend = () => setIsSpeaking(false); // Reset state when speech ends
    synth.speak(utterance);

    setIsSpeaking(true);
  };

  return (
    <button
      onClick={handleSpeech}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
    >
      {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </button>
  );
};

export default TextToSpeech;
