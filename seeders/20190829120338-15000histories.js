'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const arr = []
    const desktopOS = ['Windows', 'Linux', 'Linux64', 'Mac', 'ChromeOS']
    const mobileOS = ['Android', 'BlackBerry']
    const browser = ['Firefox', 'Chrome', 'IE', 'Safari', 'YaBrowser', 'Edge', 'Webkit', 'Konqueror', 'Flock']
    const device = ['Desktop', 'Mobile', 'Tablet']
    for (let i = 0; i < 15000; i++) {
      let rollDevice = device[Math.floor(Math.random() * device.length)]
      let rollBrowser = browser[Math.floor(Math.random() * browser.length)]
      let rollDesktopOS = desktopOS[Math.floor(Math.random() * desktopOS.length)]
      let rollMobileOS = mobileOS[Math.floor(Math.random() * mobileOS.length)]
      if (rollDevice === 'Desktop') {
        arr.push({
          browser: rollBrowser,
          OS: rollDesktopOS,
          device: rollDevice,
          UrlId: Math.floor(Math.random() * 1000) + 1,
          createdAt: faker.date.between('2019-01-01', '2019-08-29'),
          updatedAt: new Date()
        })
      } else {
        arr.push({
          browser: rollBrowser,
          OS: rollMobileOS,
          device: rollDevice,
          UrlId: Math.floor(Math.random() * 1000) + 1,
          createdAt: faker.date.between('2019-01-01', '2019-08-29'),
          updatedAt: new Date()
        })
      }
    }
    return queryInterface.bulkInsert('Histories', arr, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Histories', null, {})
  }
};
