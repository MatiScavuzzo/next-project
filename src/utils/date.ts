const currentDate = new Date()
currentDate.setDate(currentDate.getDate() - 10)
const year = currentDate.getFullYear()
const month = String(currentDate.getMonth() + 1).padStart(2, '0')
const day = String(currentDate.getDate()).padStart(2, '0')

const currentDateToEndDate = new Date()
currentDateToEndDate.setDate(currentDateToEndDate.getDate() - 1)
const yearTED = currentDateToEndDate.getFullYear()
const monthTED = String(currentDateToEndDate.getMonth() + 1).padStart(2, '0')
const dayTED = String(currentDateToEndDate.getDate()).padStart(2,'0')

export const tenDaysLess = `${year}-${month}-${day}`
export const endDate = `${yearTED}-${monthTED}-${dayTED}`