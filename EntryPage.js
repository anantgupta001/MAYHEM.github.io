const newEntryBtn = document.getElementById("new-entry-btn");
const entryFormContainer = document.getElementById("entry-form-container");
const entryForm = document.getElementById("entry-form");
const journalEntries = document.getElementById("journal-entries");

let entries = [];

newEntryBtn.addEventListener("click", () => {
  entryFormContainer.classList.toggle("hidden");
});

entryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("entry-title").value;
  const date = document.getElementById("entry-date").value;
  const text = document.getElementById("entry-text").value;
  const entry = { title, date, text };
  entries.push(entry);
  entryForm.reset();
  entryFormContainer.classList.add("hidden");
  renderJournalEntries();
});

function renderJournalEntries() {
  journalEntries.innerHTML = "";
  entries.forEach((entry) => {
    const div = document.createElement("div");
    div.classList.add("journal-entry");
    const h3 = document.createElement("h3");
    h3.innerText = entry.title;
    const p1 = document.createElement("p");
    p1.innerText = entry.date;
    const p2 = document.createElement("p");
    p2.innerText = entry.text;
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    journalEntries.appendChild(div);
  });
}
