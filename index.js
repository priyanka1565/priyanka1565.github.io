const toggle = document.querySelector(".mobile-menu")
const header = document.querySelector(".navbar")

const  toggleleNavebar = () =>{
    header.classList.toggle("active")
}
toggle.addEventListener("click", ()=> {
    toggleleNavebar()
}
)

    // GitHubCalendar(".calendar", "priyanka1565");
    // GitHubCalendar(".calendar", "priyanka1565", { responsive: true });

    function downloadresume(){
        window.open(
          "https://drive.google.com/file/d/13udb-5mGQFagtdgAykN53TY7a-OqrvOB/view?usp=share_link",
          "_blank"
        );

    }
    // document.querySelector(".mobile-menu").addEventListener("click",()=>{
    //     document.querySelector(".mobile-menu").setAttribute("class","show")
    // })