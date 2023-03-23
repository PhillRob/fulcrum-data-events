arr = [
    {
        "shrubgenus": "Plumeria",
        "habit": "Shrub - شجيرة"
    },
    {
        "shrubgenus": "Cassia",
        "habit": "Shrub - شجيرة"
    },
    {
        "shrubgenus": "Hibiscus",
        "habit": "Shrub - شجيرة"
    },
    {
        "shrubgenus": "Thevetia",
        "habit": "Shrub - شجيرة"
    },
    {
        "shrubgenus": "Bougainvillea",
        "habit": "Shrub - شجيرة"
    },
    {
        "shrubgenus": "Dodonaea",
        "habit": "Shrub - شجيرة"
    },
    {
        "shrubgenus": "Chamaerops",
        "habit": "Shrub - شجيرة"
    },
     {
        "shrubgenus": "Lantana",
        "habit": "Shrub - شجيرة"
    },
    {
        "shrubgenus": "Carissa",
        "habit": "Shrub - شجيرة"
    },
    {
        "shrubgenus": "Jatropha",
        "habit": "Shrub - شجيرة"
    },
    {
        "shrubgenus": "Nerium",
        "habit": "Shrub - شجيرة"
    },
    {    "shrubgenus": "Tecoma",
        "habit": "Shrub - شجيرة"
    },
    {
        "shrubgenus": "Lantania",
        "habit": "Shrub - شجيرة"
    },
    {    "shrubgenus": "Vitex",
        "habit": "Shrub - شجيرة"
    }
];


function contains(arr, key, val) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i][key] === val) return arr[i]["habit"];
    }
    return "Tree - شجرة";
}

var id = $species['choice_values'][0].toString().split(" ")[0]
var result = contains(arr, "shrubgenus", id.toString())

SETRESULT(result);
// Tree - شجرة
// Shrub - شجيرة
// Groundcover - مغطي تربة
