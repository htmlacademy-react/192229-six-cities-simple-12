import MainPage from '../../pages/main-page/main-page';

type AppOfferProps = {
  placesCount: number;
};

function App({placesCount} : AppOfferProps): JSX.Element {
  return (
    <MainPage placesCount ={placesCount}/>
  );
}

export default App;
