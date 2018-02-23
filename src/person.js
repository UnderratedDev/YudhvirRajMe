import PropTypes from 'prop-types';

export const person = {
  basics: {
    name: 'Yudhvir Raj',
    label: 'Recent BCIT graduate (Software Developer)',
    picture: './yudhvirraj.jpg',
    email: 'rajyudhvir29@gmailcom',
    phone: '1 (306)-203-1440',
    website: 'http://yudhvirraj.me',
    summary: '"Our whole corporate culture is that we don\'t have a corporate culture."',
    location: {
      address: '8270 14th Avenue',
      postalCode: 'V3N 2B9',
      city: 'Burnaby',
      countryCode: 'CAN',
      region: 'Lower Mainland',
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'underrateddev',
        url: 'https://www.github.com.com/underrateddev',
      },
      {
        network: 'LinkedIn',
        username: 'yudhvir raj',
        url: 'https://www.linkedin.com/in/yudhvir-raj-14a819106/',
      },
    ],
  },
  work: [
    {
      company: 'Clevest',
      position: 'QA Analyst',
      website: 'http://clevest.com',
      startDate: '2016-04',
      endDate: '2016-12',
      summary: 'Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.',
      highlights: ['Started the company', 'killed it'],
    },
  ],
  volunteer: [],
  education: [
    {
      institution: 'British Columbia Institute of Technology',
      area: 'Software Development',
      studyType: 'Computer Systems Technology',
      startDate: '2015-09',
      endDate: '2017-12',
      gpa: '81%',
      courses: [
        'COMP 1510 - Intro to software web development',
        'JS 087 - Javascript Fundamentals',
        'CS 095 - Advanced HTML',
      ],
    },
  ],
  awards: [
    {
        title: 'Graduation with Distinction',
        date: '2018-02-20',
        awarder: 'BCIT',
        summary: 'Achieved a high gpa in Computer Systems Technology Diploma"',
    },
    {
        title: 'Work Ethic',
        date: '2017-06',
        awarder: 'Cariboo Hill Secondary School',
        summary: 'Awarded to students to have good work ethic',
    },
    {
        title: 'Honour Roll',
        date: '2017-06',
        awarder: 'Cariboo Hill Secondary School',
        summary: 'Awarded to students to have a high gpa',
      },
  ],
  publications: [
    {
      name: 'Is Erlich Bachman the Dumbest Man in Tech',
      publisher: 'Coderag',
      releaseDate: '2016-06-22',
      website: 'http://www.coderag.com/is-erlich-bachman-the-dumbest-man-in-tech/',
      summary: 'CJ Cantwells feature of Erlich Bachman',
    },
    {
      name: 'How Will Silicon Valley Kill Off Erlich Bachman',
      publisher: 'Vulture',
      releaseDate: '2017-05-31',
      website: 'http://www.vulture.com/2017/05/silicon-valley-erlich-bachman-tj-miller.html',
      summary: '',
    },
  ],
  skills: [
    {
        name: 'Incubating',
        level: '95',
        keywords: [
            'Managing Subordinates: At [pied](./) piper we strived to meet all of our incubator needs',
            'Evicting Jian Yang',
      ],
    },
    {
      name: 'Hex Arithmetic',
      level: '90',
      keywords: ['9 * F = fleventy-five'],
    },
    {
      name: 'Web Development',
      level: '37',
      keywords: ['HTML', 'CSS', 'Javascript'],
    },
    {
      name: 'Hydroponic Horticulture',
      level: '75',
      keywords: [
        "Garage Gardening: experienced at producing top quality 'produce'",
      ],
    },
    {
      name: 'Style',
      level: '60',
      keywords: [
        "Clothes: black turtlenecks to maximize 'jobbiness'",
        'Kimonos: To assert power and relay awesomeness',
      ],
    },
    {
      name: 'Negotiation',
      level: '45',
      keywords: [
        'Aggressive: Aggressive negotiation is they key to getting what you want',
      ],
    },
    {
      name: 'Making Mistakes',
      level: '30',
      keywords: ['1993: I made a mistake by thinking that I made a mistake'],
    },
    {
      name: 'Being Lame',
      level: '15',
      keywords: [
        'Jian Yang: This only happens when listening to his recipe for octupu',
      ],
    },
    {
      name: 'Losing',
      level: '5',
      keywords: ['Kickball: I lost a kickball game once in elementary school'],
    },
  ],
  languages: [
    {
      name: 'English',
      level: 'Native speaker',
    },
    {
      name: 'Punjabi/Hindi',
      level: 'Speakable',
    },
  ],
  interests: [],
  references: [],
};

export const locationType = PropTypes.shape({
  address: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  countryCode: PropTypes.string,
  region: PropTypes.string,
}).isRequired;

export const profileType = PropTypes.shape({
  network: PropTypes.string,
  username: PropTypes.string,
  url: PropTypes.string,
}).isRequired;

export const basicsType = PropTypes.shape({
  name: PropTypes.string,
  label: PropTypes.string,
  picture: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.shape(locationType),
  profiles: PropTypes.arrayOf(profileType),
}).isRequired;

export const workType = PropTypes.arrayOf(PropTypes.shape({
  company: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const volunteerType = PropTypes.arrayOf(PropTypes.shape({
  organization: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const educationType = PropTypes.arrayOf(PropTypes.shape({
  institution: PropTypes.string,
  area: PropTypes.string,
  studyType: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  gpa: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const awardsType = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string,
  awarder: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const publicationsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  publisher: PropTypes.string,
  releaseDate: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
})).isRequired;

export const skillsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const languagesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  level: PropTypes.string,
})).isRequired;

export const interestsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const referencesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  reference: PropTypes.string,
})).isRequired;

export const resumeType = PropTypes.shape({
  basics: basicsType,
  work: workType,
  volunteer: volunteerType,
  education: educationType,
  awards: awardsType,
  publications: publicationsType,
  skills: skillsType,
  languages: languagesType,
  interests: interestsType,
  references: referencesType,
});