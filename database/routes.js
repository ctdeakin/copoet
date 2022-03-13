
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration)

async function completeMe(prompt) {
    try{const {data} = await openai.createCompletion("text-davinci-001", {
        prompt: prompt
    })
    console.log(data.choices)} catch(error){
      console.error(error)
    }
} 

module.exports = {completeMe}