const userProfiles = [
    {
        id: 1,
        name: "John Doe",
        username: "johndoe123",
        avatar: "man1.png",
        profilepic: "prof2.png",
        age: 28,
        birthdate: "1992-11-05",
        gender: "Male",
        biography: "Holds degrees in Computer Science and Software Engineering. Known for her creativity and contribution to innovative projects.",
        education: {
            elementarySchool: "Henderson Elementary School",
            middleSchool: "Jackson Middle School",
            highSchool: "Lincoln High School",
            university: [
                { name: "Oakridge University", degree: "Bachelor's degree in Computer Science" },
                { name: "Stanford University", degree: "Master's degree in Software Engineering" }
            ],
            academicAchievements: [
                "Achieved 1st place in regional mathematics competitions during elementary school.",
                "Led the robotics team to victory in the statewide robotics championship during middle school.",
                "Won 1st prize in the state science fair and received recognition for innovative projects in high school.",
                "Ranked among the top 5% of students in national programming competitions during university."
            ]
        },
        job: {
            workExperience: [
                "Internship at Tech Solutions Inc. (Summer 20XX): Assisted in software development projects, gaining hands-on experience in web development and database management.",
                "Junior Software Engineer at Alpha Software (20XX-20XX): Contributed to the development of client projects, focusing on front-end and back-end development using React.js and Node.js.",
                "Senior Software Engineer at Omega Technologies (20XX-Present): Leads a team of developers in designing and implementing complex software solutions. Specializes in full-stack development, with expertise in React.js, Node.js, and GraphQL."
            ],
            skills: [
                "Proficient in React.js, Node.js, and GraphQL.",
                "Experienced in front-end and back-end web development.",
                "Skilled in database management and optimization.",
                "Strong problem-solving abilities and attention to detail.",
                "Excellent communication and teamwork skills."
            ]
        }
    },
    {
        id: 2,
        name: "Emily Smith",
        username: "emilysmith87",
        avatar: "woman1.png",
        profilepic: "prof4.jpeg",
        age: 32,
        birthdate: "1992-11-05",
        gender: "Female",
        biography: "Holds degrees in Computer Science and Software Engineering. Known for her creativity and contribution to innovative projects.",
        education: {
            elementarySchool: "Henderson Elementary School",
            middleSchool: "Jackson Middle School",
            highSchool: "Lincoln High School",
            university: [
                { name: "Oakridge University", degree: "Bachelor's degree in Computer Science" },
                { name: "Stanford University", degree: "Master's degree in Software Engineering" }
            ],
            academicAchievements: [
                "Achieved 1st place in regional mathematics competitions during elementary school.",
                "Led the robotics team to victory in the statewide robotics championship during middle school.",
                "Won 1st prize in the state science fair and received recognition for innovative projects in high school.",
                "Ranked among the top 5% of students in national programming competitions during university."
            ]
        },
        job: {
            workExperience: [
                "Internship at Tech Solutions Inc. (Summer 20XX): Assisted in software development projects, gaining hands-on experience in web development and database management.",
                "Junior Software Engineer at Alpha Software (20XX-20XX): Contributed to the development of client projects, focusing on front-end and back-end development using React.js and Node.js.",
                "Senior Software Engineer at Omega Technologies (20XX-Present): Leads a team of developers in designing and implementing complex software solutions. Specializes in full-stack development, with expertise in React.js, Node.js, and GraphQL."
            ],
            skills: [
                "Proficient in React.js, Node.js, and GraphQL.",
                "Experienced in front-end and back-end web development.",
                "Skilled in database management and optimization.",
                "Strong problem-solving abilities and attention to detail.",
                "Excellent communication and teamwork skills."
            ]
        }
    },
    {
        id: 3,
        name: "Michael Johnson",
        username: "mike_j",
        avatar: "man2.png",
        profilepic: "prof3.png",
        age: 22,
        birthdate: "1992-11-05",
        gender: "Male",
        biography: "Holds degrees in Computer Science and Software Engineering. Known for her creativity and contribution to innovative projects.",
        education: {
            elementarySchool: "Henderson Elementary School",
            middleSchool: "Jackson Middle School",
            highSchool: "Lincoln High School",
            university: [
                { name: "Oakridge University", degree: "Bachelor's degree in Computer Science" },
                { name: "Stanford University", degree: "Master's degree in Software Engineering" }
            ],
            academicAchievements: [
                "Achieved 1st place in regional mathematics competitions during elementary school.",
                "Led the robotics team to victory in the statewide robotics championship during middle school.",
                "Won 1st prize in the state science fair and received recognition for innovative projects in high school.",
                "Ranked among the top 5% of students in national programming competitions during university."
            ]
        },
        job: {
            workExperience: [
                "Internship at Tech Solutions Inc. (Summer 20XX): Assisted in software development projects, gaining hands-on experience in web development and database management.",
                "Junior Software Engineer at Alpha Software (20XX-20XX): Contributed to the development of client projects, focusing on front-end and back-end development using React.js and Node.js.",
                "Senior Software Engineer at Omega Technologies (20XX-Present): Leads a team of developers in designing and implementing complex software solutions. Specializes in full-stack development, with expertise in React.js, Node.js, and GraphQL."
            ],
            skills: [
                "Proficient in React.js, Node.js, and GraphQL.",
                "Experienced in front-end and back-end web development.",
                "Skilled in database management and optimization.",
                "Strong problem-solving abilities and attention to detail.",
                "Excellent communication and teamwork skills."
            ]
        }
    },
    {
        id: 4,
        name: "Sarah Miller",
        username: "sr_miller",
        avatar: "woman2.png",
        profilepic: "prof.png",
        age: 28,
        birthdate: "1992-11-05",
        gender: "Female",
        biography: "Holds degrees in Computer Science and Software Engineering. Known for her creativity and contribution to innovative projects.",
        education: {
            elementarySchool: "Henderson Elementary School",
            middleSchool: "Jackson Middle School",
            highSchool: "Lincoln High School",
            university: [
                { name: "Oakridge University", degree: "Bachelor's degree in Computer Science" },
                { name: "Stanford University", degree: "Master's degree in Software Engineering" }
            ],
            academicAchievements: [
                "Achieved 1st place in regional mathematics competitions during elementary school.",
                "Led the robotics team to victory in the statewide robotics championship during middle school.",
                "Won 1st prize in the state science fair and received recognition for innovative projects in high school.",
                "Ranked among the top 5% of students in national programming competitions during university."
            ]
        },
        job: {
            workExperience: [
                "Internship at Tech Solutions Inc. (Summer 20XX): Assisted in software development projects, gaining hands-on experience in web development and database management.",
                "Junior Software Engineer at Alpha Software (20XX-20XX): Contributed to the development of client projects, focusing on front-end and back-end development using React.js and Node.js.",
                "Senior Software Engineer at Omega Technologies (20XX-Present): Leads a team of developers in designing and implementing complex software solutions. Specializes in full-stack development, with expertise in React.js, Node.js, and GraphQL."
            ],
            skills: [
                "Proficient in React.js, Node.js, and GraphQL.",
                "Experienced in front-end and back-end web development.",
                "Skilled in database management and optimization.",
                "Strong problem-solving abilities and attention to detail.",
                "Excellent communication and teamwork skills."
            ]
        }
    },
];
