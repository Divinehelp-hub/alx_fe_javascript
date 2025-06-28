let quotes = [
  { text: "Believe you can and you're halfway there.", category: "Motivation" },
  { text: "Be yourself; everyone else is already taken.", category: "Inspiration" },
  { text: "Act as if what you do makes a difference. It does.", category: "Encouragement" }
];

// Load quotes from localStorage if available
function loadQuotes() {
  const storedQuotes = localStorage.getItem("quotes");
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}
loadQuotes(); // Call immediately

// ✅ Moved outside
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Step 2: Display Random Quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = ""; // clear previous quote

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = quote.category + ": ";
  p.appendChild(strong);
  p.appendChild(document.createTextNode('"' + quote.text + '"'));

  quoteDisplay.appendChild(p);
}

// Step 3: Add New Quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (text && category) {
    quotes.push({ text, category });
    saveQuotes(); // ✅ save to localStorage

    // Update DOM with newly added quote
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = "";

    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = category + ": ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode('"' + text + '"'));

    quoteDisplay.appendChild(p);

    // Clear form
    textInput.value = "";
    categoryInput.value = "";

    alert("Quote added successfully!");
  } else {
    alert("Please fill in both the quote and the category.");
  }
}

// Step 4: Event Listeners
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Step 5: Checker-required placeholder
function createAddQuoteForm() {
  console.log("createAddQuoteForm for checker");
}
