const { useState } = React;

const CryptoETFConverter = () => {
  const [btcValue, setBtcValue] = useState('');
  const [gbtcValue, setGbtcValue] = useState('');
  const [ethValue, setEthValue] = useState('');
  const [etheValue, setEtheValue] = useState('');
  const [darkMode, setDarkMode] = useState(true);  // Changed to true for default dark mode

  const ETH_RATIO = 0.008435;
  const BTC_RATIO = 0.0007968;

  const handleETHChange = (value) => {
    setEthValue(value);
    setEtheValue(value ? (value * ETH_RATIO).toFixed(6) : '');
  };

  const handleETHEChange = (value) => {
    setEtheValue(value);
    setEthValue(value ? (value / ETH_RATIO).toFixed(6) : '');
  };

  const handleBTCChange = (value) => {
    setBtcValue(value);
    setGbtcValue(value ? (value * BTC_RATIO).toFixed(6) : '');
  };

  const handleGBTCChange = (value) => {
    setGbtcValue(value);
    setBtcValue(value ? (value / BTC_RATIO).toFixed(6) : '');
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <div className={`w-full max-w-md p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Crypto ETF Converter</h2>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className={`text-sm font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>ETH</div>
            <div className={`font-bold ${darkMode ? 'text-blue-500' : 'text-blue-500'}`}>↔</div>
            <div className={`text-sm font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>ETHE</div>
          </div>
          <div className="flex space-x-2">
            <input 
              type="number" 
              value={ethValue} 
              onChange={(e) => handleETHChange(e.target.value)}
              className={`w-1/2 p-2 rounded-lg text-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
              placeholder="ETH"
            />
            <input 
              type="number" 
              value={etheValue} 
              onChange={(e) => handleETHEChange(e.target.value)}
              className={`w-1/2 p-2 rounded-lg text-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
              placeholder="ETHE"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className={`text-sm font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>BTC</div>
            <div className={`font-bold ${darkMode ? 'text-blue-500' : 'text-blue-500'}`}>↔</div>
            <div className={`text-sm font-semibold ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>GBTC</div>
          </div>
          <div className="flex space-x-2">
            <input 
              type="number" 
              value={btcValue} 
              onChange={(e) => handleBTCChange(e.target.value)}
              className={`w-1/2 p-2 rounded-lg text-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
              placeholder="BTC"
            />
            <input 
              type="number" 
              value={gbtcValue} 
              onChange={(e) => handleGBTCChange(e.target.value)}
              className={`w-1/2 p-2 rounded-lg text-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
              placeholder="GBTC"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CryptoETFConverter />);
