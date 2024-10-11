function TestimonialsDetails({name, role, text}){
    return (<>
        <div class="card">
            <p>{`"${text}"`}</p>
            <p>{name}</p>
            <p>{role}</p> 
          </div>
    </>)
}

export default TestimonialsDetails;