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
  'The following charges will apply: 100% of 1 night per room reserved when you cancelled 7 days to 4days before check in date, 100% of 3 nights per room reserved if you reserved 3 nights or more when you cancelled 3 days to 1 day before check in date. Full charge of the whole reservation when you cancelled on the day or no show. The same rule will apply for shortening of stay.':{
    'ja': '到着日の３日前キャンセルは一夜分の50％、2日前、1日前、当日キャンセルは100％を申し受けます。 予約日数が短縮された場合は、それをキャンセルされたものとみなし以上のルールに基づいたパーセンテージを申し受けます。' // Custom translation for Net in Japanese
  },
  'VERY IMPORTANT!!!': {
    'ja': '重要事項' // Custom translation for Net in Japanese
  },
  'Flight and Arrival Information (Please indicate here including FLIGHT NO. and ARRIVAL TIME in case of AIRPORT PICK-UP)': {
    'ja': '空港お迎えの場合は、フライト番号と到着時刻をここに入力してください' // Custom translation for Net in Japanese
  },
  'Han-nya': {
    'ja': 'Hannya' // Custom translation for Net in Japanese
  },
  'Please Select Day': {
    'ja': '日を選択してください' // Custom translation for Net in Japanese
  },
  'In order to avoid any problems when making a reservation or confirming your reservation, please make a reservation first before inquiring about availability. We always reply to your application.': {
    'ja': 'ご予約時またはご予約確定時にトラブルを避けるため、空室状況をお問い合わせいただく前に、まずご予約をお願いいたします。 お申し込みには必ず返信しております。' // Custom translation for Net in Japanese
  },
  'SINULOG RATE on January 16, 17, 18, and 19, 2025. reservations for these dates require prepayment for at least 3 consecutive nights. Crowds are expected as it is Sinulog, the biggest festival in the Philippines. Reservations for January 18th, 19th, and 20th will also be at Sinulog rate.Please note that reservations made during the Sinulog rate period will not be refunded even if canceled.': {
    'ja': '2025年1月16日、17日、18日、19日の料金はSinulogの料金で請求されます。この日程の予約には、3連泊以上の前払いが必要です。また、フィリピン最大のお祭り「シヌログ」のため、混雑が予想されます。1月18日、19日、20日に行われた予約もSinulogレートで請求されます。この時点でクレジットカードで予約した場合、金額が差し引かれる場合があります。' // Custom translation for Net in Japanese
  },
  '※ SINULOG RATE IS PLUS 500pesos': {
    'ja': '※ Sinulogレートはプラス500ペソです' // Custom translation for Net in Japanese
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
  },
  'Sinulog Rate [plus 500 pesos per room]': {
    'ja': 'シヌログ料金 [各部屋毎にプラス 500 ペソ]' // Custom translation for Net in Japanese
  },
  'BDO Peso Account<br>Current Account#:293-8004748<br>Account Name : HOTEL ASIA GENA CORPORATION': {
    'ja': '三井住友銀行、恵比寿支店、普通預金 <br> 預金名義：ホテル アジア ゲナ コーポレーション <br>口座番号：８２４６７１７' // Custom translation for Net in Japanese
  },
  'Drop-off': {
    'ja': 'お送り' // Custom translation for Net in Japanese
  },
  'Airport Pick up': {
    'ja': 'お迎え' // Custom translation for Net in Japanese
  },
  'Send': {
    'ja': '送信' // Custom translation for Net in Japanese
  },
  'Han-nya Japanese Restaurant is open 24 hours daily. It is located at the ground floor of Hotel Asia. For breakfast choices, you can have Japanese, American/Western and Filipino dishes. You can enjoy more than 100 kinds of dishes such as fried or grilled fish, nigiri sushi, buckwheat noodle, etc. at very affordable prices.You can also enjoy different dishes every day for one month!We serve not only meals but also fresh fruits, ice cream, coffee, etc..': {
    'ja': '日本食レストラン『はんにゃ』はホテル内にあり24時間営業しています。和食・洋食・セブ食からの選べる朝食。定番の唐揚げや焼き魚、生姜焼き定食、にぎり寿司、そばなど、常時100種類以上の豊富なメニューがお手頃価格で味わえます。1ヵ月間毎日違うものを楽しむことも可能！お食事だけでなく、フルーツやアイスクリーム・コーヒー等もご用意しています。' // Custom translation for Net in Japanese
  },
  'Executive': {
    'ja': 'エグゼクティブ' // Custom translation for Net in Japanese
  },
  'Per room': {
    'ja': '一部屋' // Custom translation for Net in Japanese
  },
  'This room has one Double sized bed. It is one size smaller than the standard room. It has a shower and doesnt have a bathtub.': {
    'ja': 'ダブルサイズベッド1台が備わるお部屋です。スタンダードルームより一回り小さいお部屋です。シャワーはありますが、バスタブはありません。' // Custom translation for Net in Japanese
  },
  'This room has one Semi Double sized bed. It has a shower and doesnt have a bathtub.': {
    'ja': 'セミダブルサイズのベッドが1台あるお部屋です。シャワーはありますが、バスタブはありません。' // Custom translation for Net in Japanese
  },
  'You can choose from the following types of room. <br/> <br/> - One Bed Room (Room has one Queen sized bed). <br/> - Twin Bed Room (Room has one queen sized bed plus one single sized bed). <br/> <br/> This room is much bigger than the Deluxe Plus, and has a very comfortable sofa.': {
    'ja': 'お部屋は以下のタイプからお選びいただけます。 <br/> <br/> - 1 ベッドルーム (部屋にはクイーンサイズのベッドが 1 台あります)。 <br/> - ツインベッドルーム（クイーンサイズベッド1台とシングルサイズベッド1台が備わる客室）。 <br/> <br/> この部屋はデラックス プラスよりもはるかに広く、非常に快適なソファが備わっています。' // Custom translation for Net in Japanese
  },
  'If you wish to deposit to the following account, please take a photo of the transfer receipt and contact us by e-mail (info@hotelasiacebu.com). We will then confirm your reservation.<br>': {
    'ja': '下記口座にご入金の場合、振込レシートを写真に撮り、メール（info@hotelasiacebu.com）にてご連絡ください。 その後、ご予約を確認させていただきます。' // Custom translation for Net in Japanese
  },
  'FREE Wifi (fiber optic cable) available anywhere in the hotel': {
    'ja': 'Wifiは全館 無料で使用可能（光ケーブル）' // Custom translation for Net in Japanese
  },
  'Bathroom with hot &amp; cold shower. Bathtubs in some rooms.': {
    'ja': 'バスルームではお湯が使えます' // Custom translation for Net in Japanese
  },
  'Washlet (Toilet with bidet)': {
    'ja': 'ウォッシュレット付トイレ' // Custom translation for Net in Japanese
  },
  'Split type aircon': {
    'ja': 'エアコン(音の静かなタイプです）' // Custom translation for Net in Japanese
  },
  'Hair dryer, refrigerator, safety box': {
    'ja': 'ヘアードライヤー　・冷蔵庫' // Custom translation for Net in Japanese
  },
  'Telephone IDD(International Direct Dialing) and NDD(National Direct Dialing) in each room': {
    'ja': 'セーフティボックス・国内外に直接電話可' // Custom translation for Net in Japanese
  },
  'The Main facilities of Hotel': {
    'ja': 'Hotel Asiaの主な設備' // Custom translation for Net in Japanese
  },
  'Room': {
    'ja': 'ゲストルーム' // Custom translation for Net in Japanese
  },
  'Location': {
    'ja': 'ロケーション' // Custom translation for Net in Japanese
  },
  'Han-nya Japanese Restaurant': {
    'ja': '般若日本食レストラン' // Custom translation for Net in Japanese
  },
  'Gyouza, a Japanese dumpling, is a delicious blend of flavors and textures.': {
    'ja': '.' // Custom translation for Net in Japanese
  },
  'Salmon sashimi is a Japanese dish featuring thin slices of fresh, raw salmon. With its silky texture and rich flavor, it’s often served with soy sauce, wasabi, and pickled ginger.': {
    'ja': '.' // Custom translation for Net in Japanese
  },
  'A Tonkatsu set is a Japanese meal featuring a crispy breaded pork cutlet with rice, miso soup, and shredded cabbage. Served with tangy tonkatsu sauce, its a satisfying and hearty dish.': {
    'ja': '.' // Custom translation for Net in Japanese
  },
  'Japanese fried rice, features vegetables, eggs, and sometimes meat or seafood, seasoned with soy sauce. Its a versatile dish, popular as a side or main course, and a favorite comfort food in Japan.': {
    'ja': '.' // Custom translation for Net in Japanese
  },
  'Chahan and Ramen Soup': {
    'ja': 'チャーハンとラーメンスープ' // Custom translation for Net in Japanese
  },
  'Tonkatsu Set': {
    'ja': 'とんかつセット' // Custom translation for Net in Japanese
  },
  'Gindara Saikyo Yaki': {
    'ja': '銀だら 西京焼き' // Custom translation for Net in Japanese
  },
  'Airport Transfer Rates <br>/ Price is subject to change without prior notice': {
    'ja': '空港送迎料金　 <br>/ Price is subject to change without prior notice' // Custom translation for Net in Japanese
  }
  
  
};
const translationCache = {}; // In-memory cache for storing translations
let cookiesAccepted = getCookie('cookiesAccepted') === 'true';

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

// Show cookie alert if not accepted
if (!cookiesAccepted) {
  document.querySelector('.cookie-alert').classList.add('show');
}

// Handle cookie acceptance
document.querySelector('.accept-cookies').addEventListener('click', () => {
  setCookie('cookiesAccepted', 'true', 365);
  cookiesAccepted = true;
  document.querySelector('.cookie-alert').classList.remove('show');
});

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
  const jpinputNamePronouce = document.getElementById('forJapanese');
  const jp_version = document.getElementById('jp_version');
  const english_version = document.getElementById('english_version');

  if (isTranslationOn) {
    if (englishButton) englishButton.style.display = 'inline-block'; // Offer "Off" button when translation is on
    if (japaneseButton) japaneseButton.style.display = 'none';
    if (english_version) english_version.style.display = 'none';
    console.log('Translation is ON');
  } else {
    if (japaneseButton) japaneseButton.style.display = 'inline-block'; // Offer "On" button when translation is off
    if (englishButton) englishButton.style.display = 'none';
    if (jpinputNamePronouce) jpinputNamePronouce.style.display = 'none';
    if (jp_version) jp_version.style.display = 'none'; // Hide the Japanese version
    console.log('Translation is OFF');
  }
}

// Function to reset elements to original text
function resetToOriginal() {
  const elementsToTranslate = document.querySelectorAll('.translate');

  elementsToTranslate.forEach(element => {
    const originalHTML = element.getAttribute('data-original-html') || element.innerHTML.trim(); // Get original HTML
    element.innerHTML = originalHTML; // Reset to original
    $(".preloader").fadeIn("slow");
  });
  $(".preloader").fadeOut("slow");
  toggleLanguageButtons(); // Update button visibility
}

// Function to translate specific elements on the page with proper synchronization
async function translatePage(targetLanguage) {
  $(".preloader").fadeIn("slow");
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
      // Check if translation exists in cache
      const cachedTranslation = cookiesAccepted ? getCookie(originalHTML + '_' + targetLanguage) : null;
      if (cachedTranslation) {
        translatedHTML = cachedTranslation;
      } else {
        // If no custom translation and not in cache, perform the translation
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
                if (cookiesAccepted) {
                  setCookie(sentence.trim() + '_' + targetLanguage, translatedSentence, 30); // Cache for 30 days
                }
              }

              translatedHTML += `${translatedSentence}  `;
            }
          }
        }

        if (cookiesAccepted) {
          setCookie(originalHTML + '_' + targetLanguage, translatedHTML.trim(), 30); // Cache for 30 days
        }
      }
    }

    element.innerHTML = translatedHTML.trim(); // Translate and update
  }

  manualAdjustments(targetLanguage); // Perform manual adjustments after translation
  $(".preloader").fadeOut("slow");
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
