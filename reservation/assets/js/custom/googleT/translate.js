// Function to toggle visibility of language buttons based on the target language
function toggleLanguageButtons(targetLanguage) {
  const englishButton = document.getElementById('englishButton');
  const japaneseButton = document.getElementById('japaneseButton');

  if (targetLanguage === 'en') {
    englishButton.style.display = 'none';
    japaneseButton.style.display = 'inline-block';
  } else if (targetLanguage === 'ja') {
    japaneseButton.style.display = 'none';
    englishButton.style.display = 'inline-block';
  }
}

// Function to translate specific elements on the page with proper synchronization
async function translatePage(targetLanguage) {
  toggleLanguageButtons(targetLanguage); // Toggle immediately

  const elementsToTranslate = document.querySelectorAll('.translate');

  for (const element of elementsToTranslate) {
    const originalText = element.textContent.trim();
    const sentences = originalText.split(/[.!?]/).filter(sentence => sentence.trim());

    let translatedText = '';

    for (const sentence of sentences) {
      const translatedSentence = await googleTranslate(targetLanguage, sentence.trim());
      translatedText += `${translatedSentence}  `;
    }

    element.textContent = translatedText.trim();
  }
}

// Google Translate function with promise-based approach
function googleTranslate(targetLanguage, text) {
  return new Promise((resolve, reject) => {
    const baseUrl = 'https://translate.googleapis.com/translate_a/single';
    const apiUrl = `${baseUrl}?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const translatedText = data[0][0][0];
        resolve(translatedText);
      })
      .catch(error => {
        console.error('Error translating:', error);
        reject(error);
      });
  });
}

// Function to set language preference in local storage
function setLanguagePreference(language) {
  localStorage.setItem('language', language);
}

// Function to get language preference from local storage
function getLanguagePreference() {
  return localStorage.getItem('language') || 'en';
}

// Function to handle language selection
function handleLanguageSelection(languageCode) {
  setLanguagePreference(languageCode);
  translatePage(languageCode); // Call translatePage with the target language
}

// Event listeners for language buttons
englishButton.addEventListener('click', () => {
  handleLanguageSelection('en');
});

japaneseButton.addEventListener('click', () => {
  handleLanguageSelection('ja');
});

// Initial call to translate page based on stored language preference
const storedLanguage = getLanguagePreference();
translatePage(storedLanguage); // Also toggle the correct buttons on page load
