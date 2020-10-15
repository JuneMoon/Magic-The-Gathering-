const validateForm = () => {
    const fname = document.getElementById("firstName").value;

        if (fname == "") {
            alert("Name cannot be blank");
            submitOK = "false";   
        }

        if (fname.length < 3) {
            alert("The name must have more than 3 characters");
            submitOK = "false";
        }

        if (!fname.match(/^[A-Z]{1}([A-Z]|[a-z]|[0-9]){4,30}$/)) {
            alert("First letter must be capital");
            submitOK = "false";
        }

        if (!fname == "" && fname.length > 3 ) {
            window.open("cards.html");
        }

}

validateForm();