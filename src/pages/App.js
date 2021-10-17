// import './App.css';
import { Web3ReactProvider } from '@web3-react/core'
import NavigationBar from '../components/NavigationBar'
import CharacterMint from '../pages/CharacterMint'
import PotionMint from '../pages/PotionMint'
import { useState } from 'react'
import { providers } from 'ethers'

function routes(page) {
  switch (page) {
    case 'CharacterMint':
      return <CharacterMint />
      case 'PotionMint':
        return <PotionMint />
    default:
      return null
  }
}

function getLibrary(provider) {
  return new providers.Web3Provider(provider)
}

function App() {
  const [page, setPage] = useState('CharacterMint')
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <NavigationBar goToPage={setPage} />
      <div className="bodyApp" >
        {routes(page)}
      </div>
    </Web3ReactProvider>
  );
}

export default App;
