const { useState } = React;

const CryptoETFConverter = () => {
  const [btcValue, setBtcValue] = useState('');
  const [gbtcValue, setGbtcValue] = useState('');
  const [ethValue, setEthValue] = useState('');
  const [etheValue, setEtheValue] = useState('');
  const [darkMode, setDarkMode] = useState(true);

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
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b ${darkMode ? 'from-gray-900 to-gray-800' : 'from-white to-gray-100'}`}>
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-sm ${darkMode ? 'bg-gray-800/90 border border-gray-700' : 'bg-white/90 border border-gray-200'}`}>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Crypto ETF Converter</h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Real-time conversion calculator</p>
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <div className="space-y-6">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>ETH</div>
              <div className={`font-bold text-xl ${darkMode ? 'text-blue-500' : 'text-blue-500'}`}>↔</div>
              <div className={`text-lg font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>ETHE</div>
            </div>
            <div className="flex space-x-4">
              <input 
                type="number" 
                value={ethValue} 
                onChange={(e) => handleETHChange(e.target.value)}
                className={`w-1/2 p-3 rounded-lg text-center transition-all duration-300 focus:ring-2 ${
                  darkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500' 
                    : 'bg-white text-black border-gray-200 focus:ring-blue-400'
                }`}
                placeholder="ETH"
              />
              <input 
                type="number" 
                value={etheValue} 
                onChange={(e) => handleETHEChange(e.target.value)}
                className={`w-1/2 p-3 rounded-lg text-center transition-all duration-300 focus:ring-2 ${
                  darkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:ring-orange-500' 
                    : 'bg-white text-black border-gray-200 focus:ring-orange-400'
                }`}
                placeholder="ETHE"
              />
            </div>
          </div>

          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>BTC</div>
              <div className={`font-bold text-xl ${darkMode ? 'text-blue-500' : 'text-blue-500'}`}>↔</div>
              <div className={`text-lg font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>GBTC</div>
            </div>
            <div className="flex space-x-4">
              <input 
                type="number" 
                value={btcValue} 
                onChange={(e) => handleBTCChange(e.target.value)}
                className={`w-1/2 p-3 rounded-lg text-center transition-all duration-300 focus:ring-2 ${
                  darkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500' 
                    : 'bg-white text-black border-gray-200 focus:ring-blue-400'
                }`}
                placeholder="BTC"
              />
              <input 
                type="number" 
                value={gbtcValue} 
                onChange={(e) => handleGBTCChange(e.target.value)}
                className={`w-1/2 p-3 rounded-lg text-center transition-all duration-300 focus:ring-2 ${
                  darkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:ring-orange-500' 
                    : 'bg-white text-black border-gray-200 focus:ring-orange-400'
                }`}
                placeholder="GBTC"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CryptoETFConverter />);
