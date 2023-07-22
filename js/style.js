const check = document.querySelector("#myCheck")
// console.log(check)

check.addEventListener("click", () => {
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.container').classList.toggle('active');
    document.querySelector(".contain").classList.toggle('active');
    document.querySelector(".content").classList.toggle('active');
    // document.querySelector(".checkPlace").classList.toggle('active');

})