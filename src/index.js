function generateQuote(event){
    event.preventDefault();
    let quoteTopicInputLocator = document.querySelector("#quote-topic");
    console.log(quoteTopicInputLocator.value);

    // add typewriter function
    new Typewriter('#quote', {
        strings: "Life is 10% what happens to you and 90% how you react to it --Charles R. Swindoll",
        autoStart: true,
        cursor: "",
      });

}

let generateQuoteFormLocator = document.querySelector("#generate-quote-form");
generateQuoteFormLocator.addEventListener("submit", generateQuote);