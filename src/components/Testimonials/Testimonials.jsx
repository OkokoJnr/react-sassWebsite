import TestimonialsDetails from "./TestimonialsDetails";
import './testimonialsDetails.css'
const testimonialList = [{
    name: 'Katherine Smith',
    text:'Our business has seen a significant increase in productivity since we started using the Growth app.',
    role:'Capodopera'
},
{
    name:'Johnathan Lee',
    text:'As a small business owner, it&apos; s important to have a tool that canhelp me keep track of everything. The Growth app has been a lifesaver for me, allowing me to manage my contacts, schedule appointments, and track progress all in one place..',
    role:'Red Bolt'
},
{
    name:'David Wilson',
    text:'The dashboards and reporting feature has provided valuable insights into our performance and helped us make data-driven decisions. It&apos;s a game changer for us.',
    role:'Slide'
}


]
function Testimonials (){
    console.log('Testimonials components')
    return (<>
    <section class="testimonials bg-dark">
      <div class="container">
        <h3 class="testimonials-heading text-xl">
          Don't just take our word for it, see the success stories from
          businesses just like yours.
        </h3>
        <div class="testimonials-grid">
            {
                testimonialList.map((testimonial)=>{
                    return <TestimonialsDetails name={testimonial.name} text={testimonial.text} role={testimonial.role}/>
                })
            }
        </div>
      </div>
    </section>

    </>)
}

export default Testimonials;