const screen = document.getElementById('screen');

// স্ক্রিনে সংখ্যা বা চিহ্ন বসানো
function press(val) {
    screen.value += val;
}

// স্ক্রিন পুরো খালি করা (Clear)
function clearScreen() {
    screen.value = '';
}

// একটি সংখ্যা কাটা (Backspace)
function backspace() {
    screen.value = screen.value.slice(0, -1);
}

// হিসাব নিকাশ করা
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}