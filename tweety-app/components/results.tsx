interface ResultsProps {
    tweet: string,
    hashtags: string[],
    onBack: any,
}

const Results: React.FC<ResultsProps> = (props) => {
    return (
        <>
        <div className="mb-4">
            <div className="bg-slate-700 p-4 my-2 rounded-md">
            { props.tweet ? 
                <div className="text-slate-500 text-sm font-bold mb-2"><b>Tweet</b>
                    <div className="text-xl font-bold text-white">{props.tweet}</div>
                </div> : null }
            </div>
            { (props.hashtags && props.hashtags.length) ? 
            <div className="text-slate-500 text-sm font-bold mb-2"><b>Hashtags</b> 
                <div className="text-xl font-bold text-white">{props.hashtags.join(", ")}</div>
            </div>: null }
        </div>
        <button 
            className="bg-gradient-to-r from-teal-400 to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg text-white" 
            onClick={props.onBack}>Back</button>
        </>
    )
}

export default Results