const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;
 

  let product = {

  }

  const transformedItems = items.map((item) => (
    product.description =  item.description,
    product.price_data =  {
      currency: "usd",
      product_data: {
        name: item.title,
        images: [item.image],
      },
      unit_amount: item.price * 100,
    },
    product.quantity = 1
  ));
  console.log(product);

  let s = [];

  s.push(product)


  

  const session = await stripe.checkout.sessions.create({
    // payment_method_types: ["card"],
    // shipping_rates: ["shr_1LtaJHSC1Zg8hJD03r69KJHi"],
    // // shipping_address_collection: {
    // //   allowed_countries: ["GB", "US", "CA", "IN"],
    // // },
    line_items: [{
       
        price_data: {
          currency: 'usd',
          unit_amount: 2000,
          product_data: {
            name: 'T-shirt',
            description: 'Comfortable cotton t-shirt',
            images: ['https://example.com/t-shirt.png'],
          },
        },
        quantity: 1,
      }],
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
   
  });
  res.redirect(200, session.url);
};
