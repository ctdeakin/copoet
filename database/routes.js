
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration)

async function completeMe({prompt, temperature}) {
    try{const {data} = await openai.createCompletion("text-davinci-001", {
        prompt: prompt,
        max_tokens:10,
        temperature:temperature
    })
    return data.choices[0]
  
    } catch(error){
      console.error(error)
    }
} 

module.exports = {completeMe}