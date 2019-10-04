export interface Place {
  imgUrl: string;
  address: string;
  phone: number; // дополнительно задание pipe для форматирования
  weather: {
    title: string;
    icon: string;
    water: number;
    temperature: number;
  };
  social_info: {
    title: string;
    img: string;
    followers: number;
    following: number;
  };
  type: string;
}

export const Places: Place[] = [
  {
    imgUrl: 'https://images.unsplash.com/photo-1529440547539-b8500cf6c0c3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700',
    address: '960 South Fremont Drive, Downers Grove, IL 60515',
    phone: 16902384609,
    weather: {
      title: 'Sun',
      icon: 'wb_sunny',
      water: 16,
      temperature: 25
    },
    social_info: {
      title: 'O\'Kon, Metz and Howell',
      img: 'https://images.unsplash.com/photo-1496420996353-01aceb48eb4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500',
      followers: 5,
      following: 25
    },
    type: 'Beach'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1449457223141-e33b1053f9b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700',
    address: '1516 Petra Mission Suite 662 Jacquelynstad, ND 15853-3199',
    phone: 16925933691,
    weather: {
      title: 'Clouds',
      icon: 'wb_cloudy',
      water: 12,
      temperature: 18
    },
    social_info: {
      title: 'Ryan Ltd',
      img: 'https://images.unsplash.com/photo-1499898595565-f424ed1d075c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500',
      followers: 5546,
      following: 4654655
    },
    type: 'Beach'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1540505671583-e574409aca4d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700',
    address: '59805 Marvin Mall Zulaufchester, NJ 98854-4014',
    phone: 16902384609,
    weather: {
      title: 'Sun',
      icon: 'wb_sunny',
      water: 20,
      temperature: 30
    },
    social_info: {
      title: 'Volkman Group',
      img: 'https://images.unsplash.com/photo-1462897005938-416fea73793c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500',
      followers: 56,
      following: 5496
    },
    type: 'Beach'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1495134578450-b5950886d484?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700',
    address: '3410 Feeney Drive Suite 846 Alexysshire, FL 87677',
    phone: 16902384609,
    weather: {
      title: 'Sun',
      icon: 'wb_sunny',
      water: 22,
      temperature: 23
    },
    social_info: {
      title: 'Bradtke-Abernathy',
      img: 'https://images.unsplash.com/photo-1547738074-ea85eb0ed085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500',
      followers: 6555,
      following: 351
    },
    type: 'Pool'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1555992403-d3c92a8fad38?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700',
    address: '377 Quinton Mall Port Werner, MO 89527',
    phone: 16902384609,
    weather: {
      title: 'Sun',
      icon: 'wb_sunny',
      water: 23,
      temperature: 24
    },
    social_info: {
      title: 'Dibbert, Mertz and Breitenberg',
      img: 'https://images.unsplash.com/photo-1517374985980-5958a4b6677c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500',
      followers: 51665,
      following: 6516
    },
    type: 'Pool'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1494947862996-3d372e148e64?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700',
    address: '189 Lolita Ford West Filiberto, CO 03388-9028',
    phone: 16902384609,
    weather: {
      title: 'Sun',
      icon: 'wb_sunny',
      water: 16,
      temperature: 19
    },
    social_info: {
      title: 'Fritsch, Wehner and Walsh',
      img: 'https://images.unsplash.com/photo-1427097829427-56a905bf7004?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500',
      followers: 6555,
      following: 351
    },
    type: 'Pool'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1470010762743-1fa2363f65ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700',
    address: '56046 Ethelyn Spur Aniyafort, MS 42848-4765',
    phone: 16902384609,
    weather: {
      title: 'Sun',
      icon: 'wb_sunny',
      water: 16,
      temperature: 20.5
    },
    social_info: {
      title: 'Powlowski, Schroeder and Schmitt',
      img: 'https://images.unsplash.com/photo-1554748794-953974aa06da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500',
      followers: 6555,
      following: 351
    },
    type: 'Pool'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1559185590-fcf099ac62c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700',
    address: '891 Avis Center Suite 759 East Glennieport, OK 60833-9945',
    phone: 16902384609,
    weather: {
      title: 'Sun',
      icon: 'wb_sunny',
      water: 16,
      temperature: 15
    },
    social_info: {
      title: 'Quigley and Sons',
      img: 'https://images.unsplash.com/photo-1470376619031-a6791e534bf0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500',
      followers: 1285,
      following: 2165
    },
    type: 'SPA'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1469998265221-245c7148df5d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700',
    address: '5798 Mylene Court Suite 762 Port Vella, OK 86324',
    phone: 16902384609,
    weather: {
      title: 'Sun',
      icon: 'wb_sunny',
      water: 16,
      temperature: 17
    },
    social_info: {
      title: 'Berge, Kuhic and Kassulke',
      img: 'https://images.unsplash.com/photo-1518433669129-b650e3046111?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500',
      followers: 1285,
      following: 2165
    },
    type: 'SPA'
  }
]
