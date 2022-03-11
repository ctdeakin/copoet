const { Configuration, OpenAIApi } = require("openai");
console.log(process.env.OPENAI_API_KEY)


// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration)

// async function completeMe(prompt) {
//     const {data} = await openai.createCompletion("text-davinci-001", {
//         prompt: prompt,
//         max_tokens: 6
//     })

//     console.log(data)
// } 

// completeMe('Say Hello World')
