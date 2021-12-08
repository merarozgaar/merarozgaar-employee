// @flow
import React, { useCallback, useEffect, useState } from 'react';
import apiClient from '../../../utils/apiClient';
import Jobs from '../components/Jobs';
import { useParams } from 'react-router-dom';

const JobsContainer = () => {
  const { id } = useParams();

  const [jobs, setJobs] = useState([]);

  const fetch = useCallback(() => {
    (async () => {
      try {
        const { data } = await apiClient.get(`/employee/applications`);

        setJobs(data);
      } catch (e) {}
    })();
  }, []);

  const updateStatus = useCallback(
    ({ status, id }) =>
      () => {
        (async () => {
          try {
            await apiClient.put(`/applications/${id}`, {
              status,
            });

            fetch();
          } catch (e) {}
        })();
      },
    [],
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  return <Jobs jobs={jobs} updateStatus={updateStatus} />;
};

export default JobsContainer;
