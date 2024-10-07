function TestimonialsDetails({name, role, text}){
    console.log('Details Component')
    return (<>
        <div class="card">
            <p>{`"${text}"`}</p>
            <p>{name}</p>
            <p>{role}</p> 
          </div>
    </>)
}

export default TestimonialsDetails;