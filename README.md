# Food Delivery Website

Food delivery website similar to Seamless/Grubhub/Deliveroo. State handled with Context. Content managed via Strapi and payments via Stripe.

[Demo](https://jsnspr-react-next-strapi-stripe-food-delivery.herokuapp.com)

This is not set up as a fully built out eccommerce site. There is no communication with the example restaurants used. 

If testing the order process, use [fake CC information](https://stripe.com/docs/testing) (such as: 4242-4242-4242-4242, 04/24, 242).

** How to Use 

...

** Set up Instructions

- Copy files
- Follow [Strapi installation instructions](https://strapi.io/documentation/3.x.x/getting-started/introduction.html).


If running locally, edit frontend/components/RestaurantList/index.js cand pages/restaurants.js, replacing `{res.image.url}` with ``{`localhost:1337${res.image.url}`}``. 

If you want to run it on a hosting platform such as Heroku, you 