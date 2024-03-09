import OpenAI from "openai";
import * as constants from "./constants.js"
const openai = new OpenAI({
  apiKey: constants.key
});
const innerMessage = 'Lina';

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {role: "system", content: `Що ти знаєш про ${innerMessage}? рівень тривожності=3`}
      // {"role": "system", "content": "You are a helpful assistant."},
      // {"role": "user", "content": "Who won the world series in 2020?"},
      // {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
      // {"role": "user", "content": "Where was it played?"}
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
main();
