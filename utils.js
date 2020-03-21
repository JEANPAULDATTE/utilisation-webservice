const axios = require('axios');
const nodemailer = require('nodemailer');

module.exports = {
    // Position 
    geome : function(){
            const result = axios.get('https://ipapi.co/json')
                .then(async function (response) {
                    // handle success
                    let data = response.data;
                    let d = {
                        longitude: data.longitude,
                        latitude: data.latitude,                    
                    }
                    // console.log(response);
                    // ce qui veut dire tant que le d n'est pas affiché il ne doit pas passer
                    return await d
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
                return result
    },
    meteo : function(longitude,latitude){
        const result = axios.get('https://api.darksky.net/forecast/cbd2f02389ff4ac736e212bcbd759d85/'+latitude+','+longitude+'?lang=fr')
            .then(async function (response) {
                // handle success
                
                let data = response.data;
                let d = {
                    temperature: data.currently.temperature,
                    summary: data.currently.summary                    
                }
                // console.log(response);
                // ce qui veut dire tant que le d n'est pas affiché il ne doit pas passer
                return await d
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
            return result
},
mail : async function (dest,to,subject,message) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
           user: 'develidje@gmail.com',
           pass: 'd3v@3lidj3'
        }
     });
     const mailOptions = {
        from: dest, // sender address
        to: to, // recipient addresslist of receivers
        subject: subject, // Subject line
        html: JSON.stringify(message)// plain text body
     };
     transporter.sendMail(mailOptions, function (err, info) {
        if (err)
           console.log(err)
        else      
           console.log(info);
     });
}
}