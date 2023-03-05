"use strict";

document.addEventListener('DOMContentLoaded', function () {
    var loginWithDiscordBtn = document.getElementById("login-with-discord");

    if (loginWithDiscordBtn) {
        var form = loginWithDiscordBtn.closest("form");
        loginWithDiscordBtn.addEventListener('click', function (e) {
            e.preventDefault();
            var loginUrl = loginWithDiscordBtn.getAttribute('href');

            // Retrieve an array of form inputs within the form
            var formInputs = form.querySelectorAll("[name]:not([type=submit])");
            var firstInput = true;



            var formInputIdx;
            for (formInputIdx = 0; formInputIdx < formInputs.length; formInputIdx++) {
                var formInput = formInputs[formInputIdx];
                var formInputName = formInput.getAttribute('name');
                var formInputValue = formInput.value;

                if (formInputName === 'variables[discord_id]' || !formInputValue) {
                    // Skip if this is the discord_tag variable or there is no value
                    continue;
                }

                // Append this URL encoded input value to the return URL
                loginUrl += encodeURIComponent((firstInput ? "?" : "&") + formInputName + "=" + formInputValue);
                firstInput = false;
            }

            // Redirect user to the login URL, containing the newly created return URL
            window.location.href = loginUrl;
        });
    }
});