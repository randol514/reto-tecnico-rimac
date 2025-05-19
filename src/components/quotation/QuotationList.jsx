import QuotationCard from "./QuotationCard"
import QuotationIconForme from "../../assets/images/plans/plans-for-me.svg"
import QuotationIconForOther from "../../assets/images/plans/plans-for-other.svg"

const QuotationList = ({ setQuotationSelected }) =>{
  const Quotations = [
    {
      image: QuotationIconForme, 
      title: "Para mi", 
      text: "Cotiza tu seguro de salud y agrega familiares si así lo deseas."
    }, 
    {
      image: QuotationIconForOther, 
      title: "Para alguien más", 
      text: "Realiza una cotización para uno de tus familiares o cualquier persona."
    }
  ]

  return(
    <div className="quotation__list">
      { Quotations.map((quotation, index)=>(
        <QuotationCard  
        key={index} 
        title={quotation.title} 
        text={quotation.text} 
        image={quotation.image} 
        onSelect={() => setQuotationSelected(quotation.title)}
        />
      ))}
    </div>
  )
}

export default QuotationList