import './Pricing.css'
import PricingDetails from "./PricingDetails";

let priceCategory = [
    {
        category:'Simple',
        description:' Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.',
        price:'Free, *No credit card needed',
        benefits:['Real-Time Monitoring', 'Track key performance indicators','Schedule appointments', 'Organize, delegate and keep track of tasks'],
        bg:'bg-light'
    },
    {
        category:'Premium',
        description:'Keep track of your contacts, gain valuable insights, analyze live data and performance metrics.',
        price:'$40/month',
        benefits:['Everything from the free plan plus', 'Data-driven decisions', 'Data visualization', 'Schedule appointments'],
        bg:'bg-dark'
    }
]
function Pricing(){
    
    return (<>
    <section className='pricing'>
        <div class="container">
            <h3 class="pricing-heading text-xl text-center">Pricing</h3>
            <p class="pricing-subheading text-md text-center">
                Start free and scale while you grow. No hidden fees. Unlimited users
                for free.
            </p>
            <div class="pricing-grid">
        {
        priceCategory.map((category)=>{
           return <PricingDetails category={category}/>
        })
    }
    </div>
     <p class="pricing-footer text-center">
          All prices are in USD and charged per month with applicable taxes
          added at checkout.
        </p>
            
            </div>
       
                </section>
    </>)
}

export default Pricing;