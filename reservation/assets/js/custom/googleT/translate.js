// Variable to track if translation is on or off
let isTranslationOn = false;

// Function to toggle translation mode
function toggleTranslation() {
  isTranslationOn = !isTranslationOn; // Flip the toggle
  setTranslationPreference(isTranslationOn); // Store in local storage

  if (isTranslationOn) {
    translatePage('ja'); // If translation is on, translate to Japanese
  } else {
    resetToOriginal(); // If off, reset to original text
  }
}

// Function to store translation preference in local storage
function setTranslationPreference(translationState) {
  localStorage.setItem('translation', translationState ? 'on' : 'off');
}

// Function to get translation preference from local storage
function getTranslationPreference() {
  return localStorage.getItem('translation') === 'on';
}

// Function to toggle visibility of language buttons based on translation state
function toggleLanguageButtons() {
  const englishButton = document.getElementById('englishButton');
  const japaneseButton = document.getElementById('japaneseButton');

  if (isTranslationOn) {
    englishButton.style.display = 'inline-block'; // Offer "Off" button when translation is on
    japaneseButton.style.display = 'none';
  } else {
    japaneseButton.style.display = 'inline-block'; // Offer "On" button when translation is off
    englishButton.style.display = 'none';
  }
}

// Function to reset elements to original text
function resetToOriginal() {
  const elementsToTranslate = document.querySelectorAll('.translate');

  elementsToTranslate.forEach(element => {
    const originalText = element.getAttribute('data-original-text') || element.textContent.trim(); // Get original text
    element.textContent = originalText; // Reset to original
  });

  toggleLanguageButtons(); // Update button visibility
}

// Function to translate specific elements on the page with proper synchronization
async function translatePage(targetLanguage) {
  toggleLanguageButtons(); // Adjust button visibility

  const elementsToTranslate = document.querySelectorAll('.translate');

  for (const element of elementsToTranslate) {
    // Store original text for reverting later
    if (!element.hasAttribute('data-original-text')) {
      element.setAttribute('data-original-text', element.textContent.trim());
    }

    const originalText = element.textContent.trim();
    const sentences = originalText.split(/[.!?]/).filter(sentence => sentence.trim());

    let translatedText = '';

    for (const sentence of sentences) {
      const translatedSentence = await googleTranslate(targetLanguage, sentence.trim());
      translatedText += `${translatedSentence}  `;
    }

    element.textContent = translatedText.trim(); // Translate and update
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

// Event listeners for language buttons
englishButton.addEventListener('click', () => {
  toggleTranslation(); // Toggle translation mode
});

japaneseButton.addEventListener('click', () => {
  toggleTranslation(); // Toggle translation mode
});

// Initial call to check translation preference and translate or reset accordingly
isTranslationOn = getTranslationPreference(); // Get stored preference
if (isTranslationOn) {
  translatePage('ja'); // Translate if preference is "on"
} else {
  resetToOriginal(); // Otherwise, reset to original text
}
