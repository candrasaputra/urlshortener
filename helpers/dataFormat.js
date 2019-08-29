module.exports = (date) => {
    const month = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agst', 'Sep', 'Okt', 'Nov', 'Des']
    let getDay = String(date.getDay());
    let getMonth = date.getMonth();

    return getDay.padStart(2, '0') + ' ' + month[getMonth];
}