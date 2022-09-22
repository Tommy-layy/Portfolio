const header = {
  homepage: 'Home Page',
  title: 'TL.'
}

const about = {
  name: 'Tommy Le',
  role: 'Full Stack Software Engineer',
  description:
    'Software engineer with a diverse background and passion for tech. I have a medical field background working in a clinical diagnostic lab and have also gained direct patient care skills while working in radiology. I am always looking to learn and add new skills to my arsenal in an effort to apply them into my work. I also enjoy working with a team of like minded individuals and am willing to help the team thrive and succeed.',
  resume:
    'https://docs.google.com/document/d/1N0wLmbwzfpFtTaIq7OtV8RwAW1W3SKmI9JFnXBLwr0M/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/tommyyle/',
    github: 'https://github.com/Tommy-layy'
  }
}

const projects = [
  {
    name: 'Connect Four',
    description:
      'A simple Connect Four game that I built after just 2 weeks of class. The game was built using basic HTML, CSS, and JavaScript, and was deployed using Surge',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Tommy-layy/Connect_Four',
    livePreview: 'http://tlconnect4game.surge.sh/'
  },
  {
    name: 'Project 2',
    description:
      'Project 2 will go here once I posh up a project that I liked!',
    stack: ['React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com'
  },
  {
    name: 'Project 3',
    description:
      'Project 3 will go here once I polish up a project that I liked!',
    stack: ['React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com'
  }
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']

const contact = {
  email: 'LeTran.Tommy@gmail.com'
}

export { header, about, projects, skills, contact }