'use client';
import { useState } from 'react';

const Page = () => {
    const [prompt, setPrompt] = useState("");

    return (
        <div>
            <input className="bg-blue-300" value={prompt} onChange={e => setPrompt(e.target.value)}/>
            <button type="submit" onSubmit={() => console.log(prompt)}>Submit</button>
        </div>
    )
}

export default Page;