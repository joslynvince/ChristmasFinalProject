function setActiveTab(button) {
    const tabs = document.querySelectorAll(".song-tabs button");
    tabs.forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
}

function showAllSongs() {
    console.log("Showing ALL songs");

    const classic = document.querySelectorAll(".song-card-classic");
    const cover = document.querySelectorAll(".song-card-cover");

    for (let i = 0; i < classic.length; i++) {
        classic[i].style.display = "block";
    }

    for (let i = 0; i < cover.length; i++) {
        cover[i].style.display = "block";
    }
}

function showClassic() {
    console.log("Showing only classic songs");

    const classic = document.querySelectorAll(".song-card-classic");
    const cover = document.querySelectorAll(".song-card-cover");

    for (let i = 0; i < classic.length; i++) {
        classic[i].style.display = "block";
    }

    for (let i = 0; i < cover.length; i++) {
        cover[i].style.display = "none";
    }
}

function showCovers() {
    console.log("Showing only cover songs");

    const classic = document.querySelectorAll(".song-card-classic");
    const cover = document.querySelectorAll(".song-card-cover");

    for (let i = 0; i < classic.length; i++) {
        classic[i].style.display = "none";
    }
    for (let i = 0; i < cover.length; i++) {
        cover[i].style.display = "block";
    }
}
