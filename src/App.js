import Image from 'react-native-remote-svg';

function App() {
  return (
    <div className='App'>
      <Image
        source={{ uri: 'https://example.com/my-pic.svg' }}
        style={{ width: 200, height: 532 }}
      />;

      <Image src='http://www.atlanticopeixaria.vps-kinghost.net:3332/uploads/categorias/00000000-0000-0000-0000-000000000002.svg' alt='teste' />
      <Image src='https://www.atlanticopeixaria.vps-kinghost.net:3333/uploads/categorias/00000000-0000-0000-0000-000000000002.svg' alt='teste' />
      <Image src='logo192.png' alt='teste' />
      <Image src='00000000-0000-0000-0000-000000000002.svg' alt='teste' />
    </div>
  );
}

export default App;
