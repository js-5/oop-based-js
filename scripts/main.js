document.addEventListener('alpine:init', () => {
    Alpine.data('passwordValidation', () => ({
      password: '',
      confirmPassword: '',
      isInvalid: false,
      checkPasswords() {
        this.isInvalid = this.password !== this.confirmPassword;
      }
    }))
  })
  document.addEventListener('alpine:init', () => {
    Alpine.data('emailValidation', () => ({
        email: '',
        isInvalid: false,

        validateEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.isInvalid = !regex.test(this.email);
        }
    }));
});