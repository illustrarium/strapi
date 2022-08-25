// const config = {
//   locales: [
//     // 'ar',
//     // 'fr',
//     // 'cs',
//     // 'de',
//     // 'dk',
//     // 'es',
//     // 'he',
//     // 'id',
//     // 'it',
//     // 'ja',
//     // 'ko',
//     // 'ms',
//     // 'nl',
//     // 'no',
//     // 'pl',
//     // 'pt-BR',
//     // 'pt',
//     'ru',
//     // 'sk',
//     // 'sv',
//     // 'th',
//     // 'tr',
//     // 'uk',
//     // 'vi',
//     // 'zh-Hans',
//     // 'zh',
//   ],
// };

const bootstrap = app => {
  console.log(app);
};

import MenuLogo from './extensions/logo.png';

export default {
  config: {
    locales: ['ru'],
    translations: {
      ru: {
        "app.components.LeftMenu.navbrand.title": "Отец ботов",
        "app.components.LeftMenu.navbrand.workplace": "Система учёта мебели в наличии",
        Shop: 'Магазин',
        Sofa: 'Диван',
        Id: 'ID русский',
      },
    },
    menu: {
      logo: MenuLogo,
    }
  },
  bootstrap,
}

// export default {
//   config: {
//     locales: ['ru'],
//     translations: {
//       ru: {
//         'Auth.form.email.label': 'test',
//         Users: 'Пользователи',
//         City: 'Город',
//         Title: 'Название',
//         // Customize the label of the Content Manager table.
//         Id: 'ID russian',
//         Sofas: 'Диваны',
//       },
//     },
//   },
//   bootstrap() {},
// };
