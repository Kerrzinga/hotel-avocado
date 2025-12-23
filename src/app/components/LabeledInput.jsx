

export default function LabeledInput({ type = "text", className = "w-100", fieldName, children }) {
  return (
    <div className="odd:bg-lime-200 p-2 even:bg-amber-100 p-2">    
      <label htmlFor={fieldName} className="inline-block font-bold w-full sm:w-40 md:w-70 lg:w-100">{children}</label>
      {type === "textarea" ? (
        <textarea id={fieldName} name={fieldName} className={"rounded-lg border border-lime-900/30 bg-white p-2  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 h-32 " + className}></textarea>
      ) : (
        <input
          type={type} 
          id={fieldName} 
          name={fieldName} 
          className={"rounded-lg border border-lime-900/30 bg-white p-2  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 " + className} />
      )}
    </div>
  );
}
