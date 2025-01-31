import { useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const Learn = () => {
    const [data, setData] = useState("")
    const [question, setQuestion] = useState("")
    const [loader, setLoader] = useState(false);

    // const VITE_GEMINI_API_KE=import.meta.env.API_KEY
    const VITE_GEMINI_API_KE = 'AIzaSyA2cRSfumPzzJpTBLzwqLfo0ttYwxI7G-k'

    async function generateAnswer() {
        setLoader(true)
        try {
            console.log("loading..")

            const res = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${VITE_GEMINI_API_KE}`,
                method: "post",
                data: {
                    contents: [
                        { parts: [{ text: question }] },
                    ],
                },

            })
            setLoader(false);
            setData(res["data"]["candidates"][0]["content"]["parts"][0]["text"]);
            

        } catch (err) {
            setLoader(false);
            console.log(err);
            setData("Sorry - Something went wrong. Please try again!");
        }
        setQuestion("");


    }



    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold">Ask Your Python Tutor</h2>
            <textarea
                className="w-full md:w-3/4 lg:w-full h-32 md:h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="3"
                placeholder="Ask a Python question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}

            />
            <div>
                {loader && <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>}
            </div>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-2 overflow-hidden
             text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600
              group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 
              focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" onClick={generateAnswer}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Ask
                </span>
            </button>
            <div className="overflow-auto max-w-full">
                {data && (
                    <pre className="mt-4 p-4 bg-gray-100 rounded text-black sm:text-lg md:text-xl lg:text-xl xl:text-xl text-center 
                    overflow-auto break-words whitespace-pre-wrap">
                        {data}
                    </pre>
                )}
            </div>

        </div>
    );
};

export default Learn;
