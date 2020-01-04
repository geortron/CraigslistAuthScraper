const request = require('request-promise').defaults({jar: true});
const fs = require('fs');

async function main() {
	try{
		const html = await request.post('https://accounts.craigslist.org/login', {
		    form: {
		      inputEmailHandle: "****@gmail.com",
		      inputPassword: "*****"
		    },
		    headers: {
		       Referer: 'https://accounts.craigslist.org/login'
		    },
		    simple: false,
		    followAllRedirects: true
        });
        fs.writeFileSync('./login.html', html);
        const billingHtml = await request.get('https://accounts.craigslist.org/login/home?show_tab=billing');
        fs.writeFileSync('./log.html', billingHtml);
	} catch (error) {
	      console.error(error);
	    }
	}

main();