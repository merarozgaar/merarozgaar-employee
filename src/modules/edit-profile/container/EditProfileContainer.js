// @flow
import React, { useEffect, useState } from 'react';
import allSettled from 'promise.allsettled';
import EditProfile from '../components/EditProfile';
import type { FormConfig } from '../../../hooks/useForm';
import useForm from '../../../hooks/useForm';
import apiClient from '../../../utils/apiClient';

const EditProfileContainer = (): React$Node => {
  const [companySizes, setCompanySizes] = useState([]);

  const [genders, setGenders] = useState([]);

  const [industries, setIndustries] = useState([]);

  const [professions, setProfessions] = useState([]);

  const [qualifications, setQualifications] = useState([]);

  const [skills, setSkills] = useState([]);

  const selected = localStorage.getItem('i18nextLng') || 'en';

  const isHindi = selected === 'hi';

  const formConfig: FormConfig = {
    initialValues: {
      preferences: [
        {
          profession_id: '',
          industry_id: '',
        },
      ],
      skills: [
        {
          skill_id: '',
        },
      ],
    },
    validations: {},
    onSubmit: () => {},
  };

  const formProps = useForm(formConfig);

  useEffect(() => {
    (async () => {
      try {
        const options = [
          {
            endpoint: '/options/genders',
            setter: setGenders,
          },
          {
            endpoint: '/options/industries',
            setter: setIndustries,
          },
          {
            endpoint: '/options/professions',
            setter: setProfessions,
          },
          {
            endpoint: '/options/qualifications',
            setter: setQualifications,
          },
          {
            endpoint: '/options/skills',
            setter: setSkills,
          },
        ];

        const promises = options.map(
          ({ endpoint, setter }) =>
            new Promise((resolve, reject) => {
              (async () => {
                try {
                  const { data } = await apiClient.get(endpoint, {
                    params: {
                      lang: { en: 'ENGLISH', hi: 'HINDI' }[selected],
                    },
                  });

                  setter(data);

                  resolve();
                } catch (e) {
                  reject();
                }
              })();
            }),
        );

        await allSettled(promises);
      } catch (e) {}
    })();
  }, []);

  return (
    <EditProfile
      {...formProps}
      companySizes={companySizes}
      genders={genders}
      industries={industries}
      professions={professions}
      qualifications={qualifications}
      skills={skills}
    />
  );
};

export default EditProfileContainer;
