// @flow
import React, { useCallback, useEffect, useState } from 'react';
import useGoogleMaps from '../../../hooks/useGoogleMaps';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  isSetLocationStateSelector,
  locationStateSelector,
} from '../../../redux/selectors/location';
import apiClient from '../../../utils/apiClient';
import Jobs from '../components/Jobs';

type JobsContainerType = () => React$Node;

const JobsContainer: JobsContainerType = () => {
  const location = useSelector(locationStateSelector);

  const isSetLocation = useSelector(isSetLocationStateSelector);

  const [loading, setLoading] = useState(false);

  const [jobs, setJobs] = useState([]);

  const fetch = useCallback(() => {
    (async () => {
      setLoading(true);

      try {
        if (isSetLocation) {
          const { latitude, longitude } = location;

          const { data } = await apiClient.get('/jobs', {
            params: {
              latitude,
              longitude,
            },
          });

          setJobs(data);
        } else {
          toast('Please enable location permission to find matching jobs.');
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, [isSetLocation, location]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return <Jobs jobs={jobs} />;
};

export default JobsContainer;
