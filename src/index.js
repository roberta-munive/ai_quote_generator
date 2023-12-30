function displayQuote(response) {
  let quoteLocator = document.querySelector("#quote");
  quoteLocator.classList.remove("blink");

  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let quoteTopicInputLocator = document.querySelector("#quote-topic");
  let topicInputByUser = quoteTopicInputLocator.value;

  let apiKey = "cf14b4c0f0c0d7a973ee3b4e430t2bo5";
  let prompt = `User instructions: Generate a motivational and inspiration quote about ${topicInputByUser}.`;
  let context =
    "You encourage people by writing short motivational and inspirational quotes of no more than two lines in HTML format. The topic of the quote should be based on the user instructions. Put each line of the quote on a separate line using HTML <p>quote line</p> format. Do not put line numbers in front of each line of the quote. Do not display a title for the quote. Do not display quotqtion marks. Sign the quote on a new line using the format <p><strong>--SheCodes AI</strong></p>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteLocator = document.querySelector("#quote");
  quoteLocator.classList.add("blink");
  quoteLocator.innerHTML = `⌛ Generating a quote about ${topicInputByUser}`;

  axios.get(apiUrl).then(displayQuote);
}

let generateQuoteFormLocator = document.querySelector("#generate-quote-form");
generateQuoteFormLocator.addEventListener("submit", generateQuote);
