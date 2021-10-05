import logo from './base_textlogo_transparent_background.png';
import AdnFuncy from './components/AdnFuncy';
import BigCard from './components/BigCard';
import FunctionalBigCard from './components/FunctionalBigCard';
import HeroFancy from './components/HeroFancy';
import HeroFunctional from './components/HeroFunctional';
import MinimalistCard from './components/MinimalistCard';
import ProductCard from './components/ProductCard';
import ProductCardFancy from './components/ProductCardFancy';
import ProductCardMinimalist from './components/ProductCardMinimalist';
import SliderDiv from './components/SliderDiv';
import TestimonialsFancy from './components/TestimonialsFancy';
import AdnMinimal from './components/AdnMinimal'
import Articles from './pages/Articles'
import ServicesHero from './components/ServicesHero';



function App() {
  return (
    <div className="App">
     <FunctionalBigCard/>
     <MinimalistCard/>
     <BigCard/>
     <ProductCard/>
     <ProductCardMinimalist/>
     <ProductCardFancy/>
     <HeroFancy/>
     <HeroFunctional/>
     <SliderDiv />
     <TestimonialsFancy/>
     <AdnFuncy/>
     <AdnMinimal/>
     <Articles/>
     <ServicesHero/>
    </div>
  );
}

export default App;
