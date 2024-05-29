import DashboardItem from '../components/dashboardItem'
import Navbar from '../components/navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Home</h2>
      <div className='row mt-5'>
        <div className='col'>
          <DashboardItem title='Users' value='100K' />
        </div>
        <div className='col'>
          <DashboardItem title='Properties' value='100K' />
        </div>
        <div className='col'>
          <DashboardItem title='Bookings' value='10K' />
        </div>
        <div className='col'>
          <DashboardItem title='Revenue' value='$100b' />
        </div>
      </div>
    </div>
  )
}

export default Home
