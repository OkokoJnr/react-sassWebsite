function FaqDetails({faq, eventHandler, showfaQuestion}){
    
    return (<>
            <div className="faq-group">
                    <div className="faq-group-header" onClick={eventHandler}>
                        <h4 className="text-md">{faq.question}</h4>
                        <i className="fas fa-minus">+</i>
                    </div>
                    {showfaQuestion && <div className="faq-group-body open">
                        <p>{faq.answer}</p>
                    </div>}
                </div>
    </>)
}

export default FaqDetails;