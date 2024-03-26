try {
    const undefinedObject = undefined;
    console.log(undefinedObject.property);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("TypeError occurred: ", error.message);
    } else {
        console.log("An unexpected error occurred: ", error);
    }
}
