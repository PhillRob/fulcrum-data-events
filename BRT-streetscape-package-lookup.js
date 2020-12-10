arr = [
    {
        "cbus_id": "KAA",
        "package": "Package 3"
    },
    {
        "cbus_id": "KAW",
        "package": "Package 3"
    },
    {
        "cbus_id": "IAS",
        "package": "Package 3"
    },
    {
        "cbus_id": "KHJ",
        "package": "Package 3"
    },
    {
        "cbus_id": "SD",
        "package": "Package 2"
    },
    {
        "cbus_id": "AT",
        "package": "Package 2"
    },
    {
        "cbus_id": "HMZ",
        "package": "Package 1"
    },
    {
        "cbus_id": "DIR",
        "package": "Package 1"
    },
    {
        "cbus_id": "AMR",
        "package": "Package 1"
    },
];

function contains(arr, key, val) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i][key] === val) return arr[i]["package"];
    }
    return false;
}

var id = CHOICEVALUE($road)

var result = contains(arr, "cbus_id", id.toString())

SETRESULT(result);
