function greet (name){
    if (name == null) {
        return "Hello there!";
    }

    if (typeof(name) == "string") {
        if (name == name.toUpperCase()) {
            return "HELLO " + name + "!";
        }

        else {
            return "Hello, " + name;
        }
    }

    else {
        let outputString = "Hello,";

        for (let i=0; i<name.length; i++) {
            outputString += name[i];
            outputString += ",";
        }

        return outputString.slice(0, outputString.length-1);
    }
}