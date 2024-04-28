// Function to print tips based on the result class
function printTips(resultClass) {
    switch(resultClass) {
        case "Melanocytic Nevus":
            console.log("Tips for Melanocytic Nevus:");
            console.log("- Monitor changes in size, shape, and color.");
            console.log("- Protect skin from UV exposure to prevent irritation and potential transformation into melanoma.");
            console.log("- Regularly examine your skin, and consult a dermatologist if you notice any changes.");
            break;
        case "Actinic Keratosis":
            console.log("Tips for Actinic Keratosis:");
            console.log("- Protect your skin from the sun with sunscreen and protective clothing.");
            console.log("- Regularly examine your skin for new growths or changes in existing ones.");
            console.log("- Seek treatment for actinic keratosis to prevent it from developing into skin cancer.");
            break;
        case "Basal Cell Carcinoma":
            console.log("Tips for Basal Cell Carcinoma:");
            console.log("- Protect skin from UV radiation.");
            console.log("- Regularly examine your skin for any new growths, lesions, or changes in existing moles or spots.");
            console.log("- Consult a dermatologist promptly if you notice any suspicious changes.");
            break;
        case "Melanoma":
            console.log("Tips for Melanoma:");
            console.log("- Perform regular self-examinations of your skin.");
            console.log("- Protect your skin from UV radiation by wearing sunscreen, protective clothing, and avoiding sun exposure during peak hours.");
            console.log("- Be aware of risk factors such as family history, fair skin, and excessive UV exposure.");
            break;
        case "Dermatofibroma":
            console.log("Tips for Dermatofibroma:");
            console.log("- Dermatofibromas are usually harmless, but if they cause discomfort or change in appearance, consult a dermatologist.");
            console.log("- Avoid picking or scratching at dermatofibromas to prevent irritation and potential infection.");
            break;
        case "Squamous Cell Carcinoma":
            console.log("Tips for Squamous Cell Carcinoma:");
            console.log("- Protect your skin from sun exposure, especially during peak hours.");
            console.log("- Perform regular self-examinations of your skin to detect any new growths or changes in existing ones.");
            console.log("- Consult a dermatologist if you notice any suspicious lesions or changes in your skin.");
            break;
        case "Vascular Lesion":
            console.log("Tips for Vascular Lesion:");
            console.log("- Seek medical evaluation for any unusual or persistent skin discoloration or growths.");
            console.log("- Treatment options may include laser therapy, medication, or surgical removal, depending on the type and severity of the vascular lesion.");
            break;
        case "Benign Keratosis":
            console.log("Tips for Benign Keratosis:");
            console.log("- Protect your skin from excessive sun exposure.");
            console.log("- Regularly monitor your skin for changes in appearance or new growths.");
            console.log("- Consult a dermatologist for proper diagnosis and management if you notice any concerning changes.");
            break;
        default:
            console.log("Invalid result class.");
    }
}

// Assuming the resultClass variable holds the class of the result (e.g., "Melanocytic Nevus", "Actinic Keratosis", etc.)
let resultClass = "Melanocytic Nevus"; // Example result class, replace this with your actual result

// Call the function to print tips based on the result class
printTips(resultClass);