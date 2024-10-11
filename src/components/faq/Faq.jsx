import { useState } from "react";
import './faq.css'
import FaqDetails from "./FaqDetail";

let faq = [
    {
        question:'Can I collaborate with my team in real-time using all tools?',
        answer:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque assumenda aut dolorem recusandae quibusdam aliquid. Repellat animi quam vitae.'
    },{
        question:'How does the contact management feature help me keep track of clients and partners?',
        answer:'Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.'
    },{
        question:'Can I customize the dashboards and reporting feature to display the metrics that are most important to my business?',
        answer:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad culpa enim blanditiis rem ipsum aliquam, unde iste fugit praesentium eos?'
    },{
        question:'How does the task management feature help me delegate tasks to my team and track progress?',
        answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, a! Quaerat, voluptatum. Animi molestias ex quasi explicabo minima perferendis commodi.'
    },{
        question:'Can I collaborate with my team in real-time using all tools?',
        answer:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque assumenda aut dolorem recusandae quibusdam aliquid. Repellat animi quam vitae.'
    },{
        question:'Is the app available on all devices?',
        answer:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque assumenda aut dolorem recusandae quibusdam aliquid. Repellat animi quam vitae.'
    }
]

let showfaQuestion = false;
function Faq(){
 let [showfaq, setShowFaq] = useState(showfaQuestion)
 function updateShowFaq(event){
    console.log(event.target)
    setShowFaq(!showfaq)
 }
    return (<>
    <section className="faq bg-light">
        <div className="container">
            <h3 className="text-xl text-center">Frequently Asked Question</h3>
            <ul className="faq-menu">
                <li className="active">All</li>
                <li>Getting Started</li>
                <li>Pricing</li>
            </ul>
            <div className="faq-content">
                {
                    faq.map((faq)=>{
                        return <FaqDetails faq={faq} eventHandler={updateShowFaq} showfaQuestion={showfaq}/>
                    })
                }
            </div>
        </div>
    </section>
        
    </>)
}

export default Faq;