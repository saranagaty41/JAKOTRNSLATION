function calculatePrice() {
    var wordCount = parseInt(document.getElementById("wordCount").value);
    var fromLanguage = document.getElementById("fromLanguage").value;
    var toLanguage = document.getElementById("toLanguage").value;
    var pricePerWord;

    // حساب السعر بناء على اللغة المصدر واللغة الهدف
    if ((fromLanguage === "arabic" && (toLanguage === "english" || toLanguage === "french")) ||
    ((fromLanguage === "english" || fromLanguage === "french") && toLanguage === "arabic")) {
      pricePerWord = 0.04;}
    else if ((fromLanguage === "arabic" && (toLanguage === "spanish" || toLanguage === "italian" || 
      toLanguage === "german" || toLanguage === "turkish")) ||
      ((fromLanguage === "spanish" || fromLanguage === "italian" || 
      fromLanguage === "german" || fromLanguage === "turkish") && toLanguage === "arabic")) {
    pricePerWord = 0.08;
    } else if ((fromLanguage === "arabic" && (toLanguage === "russian" || toLanguage === "chinese" || 
      toLanguage === "urdu")) ||
      ((fromLanguage === "russian" || fromLanguage === "chinese" || 
      fromLanguage === "urdu") && toLanguage === "arabic")) {
    pricePerWord = 0.09;
    }  
        else {
            // إذا كانت اللغة المصدر والهدف لا تنتمي لأي حالة محددة
            pricePerWord = 0; // يمكنك تعديل هذه القيمة حسب متطلباتك
        }
        var totalPrice = wordCount * pricePerWord;
        document.getElementById("price").innerText = "Total : " + totalPrice.toFixed(2) + " $";
    }
    