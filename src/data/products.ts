export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  imageUrl: string;
  isPopular?: boolean;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Stylo Licorne Magique',
    price: 4.99,
    quantity: 15,
    description: 'Stylo scintillant avec une petite licorne  !',
    imageUrl: '/assets/images/Stylo Licorne Magique.png',
    isPopular: true
  },
  {
    id: '2',
    name: 'Carnet Chat Souriant',
    price: 6.99,
    quantity: 8,
    description: 'Carnet avec un chat souriant ',
    imageUrl: '/assets/images/Carnet Chat Souriant.png'
  },
  {
    id: '3',
    name: 'cahier cute',
    price: 2.50,
    quantity: 20,
    description: 'un cahier jolie pour prise de note en classe:! ',
    imageUrl: '/assets/images/cute notebbok.png'
  },
  {
    id: '4',
    name: 'Agenda Fall',
    price: 5.99,
    quantity: 12,
    description: 'Agenda saisonnier avec motifs automnaux',
    imageUrl: '/assets/images/agenda fall.png'
  },
  {
    id: '5',
    name: 'Trousse Cute Nuages',
    price: 8.50,
    quantity: 10,
    description: 'Trousse toute douce avec des nuages et des étoiles',
    imageUrl: '/assets/images/cloud-pencil-case.png'
  },
  {
    id: '6',
    name: 'Agenda Aesthetic Fleurs',
    price: 9.99,
    quantity: 7,
    description: 'Agenda 2023 avec motifs fleurs pastel ',
    imageUrl: '/assets/images/flower-planner.png',
    isPopular: true
  },
  {
    id: '7',
    name: 'Mug Fall Pumpkin Spice',
    price: 7.25,
    quantity: 15,
    description: 'Mug automnal parfait pour votre lait au chocolat en fall ',
    imageUrl: '/assets/images/pumpkin-mug.png'
  }
];