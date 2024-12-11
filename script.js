document.getElementById('generateButton').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeLower = document.getElementById('includeLower').checked;
    const includeUpper = document.getElementById('includeUpper').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecial = document.getElementById('includeSpecial').checked;

    console.log(`Length: ${length}`);
    console.log(`Include Lowercase: ${includeLower}`);
    console.log(`Include Uppercase: ${includeUpper}`);
    console.log(`Include Numbers: ${includeNumbers}`);
    console.log(`Include Special Characters: ${includeSpecial}`);

    const password = generatePassword(length, includeLower, includeUpper, includeNumbers, includeSpecial);
    document.getElementById('password').value = password;
    console.log(`Generated Password: ${password}`);
});

function generatePassword(length, includeLower, includeUpper, includeNumbers, includeSpecial) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()";

    let charset = '';
    if (includeLower) charset += lowerChars;
    if (includeUpper) charset += upperChars;
    if (includeNumbers) charset += numberChars;
    if (includeSpecial) charset += specialChars;

    console.log(`Charset: ${charset}`);

    if (length < 12 || length > 128) {
        console.error('La longeur du mot de passe doit se situer entre 12 et 128 caracteres.');
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}




