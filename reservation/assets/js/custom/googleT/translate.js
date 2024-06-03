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
  },
  'Flight and Arrival Information (Please indicate here including FLIGHT NO. and ARRIVAL TIME in case of AIRPORT PICK-UP)': {
    'ja': '空港お迎えの場合は、フライト番号と到着時刻をここに入力してください' // Custom translation for Net in Japanese
  },
  'Check out the other version of the website by clicking the Version 1 button above or click this link <a style="font-size: 12px;" href="#">▶ライトバージョン</a>': {
    'ja': '上のバージョン 1 ボタンをクリックするか、このリンクをクリックして、Web サイトの他のバージョンをチェックしてください。<a style="font-size: 12px;" href="https://hotelasiacebu.com/jp/reservation.html">▶クリックしてください</a>' // Custom translation for Net in Japanese
  },
  'Han-nya': {
    'ja': 'Hannya' // Custom translation for Net in Japanese
  },
  'Please Select Day': {
    'ja': '日を選択してください' // Custom translation for Net in Japanese
  },
  'Please make a reservation before inquiring about room availability to avoid any issues when booking. We will confirm your reservation within 18 hours. If you dont receive a reply within 18 hours, please email us again and we will also follow up with a phone call.': {
    'ja': 'ご予約時またはご予約確定時にトラブルを避けるため、空室状況をお問い合わせいただく前に、まずご予約をお願いいたします。 ご予約が確定するかどうかは18時間以内に返信させていただきます。 お申し込みには必ず返信しておりますが 18時間以内に返信がない場合は、お手数ですが再度メールにてご連絡ください お電話にてご連絡させていただきます。' // Custom translation for Net in Japanese
  },
  'Room rates for January 16, 17, 18, and 19, 2025 will be regular prices reservations for these dates require prepayment for at least 3 consecutive nights. Crowds are expected as it is Sinulog, the biggest festival in the Philippines.<br>Reservations for January 18th, 19th, and 20th will also be at regular price.<br>If you choose to book by credit card at this point, the amount may be debited upon confirmation of your booking. Please note that reservations made during the regular price period will not be refunded even if canceled.': {
    'ja': '2025年1月16日、17日、18日、19日の宿泊料金は通常料金となります。これらの日付の予約には、少なくとも連続 3 泊分の事前支払いが必要です。フィリピン最大のお祭り「シヌログ」なので混雑が予想されます。1月18日、19日、20日のご予約も通常価格となります。この時点でクレジット カードでの予約を選択した場合、予約確認時に金額が引き落とされる場合があります。通常価格期間中のご予約はキャンセルされても払い戻しはできませんので、予めご了承ください。' // Custom translation for Net in Japanese
  },
  '※ SPECIAL (SINULOG) RATE': {
    'ja': '※ スペシャル（シヌログ）レート' // Custom translation for Net in Japanese
  },
  '【Single Occupancy】': {
    'ja': '【おひとりで】' // Custom translation for Net in Japanese
  },
  '【Double Occupancy】': {
    'ja': '【おふたりで】' // Custom translation for Net in Japanese
  },
  'Pick up': {
    'ja': 'お迎え' // Custom translation for Net in Japanese
  },
  'Drop off': {
    'ja': 'お送り' // Custom translation for Net in Japanese
  },
  'If online reservation fails or to make sure that your reservation is confirmed, please email to info@hotelasiacebu.com. Even if you book online, please contact info@hotelasiacebu.com.': {
    'ja': 'オンライン予約の場合も確認を含めinfo@hotlasiacebu.comまでご連絡ください。' // Custom translation for Net in Japanese
  },
  'We dont charge your credit card right away. Typically, we only process your credit card when you check in.': {
    'ja': 'クレジットカードにすぐに請求することはありません。通常、チェックイン時にのみクレジットカードが処理されます。' // Custom translation for Net in Japanese
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

            translatedHTML += `${translatedSentence}  `;
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
