import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import { useState } from 'react'
import Amenity from '../components/amenity'
import { toast } from 'react-toastify'
import { addProperty } from '../services/property'

function AddProperty() {
  const [title, setTitle] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [details, setDetails] = useState('')
  const [address, setAddress] = useState('')
  const [guests, setGuests] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [beds, setBeds] = useState('')

  const [isLakeView, setLakeView] = useState(false)
  const [isTV, setTV] = useState(false)
  const [isAC, setAC] = useState(false)
  const [isWiFi, setWifi] = useState(false)
  const [isMinibar, setMinibar] = useState(false)
  const [isBreakfast, setBreakfast] = useState(false)
  const [isParking, setParking] = useState(false)

  const [bathrooms, setBathrooms] = useState('')
  const [rent, setRent] = useState('')

  const [image, setImage] = useState(undefined)

  const navigate = useNavigate()

  const onSave = async () => {
    if (title.length == 0) {
      toast.warn('Please enter title')
    } else if (contactName.length == 0) {
      toast.warn('Please enter contact name')
    } else if (contactNumber.length == 0) {
      toast.warn('Please enter contact number')
    } else if (!image) {
      toast.warn('Please select a property photo')
    } else {
      const result = await addProperty(
        title,
        contactNumber,
        contactName,
        details,
        address,
        guests,
        bedrooms,
        bathrooms,
        beds,
        rent,
        isLakeView,
        isTV,
        isAC,
        isWiFi,
        isMinibar,
        isBreakfast,
        isParking,
        image
      )
      if (result['status'] == 'success') {
        toast.success('Successfully added a property')
        navigate('/properties')
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Add Property</h2>
      <div className='form'>
        <div className='row'>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>Title</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>Contact Name</label>
              <input
                onChange={(e) => setContactName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>Contact Number</label>
              <input
                onChange={(e) => setContactNumber(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col'>
            <label htmlFor=''># Guests</label>
            <input
              onChange={(e) => setGuests(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>
          <div className='col'>
            <label htmlFor=''># Bedrooms</label>
            <input
              onChange={(e) => setBedrooms(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>
          <div className='col'>
            <label htmlFor=''># Beds</label>
            <input
              onChange={(e) => setBeds(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col'>
            <label htmlFor=''>Address</label>
            <textarea
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className='form-control'
            ></textarea>
          </div>
          <div className='col'>
            <label htmlFor=''>Details</label>
            <textarea
              onChange={(e) => setDetails(e.target.value)}
              rows={3}
              className='form-control'
            ></textarea>
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col'>
            <label htmlFor=''># Bathrooms</label>
            <input
              onChange={(e) => setBathrooms(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>
          <div className='col'>
            <label htmlFor=''>Rent</label>
            <input
              onChange={(e) => setRent(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>
        </div>

        <h3>Amenities </h3>
        <div className='row mb-3'>
          <div className='row'>
            <div className='col'>
              <Amenity
                onChange={(status) => setLakeView(status)}
                title='Lake View'
                icon='bi-water'
              />
              <Amenity
                onChange={(status) => setTV(status)}
                title='TV'
                icon='bi-tv'
              />
              <Amenity
                onChange={(status) => setAC(status)}
                title='AC'
                icon='bi-activity'
              />
              <Amenity
                onChange={(status) => setWifi(status)}
                title='WiFi'
                icon='bi-wifi'
              />
              <Amenity
                onChange={(status) => setMinibar(status)}
                title='Minibar'
                icon='bi-droplet-half'
              />
              <Amenity
                onChange={(status) => setBreakfast(status)}
                title='Breakfast'
                icon='bi-egg-fried'
              />
              <Amenity
                onChange={(status) => setParking(status)}
                title='Parking'
                icon='bi-p-circle'
              />
            </div>
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Image</label>
          <input
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <button onClick={onSave} className='btn btn-success me-2'>
            Save
          </button>
          <Link to='/properties' className='btn btn-danger'>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddProperty
