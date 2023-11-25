interface FormProps {
    prompt: string,
    setPrompt: any,
    onSubmit: any,
    isLoading: boolean,
}

const Form: React.FC<FormProps> = (props) => {
    const charLimit = 32
    const isPromptValid = props.prompt.length <= charLimit && props.prompt.length > 0
    let statusColor = "text-slate-500"
    let statusText = null
    if (!isPromptValid){
        if(props.prompt.length > 0){
            statusColor = "text-red-400"
            statusText = `Input must be less than ${charLimit} characters.`
        }else{
            statusColor = "text-white"
            statusText = `Enter A Tech Tweet Topic`
        }
    }
    return (
    <>
        <div className="mb-6 text-slate-400">
        <p>Tell me which topic in tech you want me to write a tweet</p>
        </div>
        <input
            className="p-2 w-full rounded-md focus:outline-teal-400 focus:outline text-slate-700" 
            type="text" 
            placeholder="machine learning"
            value={props.prompt}
            onChange={(e) => props.setPrompt(e.currentTarget.value)} maxLength={charLimit+1}></input>
        <div className={statusColor+" flex justify-between my-2 text-sm"}>
            <div>{statusText}</div>
            <div>{props.prompt.length}/{charLimit}</div>
        </div>
        <button
            className="bg-gradient-to-r from-teal-400 to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg text-white"
            onClick={props.onSubmit} disabled={( props.isLoading || !isPromptValid )}>{props.isLoading ? "Generating Tweet...": "Submit"}</button>
        
    </>
    )
}

export default Form