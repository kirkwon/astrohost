import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaMicrophone, FaStop } from 'react-icons/fa';

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        handleSubmit(null, transcript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e, transcript = '') => {
    if (e) e.preventDefault();
    const query = transcript || input;
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { text: query, sender: 'user' }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      const aiMessage = data.text;
      setMessages((prev) => [...prev, { text: aiMessage, sender: 'ai' }]);
      speak(aiMessage);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages((prev) => [...prev, { text: 'Sorry, I encountered an error.', sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 1.2;
      utterance.rate = 1.1;
      speechSynthesis.speak(utterance);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <div className="p-4 h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-blue-600' : 'bg-gray-700'}`}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 flex items-center">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me about the history of AI..."
          className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading || isRecording}
        />
        <button
          type="button"
          onClick={toggleRecording}
          className="ml-2 p-2 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        >
          {isRecording ? <FaStop /> : <FaMicrophone />}
        </button>
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading || isRecording}
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Chat;
