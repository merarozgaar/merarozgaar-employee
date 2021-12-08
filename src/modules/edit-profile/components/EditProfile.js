// @flow
import React from 'react';
import Input from '../../../components/Input/Input';
import { useTranslation } from 'react-i18next';
import type { FormProps } from '../../../hooks/useForm';
import LocationInput from '../../../components/LocationInput';
import Dropdown from '../../../components/Dropdown';
import { Button, Col, Row } from 'react-bootstrap';

type Props = {
  ...FormProps,
  genders: Array<Object>,
  professions: Array<Object>,
  qualifications: Array<Object>,
  industries: Array<Object>,
  skills: Array<Object>,
};

const EditProfile = ({
  values: {
    name,
    address,
    date_of_birth,
    gender,
    education_id,
    preferences,
    skills,
    references,
  },
  onChange,
  getErrors,
  genders,
  professions,
  qualifications,
  industries,
  skills: skillsOptions,
}: Props): React$Node => {
  const { t } = useTranslation();

  return (
    <form>
      <Row>
        <Col md={{ span: 7 }}>
          <Input
            name="name"
            value={name}
            placeholder={t('name')}
            onChange={onChange}
            errors={getErrors('name')}
          />
        </Col>
        <Col md={{ span: 5 }}>
          <div className="form-group">
            <input
              className="form-control"
              type="date"
              name="date_of_birth"
              value={date_of_birth}
              placeholder={t('date_of_birth')}
              onChange={({ target: { value } }) =>
                onChange('date_of_birth', value)
              }
            />
          </div>
        </Col>
      </Row>
      <LocationInput
        name="address"
        placeholder={t('address')}
        value={address?.formatted_address}
        onChange={onChange}
      />
      <Dropdown
        placeholder={t('gender')}
        name="gender"
        value={gender}
        options={genders}
        onChange={onChange}
        errors={getErrors('gender')}
      />
      {preferences.map(({ profession_id, industry_id }, i) => (
        <Row>
          <Col>
            <Dropdown
              placeholder={t('profession')}
              name={`preferences[${i}].profession_id`}
              value={profession_id}
              options={professions}
              onChange={onChange}
              errors={getErrors('profession_id')}
            />
          </Col>
          <Col>
            <Dropdown
              placeholder={t('industry')}
              name={`preferences[${i}].industry_id`}
              value={industry_id}
              options={industries}
              onChange={onChange}
              errors={getErrors('education_id')}
            />
          </Col>
        </Row>
      ))}
      <Row>
        <Col>
          <Dropdown
            placeholder={t('education')}
            name={`education_id`}
            value={education_id}
            options={qualifications}
            onChange={onChange}
            errors={getErrors('education_id')}
          />
        </Col>
        <Col>
          <Input
            name="name"
            value={name}
            placeholder={t('languagesKnown')}
            onChange={onChange}
            errors={getErrors('name')}
          />
        </Col>
      </Row>
      {skills.map(({ skill_id }, i) => (
        <Dropdown
          placeholder={t('specialSkills')}
          name={`skills[${i}].skill_id`}
          value={skill_id}
          options={skillsOptions}
          onChange={onChange}
          errors={getErrors('skill_id')}
        />
      ))}
      <Input
        name="references"
        value={references}
        placeholder={t('references')}
        onChange={onChange}
        errors={getErrors('references')}
      />
      <div className="pt-3">
        <Button
          type="button"
          id="signin-button"
          className="px-5 font-weight-bold rounded-pill"
          // disabled={loading}
          // onClick={step === 1 ? requestOtp : verifyOtp}
        >
          {t('proceed')}
        </Button>
      </div>
    </form>
  );
};

export default EditProfile;
