interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry{

    description: string;
    status: string;
    createdAt: number;
}



export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Lorem ipsum dolor.',
            status: 'pending',
            createdAt: Date.now(),
       },
       {
            description: 'En-Progreso Lorem ipsum dolor.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
       },
       {
            description: 'Terminadas: Lorem ipsum dolor.',
            status: 'finished',
            createdAt: Date.now() - 100000,
       }
  
    ]
}