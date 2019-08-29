module.exports = (values) => {
    let dataObj = {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0
    }

    values.forEach(el => {
        let date = el.dataValues.date;

        dataObj[String(date).split(' ')[1]] = el.dataValues.total;
    });

    let key = Object.keys(dataObj);

    let data = [];

    key.forEach((el) => {
        data.push([el, dataObj[el]])
    });

    let newData = data.map(el => {
        return el.join('|')
    })

    return newData;
}