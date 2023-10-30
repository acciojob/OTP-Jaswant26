//your JS code here. If required.
function moveToNext(input, nextInputId) {
            if (input.value.length === 1) {
                document.getElementById(nextInputId).focus();
            } else if (input.value.length === 0 && input.previousElementSibling) {
                input.previousElementSibling.focus();
            }
        }