// Variable to track if translation is on or off
let isTranslationOn = false;

// Custom translations for specific terms and phrases
const customTranslations = {
  'Superior': {
    'ja': 'スーペリア' // Custom translation for Superior in Japanese
  },
  '24/7 Reception': {
    'ja': '24時間受付' // Custom translation for 24/7 Reception in Japanese
  },
  'NET': {
    'ja': 'ネット' // Custom translation for Net in Japanese
  },
  'IN CASE OF CANCELLATION, the following charges will apply: 100% of 1 night per room reserved when you cancelled 7 days to 4days before check in date, 100% of 3 nights per room reserved if you reserved 3 nights or more when you cancelled 3 days to 1 day before check in date. Full charge of the whole reservation when you cancelled on the day or no show. The same rule will apply for shortening of stay.':{
    'ja': '到着日の３日前キャンセルは一夜分の50％、2日前、1日前、当日キャンセルは100％を申し受けます。 予約日数が短縮された場合は、それをキャンセルされたものとみなし以上のルールに基づいたパーセンテージを申し受けます。' // Custom translation for Net in Japanese
  },
  'VERY IMPORTANT!!!': {
    'ja': '重要事項' // Custom translation for Net in Japanese
  }
};

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
  const jpversionButton = document.getElementById('jpversion');

  if (isTranslationOn) {
    englishButton.style.display = 'inline-block'; // Offer "Off" button when translation is on
    japaneseButton.style.display = 'none';
    jpversionButton.style.display = 'inline-block';

  } else {
    japaneseButton.style.display = 'inline-block'; // Offer "On" button when translation is off
    englishButton.style.display = 'none';
    jpversionButton.style.display = 'none';
  }
}

// Function to reset elements to original text
function resetToOriginal() {
  const elementsToTranslate = document.querySelectorAll('.translate');

  elementsToTranslate.forEach(element => {
    const originalHTML = element.getAttribute('data-original-html') || element.innerHTML.trim(); // Get original HTML
    element.innerHTML = originalHTML; // Reset to original
  });

  toggleLanguageButtons(); // Update button visibility
}

// Function to translate specific elements on the page with proper synchronization
async function translatePage(targetLanguage) {
  toggleLanguageButtons(); // Adjust button visibility

  const elementsToTranslate = document.querySelectorAll('.translate');

  for (const element of elementsToTranslate) {
    // Store original HTML for reverting later
    if (!element.hasAttribute('data-original-html')) {
      element.setAttribute('data-original-html', element.innerHTML.trim());
    }

    const originalHTML = element.innerHTML.trim();

    // Check if the originalHTML matches any custom translation
    let translatedHTML = customTranslations[originalHTML]?.[targetLanguage];

    if (!translatedHTML) {
      // If no custom translation, perform the translation
      const segments = originalHTML.split(/(<br>)/i); // Split by <br> tags
      translatedHTML = '';

      for (const segment of segments) {
        if (segment.toLowerCase() === '<br>') {
          translatedHTML += segment; // Preserve the <br> tags
        } else {
          const sentences = segment.split(/[.!?]/).filter(sentence => sentence.trim());

          for (const sentence of sentences) {
            let translatedSentence;

            // Check if the sentence has a custom translation
            if (customTranslations[sentence]) {
              translatedSentence = customTranslations[sentence][targetLanguage];
            } else {
              translatedSentence = await googleTranslate(targetLanguage, sentence.trim());
            }

            translatedHTML += `${translatedSentence}. `;
          }
        }
      }
    }

    element.innerHTML = translatedHTML.trim(); // Translate and update
  }

  manualAdjustments(targetLanguage); // Perform manual adjustments after translation
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

// Manual adjustments for specific translations
function manualAdjustments(targetLanguage) {
  const elementsToAdjust = document.querySelectorAll('.translate');

  elementsToAdjust.forEach(element => {
    if (element.innerHTML.includes('excellent') && targetLanguage === 'ja') {
      element.innerHTML = element.innerHTML.replace('excellent', 'スーペリア');
    }
  });
}

// Event listeners for language buttons
document.getElementById('englishButton').addEventListener('click', () => {
  toggleTranslation(); // Toggle translation mode
});

document.getElementById('japaneseButton').addEventListener('click', () => {
  toggleTranslation(); // Toggle translation mode
});

// Initial call to check translation preference and translate or reset accordingly
isTranslationOn = getTranslationPreference(); // Get stored preference
if (isTranslationOn) {
  translatePage('ja'); // Translate if preference is "on"
} else {
  resetToOriginal(); // Otherwise, reset to original text
}
