import Slider from "./Slider";
import './App.css';

function App() {
  let sliderData = [];
  sliderData.push(<img src="https://source.unsplash.com/300x300/?perth,australia" class="img-responsive" alt="img"/>);
  sliderData.push(
  <div className="stylingSlide">

  </div>
  );
  sliderData.push(<img src="https://source.unsplash.com/300x300/?fremantle,australia" class="img-responsive" alt="img"/>);
  sliderData.push(<img src="https://source.unsplash.com/300x300/?west-australia" class="img-responsive" alt="img"/>);
  sliderData.push(<img src="https://source.unsplash.com/300x300/?perth" class="img-responsive" alt="img"/>);
  sliderData.push(<img src="https://source.unsplash.com/300x300/?quokka,perth" class="img-responsive" alt="img"/>);
  sliderData.push(<img src="https://source.unsplash.com/300x300/?margaretriver,australia" class="img-responsive" alt="img"/>);
  sliderData.push(<img src="https://source.unsplash.com/300x300/?perth,australia&r=7" class="img-responsive" alt="img"></img>);
  
  return (
      <Slider slides={sliderData}/>
  );
}

export default App;
