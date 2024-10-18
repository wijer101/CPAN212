const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// Enable CORS for the React app
app.use(cors());

// Data for resume
const education = [
    {
        degree: 'Computer Programming Diploma (Co-op Stream)',
        institution: 'Humber College',
        location: 'Etobicoke, ON',
        year: 'Expected Graduation - Aug 2025',
        additionalInfo: 'Dean’s Honour List. Highlighted Project: Developed a menu-driven library management system in Java showcasing object-oriented programming skills.',
    },
];

const experience = [
    {
      role: 'Administrative & Field Support Assistant',
      company: 'Topline Heating & Cooling Inc.',
      location: 'Brampton, ON',
      duration: '2021 - Present',
      responsibilities: [
        'Utilised CRM and database software to manage client information, service records, and financial files.',
        'Streamlined data entry processes with automated tracking systems, improving data accuracy and retrieval times.',
        'Developed and maintained an internal scheduling system using Excel macros, reducing scheduling conflicts and improving response times.',
        'Created standardized response protocols for customer service issues, leading to a 15% improvement in customer satisfaction.'
      ]
    }
  ];
  

const overview = {
    name: 'Arman Randhawa',
    summary: 'Motivated co-op student seeking a Winter 2025 placement in Computer Programming to enhance technical skills and gain hands-on experience in software development.',
};

const skills = [
    'Proficient in developing applications across Java, Android, Python, and C#.NET.',
    'Skilled in front-end web development and Android mobile programming with experience in creating user interfaces and applications.',
    'Knowledgeable in systems analysis and design and in scripting for Unix/Linux environments.',
    'Expertise in database development, design programming, and administration.',
    'Fluent in English and French with exceptional communication skills, problem solving, time management, and attention to detail.',
    'Ability to work effectively in team settings, take initiative on projects, and contribute to collaborative efforts.'
  ];

// Endpoints to serve data
app.get('/getEdu', (req, res) => {
    res.json(education);
});

app.get('/getExp', (req, res) => {
    res.json(experience);
});

app.get('/getOverview', (req, res) => {
    res.json(overview);
});

app.get('/getSkills', (req, res) => {
    res.json(skills);
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
