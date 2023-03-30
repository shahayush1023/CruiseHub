const Stripe =require('stripe');
 
const stripe=new Stripe('sk_test_51MqZIESGLFcWMWvseRQVORFSvqcYaZ92D84eM46AWXYnh9VK6nuwzao0dNrOZrn69k1Ehv8WQBjVPGemE0wVApI100bElPIbJm',{
  apiVersion:'2022-11-15',
});
module.exports=stripe