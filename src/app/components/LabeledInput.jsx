

export default function LabeledInput({ type = "text", className = "w-100", fieldName, error, children }) {
  const errorId = error ? `${fieldName}-error` : undefined;
  const border = error ? "border-red-600" : "border-lime-900/30";

  return (
    <div className="odd:bg-lime-200 p-2 even:bg-amber-100 p-2">    
      <label htmlFor={fieldName} className="inline-block font-bold w-full sm:w-40 md:w-70 lg:w-100">{children}</label>
      {type === "textarea" ? (
        <textarea 
          id={fieldName} 
          name={fieldName} 
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={"rounded-lg border " + border + " bg-white p-2  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 h-32 " + className}></textarea>
      ) : (
        <input
          type={type} 
          id={fieldName} 
          name={fieldName} 
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={"rounded-lg border " + border + " bg-white p-2  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 " + className} />
      )}

      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600 ml-0 sm:ml-40 md:ml-70 lg:ml-100">
          {error}
        </p>
      )}
    </div>
  );
}
