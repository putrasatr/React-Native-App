export default function passwordValidator(password) {
    if (!password) {
        return "Kata sandi tidak boleh kosong.";
    }
    if (password.length < 5) {
        return 'Kata sandi harus mengandung minimal 5 karakter.';
    }
    return '';
}