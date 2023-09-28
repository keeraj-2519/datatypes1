        var myString = "I am a web Developer";
        var myNumber = 42;
        var myBoolean = true;
        var myArray = [1, 2, 3, 4, 5];
        var myObject = { name: "Nikki", age: 30 };
        var myNull = null;
        var myUndefined = undefined;

        document.getElementById("stringOutput").textContent += myString;
        document.getElementById("numberOutput").textContent += myNumber;
        document.getElementById("booleanOutput").textContent += myBoolean;
        document.getElementById("arrayOutput").textContent += JSON.stringify(myArray);
        document.getElementById("objectOutput").textContent += JSON.stringify(myObject);
        document.getElementById("nullOutput").textContent += myNull;
        document.getElementById("undefinedOutput").textContent += myUndefined;
