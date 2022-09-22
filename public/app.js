document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();

    const db = firebase.firestore();

    const myPost = db.collection('stories');
   
    const inputTextField = document.querySelector("#textbox");
    const saveButton = document.querySelector("#submit");

    saveButton.addEventListener("click", function () {
        const textToSave = inputTextField.value;
        console.log("I am going to save " + textToSave + "to Firestore");
        myPost.add({
            stories: textToSave,
        }).then(function () {
            var r = confirm("Thank You for answering these\nexciting and personal questions!");
            if (r == true) {
                window.alert("This post was successfully shared!");
                document.location.href = "heartlanguage.html";
            } else {
                console.log("error");
            }
            console.log("status saved");
        }).catch(function (error) {
            console.log("got an error:", error);
        });

    })
});