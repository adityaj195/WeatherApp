// listen for the form submission event     
document.getElementById('weatherForm').addEventListener('submit', function(e){
    // preventing the default behaviour of the submit button 

    e.preventDefault();


// get the city entered by the user 

const city = document.getElementById('city').value;

// api key by openweathermap 

const apiKey = '72037a52734e2cc1b69222e23191957f'

// api url by openweathermap 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


//  use the fetch function to make a GET request from the Openweathermap API 

fetch(apiUrl)
    .then(response=> response.json())
    .then(data=>{
        // handling the weather retrieved data 

        const weatherResult = document.getElementById('weatherResult');


        // updating the innerHTML 

        weatherResult.innerHTML=`
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}'C</p>
        <p>Weather: ${data.weather[0].description}</p>        
        `;

    })
    .catch(error=>{
        //handle errors during fetch 

        console.log("Error fetching the Api", error);

        // display error message 
        document.getElementById('weatherResult').innerHTML= 'Error fetching the data';

    })

});