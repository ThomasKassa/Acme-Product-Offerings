const getData=()=>{
let products = fetch("https://acme-users-api-rev.herokuapp.com/api/products");
let companies = fetch("https://acme-users-api-rev.herokuapp.com/api/companies");
let offerings = fetch("https://acme-users-api-rev.herokuapp.com/api/offerings");
const allResponses = Promise.all([products,companies,offerings])

return allResponses
    .then(result=> {
        const productResponse = result[0];
        const companiesResponse = result[1];
        const offeringsResponse = result[2];

        return Promise.all(productResponse.json(), companiesResponse.json(), offeringsResponse.json())
    })
    .then(JSON=> {
        const productsJSON = JSON[0];
        const companiesJSON = JSON[1];
        const offeringsJSON = JSON[2];

        return [productsJSON,companiesJSON,offeringsJSON]
    })
}

getData()
.then(result=> console.log(result))

// const renderData=()=>{
//     const results = getData()

//     let products = results[0];
//     let companies = results[1];
//     let offerings = results[2];



// }