import './Home.css'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import WidgetSm from '../../WidgetSm/WidgetSm'
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart />
      <div className="homeWidgets">
        <WidgetSm />
      </div>
    </div>
  )
}

export default Home
