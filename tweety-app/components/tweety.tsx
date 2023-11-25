import React from "react"
import Form from "./form"
import Results from "./results"
import logo from "../public/tweety.svg"
import Image from "next/image"

const Tweety: React.FC = () => {
    const [prompt, setPrompt] = React.useState("")
    const [tweet, setTweet] = React.useState("")
    const [hashtags, setHashtags] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const BASE_URL = `${process.env.NEXT_PUBLIC_TWEETYAPI_URL}`
    const onSubmit = () => {
        // console.log("Submitting: " + prompt)
        // console.log("BASE URL :" + BASE_URL)
        setIsLoading(true)
        fetch(`${BASE_URL}?prompt=${prompt}`).then(res => res.json()).then((res) => {
            onTweetResult(res)
            // console.log("Response", res)
        })
    }

    const onTweetResult = (data: any) => {
        setTweet(data.tweet)
        setIsLoading(false)
    }

    const onHashtagResults = (data: any) => {
        setHashtags(data.hashtags)
    }

    const onBack = () => {
        setPrompt("")
        setTweet("")
        setHashtags([])
        setIsLoading(false)
    } 
    const gradientTextStyle = "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-light w-fit mx-auto";


    return <>
    <div className="h-screen flex">
        <div className="max-w-md m-auto p-2">
            <div className="bg-black p-6 rounded-md border-4 border-indigo-500/50">
            <div className="text-center my-6">
            <Image className="m-auto" src={logo} width={42} height={42} alt="tweety app logo" />
            <h1 className={ gradientTextStyle + " text-3xl font-light" }>Tweety</h1>
            <div className={ gradientTextStyle }>AI tweeting assistant for software engineers</div>
            </div>
            { 
                tweet ? 
                    <Results tweet={tweet} hashtags={hashtags} onBack={onBack} />
                    : <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} />
            }
            
            </div>
        </div>
    </div>
    </>
}

export default Tweety