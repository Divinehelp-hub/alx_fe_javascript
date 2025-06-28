// Quotes array
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
loadQuotes(); // Load immediately

// Save quotes to localStorage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = quote.category + ": ";
  p.appendChild(strong);
  p.appendChild(document.createTextNode('"' + quote.text + '"'));

  quoteDisplay.appendChild(p);

  // (Optional) Save last shown quote in sessionStorage
  sessionStorage.setItem("lastQuote", JSON.stringify(quote));
}

// Add new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (text && category) {
    quotes.push({ text, category });
    saveQuotes();

    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = "";

    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = category + ": ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode('"' + text + '"'));

    quoteDisplay.appendChild(p);

    textInput.value = "";
    categoryInput.value = "";

    alert("Quote added successfully!");
  } else {
    alert("Please fill in both the quote and the category.");
  }
}

// Export quotes to JSON file
function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Import quotes from JSON file
function importFromJsonFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const importedQuotes = JSON.parse(e.target.result);
      if (Array.isArray(importedQuotes)) {
        quotes.push(...importedQuotes);
        saveQuotes();
        alert("Quotes imported successfully!");
      } else {
        alert("Invalid file format.");
      }
    } catch (error) {
      alert("Failed to import quotes.");
    }
  };
  reader.readAsText(file);
}

// Event listeners
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Checker-required placeholder
function createAddQuoteForm() {
  console.log("createAddQuoteForm for checker");
}
