const color=require('colors');
const request=require('request');
exports.outside= function(code)
{
    
    let apiKey = '2ddc76adb2ea54a23223021c08cc4e60';
        let city = code;
        let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey;
        var uri='http://ip-api.com/json';
    if(code)
    {
        
          request(url,function(err,response,body){
              if(err)
              {
                
                  return JSON.parse(error);
              }
              else{
                console.log('****'+color.blue(JSON.parse(body).name) +'--'+ color.green(JSON.parse(body).weather[0].main) +'--'+ color.grey(JSON.parse(body).weather[1].description) +'--'+ color.cyan(JSON.parse(body).main.temp)+'--'+ color.red(JSON.parse(body).main.temp_min) +'--'+ color.yellow(JSON.parse(body).main.temp_max)+'****');
              }
          });
      }
    else
    {
        request(uri, function(err,response,body){
            if(err)
            {
                console.log('error');
            }
            else{
            var cit=JSON.parse(body);
            var ura='http://api.openweathermap.org/data/2.5/weather?q='+cit.city+'&appid='+apiKey;
            return request(ura,function(err,response,body){
                if(err)
                {
                    console.log('error')
                }
                else
                {
                    console.log('****'+color.blue(JSON.parse(body).name) +'--'+ color.green(JSON.parse(body).weather[0].main) +'--'+ color.grey(JSON.parse(body).weather[0].description) +'--'+ color.cyan(JSON.parse(body).main.temp)+'--'+ color.red(JSON.parse(body).main.temp_min) +'--'+ color.yellow(JSON.parse(body).main.temp_max)+'****');
                }
            });
            
        }
    });
}          
       
}
