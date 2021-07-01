const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a510c5a557bd6df3d41357dde9b95950&query=' + latitude + ',' + longitude
        // console.log('Forecast incoming')
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Could not connect to the weather api', undefined)
        } else if (body.success === false) {
            callback('Address was not found', undefined)
        } else {
            callback(undefined, {
                country: body.location.country,
                temperature: body.current.temperature

            })
        }
    })
}


module.exports = forecast