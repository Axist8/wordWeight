const linearScale = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8,
    i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15,
    p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22,
    w: 23, x: 24, y: 25, z: 26
}

const freqScale = {
    a: 3, b: 20, c: 12, d: 10, e: 1, f: 16, g: 17, h: 8,
    i: 5, j: 23, k: 22, l: 11, m: 14, n: 6, o: 4,
    p: 19, q: 25, r: 9, s: 7, t: 2, u: 13, v: 21,
    w: 15, x: 24, y: 18, z: 26
}

document.getElementById('weighWord').addEventListener('click', wordScale);
document.getElementById('theWord').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('weighWord').click();
    }
});

function wordScale(e) {
    const input = document.getElementById('theWord').value.toLowerCase();
    if (!input) {
        document.getElementById('output').innerHTML = "Input a word.";
        return;
    }
    const arr = input.split('');
    let linearWeight = 0;
    let freqWeight = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            document.getElementById('output').innerHTML = "One word only. Spaces are not allowed.";
            return;
        }
        linearWeight = linearWeight + linearScale[arr[i]];
        freqWeight = freqWeight + freqScale[arr[i]];
    }
    document.getElementById('output').innerHTML = `Linear Weight: ${linearWeight}
    Weight by Frequency: ${freqWeight}`;
}