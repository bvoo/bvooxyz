import countryToCurrency from 'country-to-currency';

interface Env { }

export async function onRequest(context: any) {
    const { request } = context;
    const cf = request.cf;

    let country = 'Unknown';
    let currency = 'USD';

    if (cf) {
        country = cf.country || 'Unknown';
        currency = countryToCurrency[country] || 'USD';
    }

    return new Response(JSON.stringify({ country, currency }), {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
    });
}
