export type ProfileDataProps = {
  title: string
  items: {
    title: string
    subTitle: string
    date: string
    description: string
  }[]
}

export const profileData = [
  {
    title: 'Work Experience',
    items: [
      {
        title: 'Tech Volunteer at GURU JAMBESHWAR UNIVERSITY',
        subTitle: 'Hybrid',
        date: '2023 - Present',
        description:
          'Developing and maintaining web applications using JavaScript, PHP, SQL, HTML, and CSS. Collaborating with the team to implement new features and fix bugs.',
      },
      {
        title: 'Communtiy Volunteer at THE PRODUCT HOUSE',
        subTitle: 'Remote',
        date: '2022 - 2023',
        description: 'I led community engagement and managed Discord moderation, successfully onboarding over 5,000 members. I collaborated with sponsors and facilitated both online and offline events, driving user engagement and brand visibility.',
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        title: "Bachelor's Degree in Computer Science",
        subTitle: 'Guru Jambeshwar University',
        date: '2022 - 2026',
        description: 'Computer Science and Engineering / Artifical Intelligence & Machine Learning',
      },
    ],
  },
]
