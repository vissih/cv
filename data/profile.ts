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
        title: 'T1 at Avalanche🔺',
        subTitle: 'Remote',
        date: '2024 - Present',
        description: 'vibing and chilling - sometimes working',
      }
    ],
  },
  {
    title: 'Education',
    items: [
      {
        title: "B.Tech CSE",
        subTitle: 'Guru Jambeshwar University',
        date: '2022 - 2026',
        description: 'Computer Science and Engineering / Artifical Intelligence and Machine Learning',
      },
    ],
  },
]
