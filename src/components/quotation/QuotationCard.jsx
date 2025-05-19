
const QuotationCard = ({title, text, image, onSelect }) =>{
  return(
    <div className="quotation__card">
      <input 
        className="quotation__card-radio" 
        type="radio" 
        name="quotation-radios" 
        id={title} 
        onChange={onSelect}
      />
      <label className="quotation__card-content" htmlFor={title}>
        <div className="quotation__card-check"></div>
        <div className="quotation__card-icon-title">
          <figure className="quotation__card-icon">
            <img src={image} alt={title} className="quotation__card-icon-img" />
          </figure>
          <div className="quotation__card-title">
            <h3 className="quotation__card-title-text">{title}</h3>
          </div>
        </div>
        <div className="quotation__card-text">
          {text}
        </div>
      </label>
    </div>
  )
}

export default QuotationCard