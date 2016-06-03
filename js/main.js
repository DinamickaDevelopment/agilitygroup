$("#contact").on("submit", sendmail);
function sendmail(event) {

    event.preventDefault();

    if (fieldValid() == "valid") {
        $('.loader').fadeIn(200);
        var MailData = JSON.stringify({
            "key": "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",
            "subject": "Contact from Agilite Group",
            "emailTo": "ross@agilite.partners",
            "emailFrom": $("#email").val(),
            "html": '<html><body><h1 style=\"width:100%;text-align:center\">You have recive email from Agility Group</h1><table border=\"solid\" style=\"margin:0 auto;\"><tr><td>Name</td><td>' + $("#name").val() + '</td></tr><tr><td>Email</td><td>' + $("#email").val() + '</td></tr><tr><td>Subject</td><td>' + $("#subject").val() + '</td></tr></table></html>'
        });
        $.ajax({
            type: "POST",
            url: "http://dinamickamail.azurewebsites.net/mail.php",
            dataType: 'json',
            cache: false,
            data: { "req": MailData },
            error: function (data) {
                $(".error").html("Thanks for email");
                $('.loader').fadeOut(200);
                $(".error").fadeIn(300, function () {
                    setTimeout(function () {
                        $(".error").fadeOut(300);
                    }, 3000);
                })
            }
        })
    } else {
        $(".error").html(fieldValid);
        $(".error").fadeIn(300, function () {
            setTimeout(function () {
                $(".error").fadeOut(300);
            }, 3000);
        })
    }
}
function fieldValid() {
    if ($("#name").val() == '') {
        return "Please enter your name"
    }
    if ($("#email").val() == '') {
        return "Please enter your email"
    }
    if ($("#subject").val() == '') {
        return "Please enter subject"
    }
    return "valid"
}
