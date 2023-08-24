interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: 'Animation',
    description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    icon: '/icon-animation.svg',
  },
  {
    id: 2,
    title: 'Design',
    description: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    icon: '/icon-design.svg',
  },
  {
    id: 3,
    title: 'Photography',
    description: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    icon: '/icon-photography.svg',
  },
  {
    id: 4,
    title: 'Crypto',
    description:
      'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    icon: '/icon-crypto.svg',
  },
  {
    id: 5,
    title: 'Business',
    description:
      'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    icon: '/icon-business.svg',
  },
]

export default featuresData
