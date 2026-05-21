const videoGrid = [
  ["Go Modules Explained (Without the Headaches)", "CSS Flexbox: The 10-Minute Masterclass", "Vanilla JS vs. Frameworks: What Should You Learn in 2026?"],
  ["API Integration for Absolute Beginners: A Step-by-Step Guide", "What Actually Happens If You Fall Into a Black Hole?", "Quantum Computing Explained Simply (With Legos)"],
  ["The Secret Life of Cells: How Microscopic Engines Keep You Alive", "Why Does Time Slow Down in Space? Time Dilation Explained", "How a Single Letter Changed the Course of World War II"],
  ["The Rise and Fall of the Library of Alexandria", "5 Ancient Tech Inventions That Still Baffle Modern Engineers", "The Real History Behind the Silk Road Trade Network"],
  ["Why Math is Secretly a Universal Language", "The Monty Hall Problem: The Math Riddle That Fools Ph.Ds", "How Chaos Theory Rules Our Everyday Lives"],
  ["How to Build a Second Brain: The Ultimate Digital Note-Taking Guide", "The Feynman Technique: How to Learn Anything 10x Faster", "Why Active Recall Beats Rereading Your Textbook Every Single Time"]
];
let c = 1;
for (let i in videoGrid){
    text = "<tr>"
    for (let j in videoGrid[i]){
        text += `<td align="center" class="video-wrapper"><img src="../assets/videoImage/${c++}.png" loading="lazy" class="video-icon"/><p class="video">${videoGrid[i][j]}</p></td>`
    }
    text += "</tr>"
    document.getElementById("videos").innerHTML += text
}

function searchVideos() {
    const query = document.getElementById("search").value.toLowerCase();
    const cells = document.querySelectorAll("#videos td.video-wrapper");
    let firstMatch = null;

    cells.forEach(cell => {
        const title = cell.querySelector(".video").innerText.toLowerCase();
        
        if (title.includes(query) && query !== "") {
            cell.style.backgroundColor = "#fff9c4";
            cell.style.opacity = "1";
            
            if (!firstMatch) {
                firstMatch = cell;
            }
        } else {
            cell.style.backgroundColor = "";
            
            if (query !== "") {
                cell.style.opacity = "0.4";
            } else {
                cell.style.opacity = "1";
            }
        }
    });

    if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}