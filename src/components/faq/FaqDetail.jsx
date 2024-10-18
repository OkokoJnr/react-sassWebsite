function FaqDetails({faq, eventHandler, openFAQ}){
    
    return (<>
            <div className="faq-group" key={faq.index}>
                    <div className="faq-group-header" onClick={()=>{eventHandler(faq.index)}}>
                        <h4 className="text-md">{faq.question}</h4>
                        <i className="fas fa-minus">{openFAQ === faq.index ? '-':'+'}</i>
                    </div>
                    {openFAQ  === faq.index && <div className="faq-group-body open">
                        <p>{faq.answer}</p>
                    </div>}
                </div>
    </>)
}

export default FaqDetails;