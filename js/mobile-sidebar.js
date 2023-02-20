let style = "flex";

let display = "none";
function render(container) {
  container.innerHTML = "";
  let html = "";
  if (display === "none") {
    // document.getElementById("icon").src = "../img/close.png";
    html = `<div class="flex flex-row justify-between items-start md:hidden fixed top-14 bg-transparent h-5/6 w-full z-20">
                 <div class="bg-brand w-3/5 h-screen flex flex-col">
                 <img src="../img/casio.svg" class="w-44 mx-4 mt-1 mb-3" alt="">
                     <a href="./home.html">
                         <div class="h-14 bg-brand shadow-sm mb-1  flex flex-row px-5 justify-start items-center text-white">
                             <img src="../img/home.png" alt="" class="w-5 h-5" srcset="">
                             <p class="px-2">Home</p>
                         </div>
                     </a>
                     <a href="./profile.html">
                         <div class="h-14 bg-brand shadow-sm mb-1  flex flex-row px-5 justify-start items-center text-white">
                             <img src="../img/profile.png" alt="" class="w-5 h-5" srcset="">
                             <p class="px-2">Profile</p>
                         </div>
                     </a>
                     <a href="./fund.html">
                         <div class="h-14 bg-brand shadow-sm mb-1  flex flex-row px-5 justify-start items-center text-white">
                             <img src="../img/icons8-wallet-50.png" alt="" class="w-5 h-5" srcset="">
                             <p class="px-2">Fund Wallet</p>
                         </div>
                     </a>
                     </a>
                     <a href="./uncoming-draw.html">
                         <div class="h-14 bg-brand shadow-sm mb-1  flex flex-row px-5 justify-start items-center text-white">
                             <img src="../img/draw.png" alt="" class="w-5 h-5" srcset="">
                             <p class="px-2">Uncoming Draw</p>
                         </div>
                     </a>
                     <a href="./withdraw.html">
                         <div class="h-14 bg-brand shadow-sm mb-1  flex flex-row px-5 justify-start items-center text-white">
                             <i class="fa-sharp fa-solid fa-money-bill-transfer"></i>
                             <p class="px-2">Withdraw Funds</p>
                         </div>
                     </a>
                     <a href="./transactions.html">
                         <div class="h-14 bg-brand shadow-sm mb-1  flex flex-row px-5 justify-start items-center text-white">
                             <img src="../img/files.png" alt="" class="w-5 h-5" srcset="">
                             <p class="px-2">Transactions History</p>
                         </div>
                     </a>
                     <a href="./topwinners.html">
                         <div class="h-14 bg-brand shadow-sm mb-1  flex flex-row px-5 justify-start items-center text-white">
                             <img src="../img/barge.png" alt="" class="w-5 h-5" srcset="">
                             <p class="px-2">Top Winners</p>
                         </div>
                     </a>
                     <a href="./settings.html">
                         <div class="h-14 bg-brand shadow-sm mb-1  flex flex-row px-5 justify-start items-center text-white">
                             <img src="../img/setting2.png" alt="" class="w-5 h-5" srcset="">
                             <p class="px-2">Settings</p>
                         </div>
                     </a>
                     <a href="./signout.html">
                         <div class="h-14 bg-brand shadow-sm mb-1  flex flex-row px-5 justify-start items-center text-white">
                             <img src="../img/logout.png" alt="" class="w-5 h-5" srcset="">
                             <p class="px-2">Sign Out</p>
                         </div>
                     </a>
                    
                     <div class="flex items-center gap-4 mx-4 mt-8">
                        <img src="../img/user.png" class="w-12 h-12" alt="" srcset="">
                        <div >
                            <h4 class="text-sm text-white">John Doe</h4>
                            <p class="text-xs text-gray-200">example@email.com</p>
                        </div>
                    </div>
         </div>
         </div>`;
    display = "true";
  } else {
    html = "";
    // document.getElementById("icon").src = "../img/hambergermenu.png";
    display = "none";
  }
  container.innerHTML += html;
}
