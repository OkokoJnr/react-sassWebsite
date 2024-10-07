function PricingDetails({category}){

  
    return (<>
    <div class={`card ${category.bg}`}>
        <div class="pricing-card-header">
            <h4 class="pricing-heading text-xl">{category.category}</h4>
            <p class="pricing-card-subheading">{category.description}</p>
            <p class="pricing-card-price">
            <span class="text-xl">{category.price}</span></p>
        </div>
        <div class="pricing-card-body">
            <ul>
                {
                    category.benefits.map((benefit)=>{
                        return <li><i class="fas fa-check">{benefit}</i></li>
                    })
                }
                
              </ul>
              <a href="#" class="btn btn-primary btn-block">Get Started</a>
            </div>
          </div>
    </>)
}

export default PricingDetails;