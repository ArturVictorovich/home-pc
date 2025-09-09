interface Slides {
  id: number;
  name: string;
  post: string;
  photoSrc: string;
}

const slides: Slides[] = [
  {
    id: 1,
    name: 'Will Smith',
    post: 'Product Designer',
    photoSrc: 'src/img/about/man.png',
  },
  {
    id: 2,
    name: 'Emma Watson',
    post: 'Managing Director',
    photoSrc: 'src/img/about/woman.png',
  },
  {
    id: 3,
    name: 'Tom Cruise',
    post: 'Founder & Chairman',
    photoSrc: 'src/img/about/manager.png',
  },
];

export default slides;
