export default function () {
  return {
    personalItem: [
      {
        id: 1,
        images: ['itemsSales/item1.png', 'itemsSales/item1.png', 'itemsSales/item1.png'],
        price: '41000',
        oldPrice: '65000',
        description: 'Стильное кольцо из белого золота c бриллиантами'
      },
      {
        id: 3,
        images: ['itemsSales/item2.png', 'itemsSales/item1.png', 'itemsSales/item3.png'],
        price: '41000',
        oldPrice: '',
        description: 'Стильное кольцо из белого золота c бриллиантами'
      },
      {
        id: 21,
        images: ['itemsDays/itemsDay1.png', 'itemsDays/itemsDay1.png', 'itemsDays/itemsDay1.png'],
        price: '21000',
        oldPrice: '65000',
        description: 'Кольцо из золота с бриллиантами',
        rating: 4.5,
        articul: '1012076',
        time: '',
        colors: ['#35b99a', 'rgba(107,69,239,0.91)', '#81593d', '#55b236'],
        sizes: [
          {
            size: '16,5',
            have: true
          },
          {
            size: '17,5',
            have: true
          },
          {
            size: '18,5',
            have: true
          },
          {
            size: '19,5',
            have: true
          },
          {
            size: '20',
            have: true
          },
          {
            size: '20.5',
            have: false
          },
          {
            size: '22',
            have: false
          },
        ],
        isHit: true,
        isNew: false,
        timer: '06:00:02'
      },
    ],
  };
}
