import dataPoint from './datapoint'

const generateRandomData = (length) => {
  const data = []
  const categories = ["food", "transport", "housing", "education", "clothing"]
  const paymentModes = ['credit card', 'debit card', 'cash']
  const descriptions = ["bought this and that", "sold this for that", "reported a blind man", "met a thief"]

  const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  const getRandomDate = () => {
    return randomDate(new Date(2019, 8, 1), new Date()).toLocaleString().split(',')[0]
  }
  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }
  const getRandomAmount = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < length; i++) {
    const aDataPoint = new dataPoint(
      categories[getRandomIndex(categories)],
      getRandomDate(),
      paymentModes[getRandomIndex(paymentModes)],
      descriptions[getRandomIndex(descriptions)],
      getRandomAmount(200, 5000),
      false
    )
    data.push(aDataPoint)
  }
  return data.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) return 1;
    return -1
  })
}

export default generateRandomData