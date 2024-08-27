import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import purpose_1 from '../../assets/img_purpose/purpose_1.png';
import purpose_2 from '../../assets/img_purpose/purpose_2.png';
import purpose_3 from '../../assets/img_purpose/purpose_3.png';
import purpose_4 from '../../assets/img_purpose/purpose_4.png';
import purpose_5 from '../../assets/img_purpose/purpose_5.png';
import purpose_6 from '../../assets/img_purpose/purpose_6.png';

import WebApp from '@twa-dev/sdk';

function Purpose() {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const navigate = useNavigate();

  const handleSelectGoal = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else if (selectedGoals.length < 2) {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const isSelected = (goal) => selectedGoals.includes(goal);

  const handleSubmit = () => {
    if (selectedGoals.length >= 2) {
      const id = selectedGoals.join('-'); // Kết hợp các mục tiêu thành một id
      navigate(`/Targar/${id}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#171717] text-white p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold mb-2">{ WebApp.initData }</h1>
        <h1 className="text-4xl font-semibold mb-2">What are your goals?</h1>
        <p className="text-lg text-gray-400">Choose 2 or more goals</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleSelectGoal('goal1')}>
          <img
            src={purpose_1}
            alt="Goal 1"
            className={`w-40 h-40 rounded-lg transition-transform duration-300 ${
              isSelected('goal1') ? 'border-2 hover:bg-white transform scale-105' : ''
            }`}
          />
          <p className="mt-4 text-center text-sm">Health for all</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleSelectGoal('goal2')}>
          <img
            src={purpose_2}
            alt="Goal 2"
            className={`w-40 h-40 rounded-lg transition-transform duration-300 ${
              isSelected('goal2') ? 'border-2 hover:bg-white transform scale-105' : ''
            }`}
          />
          <p className="mt-4 text-center text-sm">Education for all</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleSelectGoal('goal3')}>
          <img
            src={purpose_3}
            alt="Goal 3"
            className={`w-40 h-40 rounded-lg transition-transform duration-300 ${
              isSelected('goal3') ? 'border-2 hover:bg-white transform scale-105' : ''
            }`}
          />
          <p className="mt-4 text-center text-sm">Freedom from sin for all</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleSelectGoal('goal4')}>
          <img
            src={purpose_4}
            alt="Goal 4"
            className={`w-40 h-40 rounded-lg transition-transform duration-300 ${
              isSelected('goal4') ? 'border-2 hover:bg-white transform scale-105' : ''
            }`}
          />
          <p className="mt-4 text-center text-sm">Prosperity for all</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleSelectGoal('goal5')}>
          <img
            src={purpose_5}
            alt="Goal 5"
            className={`w-40 h-40 rounded-lg transition-transform duration-300 ${
              isSelected('goal5') ? 'border-2 hover:bg-white transform scale-105' : ''
            }`}
          />
          <p className="mt-4 text-center text-sm">No more natural disasters</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleSelectGoal('goal6')}>
          <img
            src={purpose_6}
            alt="Goal 6"
            className={`w-40 h-40 rounded-lg transition-transform duration-300 ${
              isSelected('goal6') ? 'border-2 hover:bg-white transform scale-105' : ''
            }`}
          />
          <p className="mt-4 text-center text-sm">Peace for all</p>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className={`bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-24 py-2 rounded-full text-lg font-semibold shadow-lg transition-transform duration-300 ${
          selectedGoals.length < 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105'
        }`}
        disabled={selectedGoals.length < 2}
      >
        Continue
      </button>
    </div>
  );
}

export default Purpose;
