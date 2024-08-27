import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg_1 from '../../assets/img_target/christianity.png';
import bg_2 from '../../assets/img_target/hindu.png';
import bg_3 from '../../assets/img_target/Buddhism.png';
import bg_4 from '../../assets/img_target/mother_nature.png';

const Target = () => {
    const [selectedReligion, setSelectedReligion] = useState('');
    const navigate = useNavigate();

    const handleSelectReligion = (religion) => {
        setSelectedReligion((prevReligion) => (prevReligion === religion ? '' : religion)); 
    };
    const handleSubmit = () => {
        if (selectedReligion) {
            switch (selectedReligion) {
                case 'MotherNature':
                    navigate(`/HomeNatural/${selectedReligion}`);
                    break;
                case 'Buddhism':
                    navigate(`/BuddhismPage/${selectedReligion}`);
                    break;
                case 'Christianity':
                    navigate(`/HomeChristianity/${selectedReligion}`);
                    break;
                case 'Hinduism':
                    navigate(`/HomeHinduism/${selectedReligion}`);
                    break;
                default:
                    navigate(`/nextPage/${selectedReligion}`);
                    break;
            }
        }
    };
    
    

    const handleBack = () => {
        navigate(-1);
    };

    const isSelected = (religion) => selectedReligion === religion;

    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-[#171717] text-white p-4">
            {/* Back Button */}
            <div className="w-full flex justify-start mb-4">
                <button onClick={handleBack} className="text-white text-lg">
                    ← Back
                </button>
            </div>

            {/* Title and Instruction */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-semibold mb-2">How do you want to pray?</h1>
                <p className="text-lg text-gray-400">Choose your religion</p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                    { img: bg_1, label: 'Christianity' },
                    { img: bg_2, label: 'Hinduism' },
                    { img: bg_3, label: 'Buddhism' },
                    { img: bg_4, label: 'MotherNature' },
                ].map(({ img, label }) => (
                    <div
                        key={label}
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => handleSelectReligion(label)}
                    >
                        <img
                            src={img}
                            alt={label}
                            className={`w-40 h-40 rounded-lg transition-transform duration-300 ${
                                isSelected(label) ? 'border-2 border-yellow-500 transform scale-105' : ''
                            }`}
                        />
                        <p className="mt-4 text-center text-sm">{label}</p>
                    </div>
                ))}
            </div>

            {/* Continue Button */}
            <div className="w-full flex justify-center">
                <button
                    onClick={handleSubmit}
                    className={`bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-24 py-2 rounded-full text-lg font-semibold shadow-lg transition-transform duration-300 ${
                        !selectedReligion ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105'
                    }`}
                    disabled={!selectedReligion}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Target;
