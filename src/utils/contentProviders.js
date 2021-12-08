// @flow

export function getAppName(): string {
  return 'merarozgaar';
}

type InputType =
  | 'email'
  | 'phoneNumber'
  | 'otp'
  | 'date'
  | 'password'
  | 'confirmPassword';

export function getErrorMessage(
  type: ?string = 'required',
  inputName: ?InputType,
): string {
  const genericMessage = 'This input is invalid.';

  switch (type) {
    case 'required':
      return 'This input is required.';

    case 'error': {
      const messages = {
        email: 'This is an invalid email.',
        phoneNumber: 'This is an invalid mobile number.',
        otp: 'This is an invalid OTP.',
        date: 'This is an invalid date.',
        password: 'Password must contain 8 characters.',
        // password:
        // 'Password must contain 8 characters including at least 1 uppercase, 1 lowercase, 1 digit and 1 special character.',
        confirmPassword: 'Password and Confirm Password must match.',
      };

      return inputName ? messages[inputName] : genericMessage;
    }

    default:
      return genericMessage;
  }
}

export function getAppRoutes(): {
  home: string,
  jobDetails: string,
  apply: string,
  applications: string,
  interviews: string,
  auth: string,
  signIn: string,
  signUp: string,
  onboarding: string,
  search: string,
} {
  return {
    home: '/',
    jobDetails: '/jobs/:id',
    apply: '/jobs/:id/apply',
    applications: '/applications',
    interviews: '/interviews',
    auth: '/auth',
    signIn: '/auth/login',
    signUp: '/auth/register',
    onboarding: '/auth/onboarding',
    search: '/search/:professionID',
    candidateDetails: '/candidates/:id',
  };
}

export function getCollections(): {
  users: string,
  donors: string,
  patients: string,
  vaccinationCenters: string,
  vaccinationInterested: string,
  vaccinationConsents: string,
  vaccinationUsers: string,
  vaccinationFeedback: string,
  driverRegistration: string,
  mediaRegistration: string,
  lgtbiq: string,
  // eslint-disable-next-line indent
} {
  return {
    users: 'users-v2',
    donors: 'donors-v2',
    patients: 'patients-v2',
    vaccinationCenters: 'vaccinationCenters-v2',
    vaccinationInterested: 'vaccinationInterested-v2',
    vaccinationConsents: 'vaccinationConsents-v9',
    vaccinationUsers: 'vaccinationUsers-v2',
    vaccinationFeedback: 'vaccinationFeedback',
    driverRegistration: 'driverRegistration',
    mediaRegistration: 'mediaRegistration',
    lgtbiq: 'lgtbiq',
  };
}

export const months: Array<string> = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dropdownOptionsMapper =
  (uppercase = true) =>
  (c: string): { value: string, label: string } => ({
    value: uppercase ? c.toUpperCase() : c,
    label: c,
  });

export const genders: Array<{ value: string, label: string }> = [
  'Male',
  'Female',
  'Transgender',
].map(dropdownOptionsMapper(true));

export const maritalStatus: Array<{ value: string, label: string }> = [
  'Single',
  'Married',
  'Widowed',
  'Separated',
  'Divorced',
]
  .sort()
  .map(dropdownOptionsMapper(true));

export const bloodGroups: Array<{ value: string, label: string }> = [
  'A',
  'B',
  'O',
  'AB',
]
  .map((c) => [`${c}+`, `${c}-`])
  .reduce((a, c) => [...a, ...c], [])
  .map(dropdownOptionsMapper(false));

export const states: Array<{ value: string, label: string }> = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttarakhand',
  'Uttar Pradesh',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Lakshadweep',
  'Puducherry',
]
  .sort()
  .map(dropdownOptionsMapper(false));

export const idProofOptions: Array<{ value: string, label: string }> = [
  'Aadhaar Card',
  'Driving License',
  'PAN Card',
  'Passport',
  'Pension Passbook',
].map(dropdownOptionsMapper(true));

export const highestRadius: string = '5000';

declare var process: Object;

export const getStorageUrl = (imageSrc: string): string => {
  return `https://firebasestorage.googleapis.com/v0/b/${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}/o/${imageSrc}?alt=media`;
};

export const geolocationRadii: Array<{ value: string, label: string }> = [
  {
    label: '<50 Kms',
    value: '50',
  },
  {
    label: '<100 Kms',
    value: '100',
  },
  {
    label: '<250 Kms',
    value: '200',
  },
  {
    label: 'More than 250 Kms',
    value: highestRadius,
  },
];

export const vaccinationCenterID: string = 'sVlB9FJgZWT7cJVezE9D';
