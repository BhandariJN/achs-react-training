import './App.css'
import BannerArea from './components/BannerArea'
import BrandArea from './components/BrandArea'
import CategoryArea from './components/CategoryArea'
import ExclusiveDealArea from './components/ExclusiveDealArea'
import FeatureArea from './components/FeatureArea'
import Navbar from './components/Navbar'
import ProductArea from './components/ProductArea'
import RelatedProductArea from './components/RelatedProductArea'

function App() {

  return (
    <>
        <Navbar />    
        <BannerArea />
        <FeatureArea/>
        <CategoryArea/>
        <ProductArea/>
        <ExclusiveDealArea/>
        <BrandArea/>
        <RelatedProductArea/>
        {/* <Footer/> */}


    </>
  )
}

export default App
