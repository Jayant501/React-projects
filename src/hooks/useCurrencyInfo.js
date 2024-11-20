import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        console.log(currency)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        //convert data to json
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log('data',data)
    } , [currency])
    return data
}

export default useCurrencyInfo;