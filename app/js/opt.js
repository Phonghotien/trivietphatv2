const inputs = document.querySelectorAll('.otp-input');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && !e.target.value) {
            inputs[index - 1].focus();
        }
    });
});

document.addEventListener('paste', (e) => {
    const pastedData = e.clipboardData.getData('text').split('');
    if (pastedData.length === inputs.length) {
        inputs.forEach((input, index) => {
            input.value = pastedData[index] || '';
        });
    }
});