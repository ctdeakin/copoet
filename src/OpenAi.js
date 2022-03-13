import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration)

async function completeMe(prompt, temperature) {
    try{const {data} = await openai.createCompletion("text-davinci-001", {
        prompt: `the next line in the poem after ${prompt}`,
        max_tokens: 14,
        temperature:temperature,
        top_p: 1.0,
        frequency_penalty: 1.0,
        presence_penalty: 1.0
    })
    return data.choices[0]
  
    } catch(error){
      console.error(error)
    }
} 

export default completeMe