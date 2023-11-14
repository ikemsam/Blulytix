import { InlineWidget } from 'react-calendly';

const Calender = () => {
  const utm = {
    utmCampaign: 'Spring Sale 2019',
    utmContent: 'Shoe and Shirts',
    utmMedium: 'Ad',
    utmSource: 'Facebook',
    utmTerm: 'Spring',
  };
  const prefill = {
    email: 'test@test.com',
    firstName: 'Jon',
    lastName: 'Snow',
    name: 'Jon Snow',
    customAnswers: {
      a1: 'a1',
      a2: 'a2',
      a3: 'a3',
      a4: 'a4',
      a5: 'a5',
      a6: 'a6',
      a7: 'a7',
      a8: 'a8',
      a9: 'a9',
      a10: 'a10',
    },
  };
  const pageSettings = {
    backgroundColor: 'D6E9FF',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '2A8CFC',
    textColor: '0f0f0f',
  };
  const styles = {
    height: '800px',
    width: '100%',
  };
  return (
    <div>
      <InlineWidget
        url="https://calendly.com/ikem-emmanuel/15min"
        styles={styles}
        pageSettings={pageSettings}
        prefill={prefill}
        utm={utm}
      />
    </div>
  );
};

export default Calender;
