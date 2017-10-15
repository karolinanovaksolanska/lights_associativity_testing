const light = require("./light");

function test_associative() {
    const tab = {
        'a': {'a': 'a', 'b': 'a', 'c': 'a'},
        'b': {'a': 'b', 'b': 'b', 'c': 'b'},
        'c': {'a': 'c', 'b': 'c', 'c': 'c'}
    }
    return light.is_associative(tab)
}

function test_not_associative() {
    const tab = {
        'a': {'a': 'a', 'b': 'b', 'c': 'c'},
        'b': {'a': 'c', 'b': 'a', 'c': 'b'},
        'c': {'a': 'b', 'b': 'c', 'c': 'a'}
    }
    return light.is_associative(tab)
}

function school_data() {
    const tab = {
        'a': {'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd'},
        'b': {'a': 'b', 'b': 'a', 'c': 'd', 'd': 'c'},
        'c': {'a': 'c', 'b': 'd', 'c': 'a', 'd': 'b'},
        'd': {'a': 'd', 'b': 'c', 'c': 'b', 'd': 'a'}
    }
    return light.is_associative(tab)
}

function real_data2() {
    const tab = {
        'a': {'a': 'e', 'b': 'd', 'c': 'b', 'd': 'a', 'e': 'c'},
        'b': {'a': 'd', 'b': 'c', 'c': 'e', 'd': 'b', 'e': 'a'},
        'c': {'a': 'b', 'b': 'e', 'c': 'a', 'd': 'c', 'e': 'd'},
        'd': {'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e'},
        'e': {'a': 'c', 'b': 'a', 'c': 'd', 'd': 'e', 'e': 'b'}
    }
    return light.is_associative(tab)
}

function test_non_associative2() {
    const tab = {
        'a': {'a': 'b', 'b': 'a', 'c': 'c'},
        'b': {'a': 'a', 'b': 'c', 'c': 'b'},
        'c': {'a': 'c', 'b': 'b', 'c': 'a'}
    }
    return light.is_associative(tab)
}

console.log("1. is associative: " + test_associative())
console.log("2. is associative: " + test_not_associative())
console.log("3. is associative: " + school_data())
console.log("4. is associative: " + real_data2())
console.log("4. is associative: " + test_non_associative2())