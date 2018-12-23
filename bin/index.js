#!/usr/bin/env node
const colors=require('colors');
const outside=require("../lib/outside");
var arguments=process.argv.splice(2);
var city=null;
if(arguments[0]=='--loc')
{
city=arguments[1];
   outside.outside(city);


   

}
else if(arguments[0]=='--help' || arguments[0]=='-h')
{
    console.log("@@@@@@@@@@Welcome@@@@@@@@@@@@@")
console.log("-h or --help for help");
console.log("--loc followed by the location for weather data");
console.log("outside with no arguments gives current location weather")
console.log("--abt tells about the app and author")
console.log("Legend===>> ****City Name--weather condition--weather description--temperature--min temperature--max temperature");
}

else if(arguments[0]==null)
{
    (outside.outside());
}
else if(arguments[0]=='--abt')
{
    console.log(colors.america('Outside is a simple command line application which shows the days weather forecast'));
    console.log(colors.green('Author: Ashay Mandwarya'));
    console.log(colors.rainbow('Thanks to openweathermap.com and ip-api.com for their api support'))
    console.log(colors.bgMagenta('Thanks to the developers of colors for such a great library'));
}