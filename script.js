function getActivity() {
    fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(answer => {
        console.log(answer);
        let result = document.querySelector(".result");
        result.innerHTML = `${answer.activity}`;
    });
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", getActivity)