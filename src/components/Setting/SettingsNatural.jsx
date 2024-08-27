import { useState } from 'react';
import iconHome from '../../assets/icon/icon_home.svg';
import iconEvent from '../../assets/icon/icon_Event.svg';
import iconMode from '../../assets/icon/icon_Model.svg';
import iconSetting from '../../assets/icon/icon_Setting.svg';

const SettingsNatural = () => {
    const [isAudioOpen, setIsAudioOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const toggleAudioSection = () => setIsAudioOpen(!isAudioOpen);
    const toggleNotificationsSection = () => setIsNotificationsOpen(!isNotificationsOpen);
    const toggleLanguageSection = () => setIsLanguageOpen(!isLanguageOpen);

    return (
        <div className="flex flex-col h-screen bg-[#EBF9E8]">
            <header className="bg-gradient-to-r from-[#7BBF5E] to-[#A1D68B] text-center text-white py-4 text-xl font-bold shadow-md">
                Settings
            </header>
            
            <div className="flex-1 p-6 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300">
                    <div 
                        className="flex justify-between items-center cursor-pointer" 
                        onClick={toggleAudioSection}
                    >
                        <h2 className="text-lg font-semibold text-gray-800">Audio</h2>
                        <svg 
                            className={`w-6 h-6 text-gray-600 hover:text-gray-800 transition-transform duration-200 ${isAudioOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden ${isAudioOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-gray-600">Music</h3>
                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                className="w-full h-2 mt-2 bg-gray-200 rounded-full appearance-none cursor-pointer hover:bg-gray-300 transition-all duration-200"
                                style={{ accentColor: '#7BBF5E' }} 
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-gray-600">Notifications</h3>
                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                className="w-full h-2 mt-2 bg-gray-200 rounded-full appearance-none cursor-pointer hover:bg-gray-300 transition-all duration-200"
                                style={{ accentColor: '#7BBF5E' }} 
                            />
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300">
                    <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={toggleNotificationsSection}
                    >
                        <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
                        <svg 
                            className={`w-6 h-6 text-gray-600 hover:text-gray-800 transition-transform duration-200 ${isNotificationsOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden ${isNotificationsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="mt-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox text-[#7BBF5E] h-5 w-5" />
                                <span className="ml-2 text-sm font-medium text-gray-700">Enable Push Notifications</span>
                            </label>
                        </div>
                        <div className="mt-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox text-[#7BBF5E] h-5 w-5" />
                                <span className="ml-2 text-sm font-medium text-gray-700">Receive Email Notifications</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300">
                    <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={toggleLanguageSection}
                    >
                        <h2 className="text-lg font-semibold text-gray-800">Language Selection</h2>
                        <svg 
                            className={`w-6 h-6 text-gray-600 hover:text-gray-800 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className={`mt-4 transition-all duration-300 ease-in-out ${isLanguageOpen ? 'max-h-60 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                        <h3 className="text-sm font-medium text-gray-700 mt-4">Select Language</h3>
                        <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
                            <button className="w-full text-left p-3 bg-[#F1FAF6] rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                Tiếng Việt
                            </button>
                            <button className="w-full text-left p-3 bg-[#F1FAF6] rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                English
                            </button>
                            <button className="w-full text-left p-3 bg-[#F1FAF6] rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                Indo
                            </button>
                            <button className="w-full text-left p-3 bg-[#F1FAF6] rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                Myanmar
                            </button>
                            <button className="w-full text-left p-3 bg-[#F1FAF6] rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                                Thailand
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white py-3 fixed bottom-0 w-full flex justify-around border-t shadow-inner">
                <div className="flex flex-col items-center">
                    <img src={iconHome} alt="Home Icon" className="w-7 h-7 mb-1 hover:scale-110 transition-transform duration-200" />
                    <p className="text-xs text-gray-600">Home</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={iconEvent} alt="Event Icon" className="w-7 h-7 mb-1 hover:scale-110 transition-transform duration-200" />
                    <p className="text-xs text-gray-600">Event</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={iconMode} alt="Mode Icon" className="w-7 h-7 mb-1 hover:scale-110 transition-transform duration-200" />
                    <p className="text-xs text-gray-600">Mode</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={iconSetting} alt="Setting Icon" className="w-7 h-7 mb-1 hover:scale-110 transition-transform duration-200" />
                    <p className="text-xs text-gray-600">Setting</p>
                </div>
            </footer>
        </div>
    );
};

export default SettingsNatural;
