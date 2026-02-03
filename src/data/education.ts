interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Cursos de Especialización Mastermind",
        startDate: "2024-09-01",
        endDate: "2026-06-30",
        school: "Mastermind Acadmy",
        location: "Academia Online",
        description: "",
        currentUni: false,
    },
    {
        title: "Desarrollo de Aplicaciones Multiplataforma",
        startDate: "2021-09-01",
        endDate: "2022-06-30",
        school: "IES Santiago Hernández",
        location: "Zaragoza, España",
        description: "Grado Superior",
        currentUni: false,
    },
    {
        title: "Desarrollo de Aplicaciones Web Dual",
        startDate: "2019-09-01",
        endDate: "2021-06-30",
        school: "IES Santiago Hernández",
        location: "Zaragoza, España",
        description: "Grado Superior en modalidad Dual",
        currentUni: false,
    },
    {
        title: "Sistemas Microinformáticos y Redes",
        startDate: "2017-09-01",
        endDate: "2019-06-30",
        school: "IES Santiago Hernández",
        location: "Zaragoza, España",
        description: "Grado Medio",
        currentUni: false,
    },
];

export default education;