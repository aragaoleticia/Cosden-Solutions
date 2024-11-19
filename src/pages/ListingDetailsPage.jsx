import { useEffect, useRef, useState } from "react";
import { useParams} from 'react-router-dom';

import api from '@/api';
import ListingDetailsCard from '@/components/ListingDetailsCard.jsx';
import { Spinner} from '@/components/ui/index.js';
import axios from 'axios';

function ListingDetailsPage() {
  const { listingId } = useParams();

  const [listing, setListing] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortController = useRef(null);

  useEffect(() => {
    const fetchListing = async () => {
      setError(null);
      setLoading(true);

      abortController.current = new AbortController();

      try {
        const response = await api.get(`/api/listings/${listingId}`, {
          signal: abortController.current?.signal,
        })
        setListing(response.data);
      } catch (error) {
        if(axios.isCancel(error)) {
          return;
        }
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchListing();
    return () => {
      abortController.current?.abort();
    }

  }, [listingId])

  const renderListing = () => {
    if(loading) {
      return (
        <div className='flex justify-center'>
          <Spinner size='sm' />
        </div>
      )
    }
    if (error) {
      return <div className='text-center'>{error}</div>
    }

    return <ListingDetailsCard listing={listing} />;
  }

  return (
    <div className='container py-4'>
      {renderListing()}
    </div>
  )
}

export default ListingDetailsPage;