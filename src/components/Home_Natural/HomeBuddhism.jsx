import icon_1 from '../../assets/icon/icon_Event.svg';
import icon_2 from '../../assets/icon/icon_home.svg';
import icon_3 from '../../assets/icon/icon_Model.svg';
import icon_4 from '../../assets/icon/icon_Setting.svg';
import bgTree from '../../assets/bg_Home/bg_Buddhism.png';
import Subtract from '../../assets/icon/Subtract.png';
import account from '../../assets/icon/account.svg';
import Frame from '../../assets/icon/Frame.svg';

const BuddhismPage = () => {
    return (
        <div className="flex flex-col h-screen bg-[#171717] sm:max-w-sm sm:mx-auto relative overflow-hidden">
            {/* Top icons */}
            <div className="flex justify-between p-4 absolute top-0 left-0 right-0 z-10">
                <img src={account} alt="Account Icon" className="w-8 h-8 hover:scale-110 transform transition duration-200" />
                <img src={Frame} alt="Frame Icon" className="w-8 h-8 hover:scale-110 transform transition duration-200" />
            </div>

            {/* Background and center icon */}
            <div className="relative flex-1 overflow-hidden">
                <img src={bgTree} alt="Tree Background" className="w-full h-full object-cover" />

                {/* Centered icon over background */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ top: 'calc(50% + 50px)' }}>
                    <div className="w-32 h-32 bg-opacity-70 flex items-center justify-center">
                        <img src={Subtract} alt="Hand Icon" className="w-20 h-20" />
                    </div>
                </div>
            </div>

            {/* Bottom navigation */}
            <div className="flex justify-around bg-white py-2 fixed bottom-0 left-0 right-0 z-10">
                <div className="flex flex-col items-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#48E78A] to-[#4A8A75]">
                    <img src={icon_2} alt="Home Icon" className="w-6 h-6 mb-1 hover:scale-110 transform transition duration-200" />
                    <p className="text-xs text-gray-600">Home</p>
                </div>
                <div className="flex flex-col items-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#48E78A] to-[#4A8A75]">
                    <img src={icon_1} alt="Event Icon" className="w-6 h-6 mb-1 hover:scale-110 transform transition duration-200" />
                    <p className="text-xs text-gray-600">Event</p>
                </div>
                <div className="flex flex-col items-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#48E78A] to-[#4A8A75]">
                    <img src={icon_3} alt="Mode Icon" className="w-6 h-6 mb-1 hover:scale-110 transform transition duration-200" />
                    <p className="text-xs text-gray-600">Mode</p>
                </div>
                <div className="flex flex-col items-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#48E78A] to-[#4A8A75]">
                    <img src={icon_4} alt="Setting Icon" className="w-6 h-6 mb-1 hover:scale-110 transform transition duration-200" />
                    <p className="text-xs text-gray-600">Setting</p>
                </div>
            </div>
        </div>
    );
};

export default BuddhismPage;
