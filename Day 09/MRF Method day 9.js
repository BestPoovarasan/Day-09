//step 01:create an XHR object
var request=new XMLHttpRequest();
//step 02: request a connection
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// step 03: once the data connection request
request.send();
//step 04: once the data sucessfully received
//from the server(250)
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    //Get all the countries from Asia continent /region using Filter function
    let res=data.filter((ele)=>ele.region==="Asia");
    console.log(res);

    // Get all the countries with a population of less than 2 lakhs using Filter function
    var countryData=JSON.parse(this.response);
    const populations=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(populations);

    // Print the following details name, capital, flag using forEach function
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })
    // Print the total population of countries using reduce function
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);
    // Print the country which uses US Dollars as currency.
    var data = JSON.parse(this.response);
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
}
    
    
