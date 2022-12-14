import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import ListingItem from '../components/ListingItem'

const Offers = () => {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)

  const params = useParams()

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // get Reference
        const listingsRef = collection(db, 'listings')

        // create a query
        const buildQuery = query(
          listingsRef,
          where('offer', '==', true),
          orderBy('timestamp', 'desc', limit(10))
        )
        // execute query

        const querySnap = await getDocs(buildQuery)

        const listingsTemp = []

        querySnap.forEach((doc) => {
          return listingsTemp.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setListings(listingsTemp)
        setLoading(false)
      } catch (error) {
        toast.error('Could not fetch listings')
      }
    }
    fetchListings()
  }, [])

  return (
    <div className='category'>
      <header>
        <p className='pageHeader'>
          Offers
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className='categoryListings'>
              {listings.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p> No listings on offer</p>
      )}
    </div>
  )
}

export default Offers
