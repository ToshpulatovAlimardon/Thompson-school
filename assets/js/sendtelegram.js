//bot token
var telegram_bot_id = "6432131217:AAHXQlMnOmREGkNwxYqaJ0uVbESAonVLd70"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 1267012660; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message, tel, subject;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    tel = document.getElementById("tel").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nTelefon: " + tel + "\nFan: " + subject + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    return false;
};
