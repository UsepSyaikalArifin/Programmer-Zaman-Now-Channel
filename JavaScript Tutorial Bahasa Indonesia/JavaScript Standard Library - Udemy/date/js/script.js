// 1.
{
    console.info(`===X===X===X===X===X===X===X===`)
    const date1 = new Date()
    const date2 = new Date(2020, 10, 10)
    const date3 = new Date(2020, 10, 10, 1, 0, 0, 0)
    const date4 = new Date(1636951671385)
    console.info(date1)
    console.info(date2)
    console.info(date3)
    console.info(date4)
}

// 2. Unix TimeStamp
{
    console.info(`===X===X===X===Unix TimeStamp===X===X===X===X===`)
    const date1 = new Date()
    const date2 = new Date(2020, 10, 10)
    const date3 = new Date(2020, 10, 10, 1, 0, 0, 0)
    const date4 = new Date(1636951671385)
    console.info(date1.getTime())
    console.info(date2.getTime())
    console.info(date3.getTime())
    console.info(date4.getTime())
    console.info(Date.now())
}

// 3. Parsing data
{
    console.info(`===X===X===X===Parsing data===X===X===X===X===`)
    const parseTimestamp = Date.parse(`2020-12-18T10:10:10.123+07:00`)
    const parseData = new Date(parseTimestamp)
    console.info(parseTimestamp)
    console.info(parseData)
}

// 4. Date Getter & Setter
{
    console.info(`===X===X===X===Date Getter & Setter===X===X===X===X===`)
    const date = new Date()
    date.setFullYear(2020)
    console.info(date)
    console.info(date.getFullYear())
    console.info(date.getMonth())
    console.info(date.getHours())
    console.info(date.getMinutes())
    console.info(date.getSeconds())
    console.info(date.getMilliseconds())
    console.info(date.getTimezoneOffset())
}