// LONGTEXT TOGGLE
const longtext = document.querySelector(".longtext-text");
const longtextToggleBtn = document.querySelector(".longtext-toggle");
let longtextIsOpen = false;

function toggleLongtext() {
    if(longtextIsOpen){
        // open the text area
        longtext.style.maxHeight = "initial";
        longtext.style.overflow = "initial";
        longtextToggleBtn.innerHTML = "Devamını Gizle";
        longtextIsOpen = false;
    }
    else {
        // close the text area
        longtext.style.maxHeight = "90px";
        longtext.style.overflow = "hidden";
        longtextToggleBtn.innerHTML = "Devamını Göster";
        longtextIsOpen = true;
    }
}

longtextToggleBtn.addEventListener("click", toggleLongtext);
toggleLongtext();

// campaigns
const campaignListItems = document.querySelectorAll(".campaign-list ul li");
const campaignList = document.querySelector(".campaign-list ul");
const campaigns = document.querySelectorAll(".campaign");

campaignList.addEventListener("click", (e) => {
    const name = e.target.innerHTML;

    let index = 0;
    for(let i = 0; i < campaignListItems.length; i++)
    {
        if(campaignListItems[i].innerHTML === name)
        {
            index = i;
            break;
        }
    }

    try {
        document.querySelector(".active-campaign").classList.remove("active-campaign");
        document.querySelector(".campaign-list-active").classList.remove("campaign-list-active");
    } catch (ignore) {
        
    }

    campaigns[index].classList.add("active-campaign");
    e.target.classList.add("campaign-list-active");

})


/*
$("#btn").click(function(){
    $.get("http://localhost:3000/test", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});
*/

/**
 * TODO: add items for:
 * süper fiyat süper teklif
 * popüler ürünler
 * herkes bu ürünlerin peşinde
 * giyim
 * popülerlere özel indirimler
 * günlük ihtiyaçlarda topseller
 */