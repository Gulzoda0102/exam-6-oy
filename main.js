const musicForm = document.querySelector("#form");
const musicInput = document.querySelector("#input");
const musicSelect = document.querySelector("#select");
const musicOta = document.querySelector("#musicWrapper");
const musicAlfabit = document.querySelector("#select");

console.log(musicForm, musicSelect, musicOta, musicInput);

function renderMusic(qoshiq){
    musicOta.innerHTML = "";
    if(musicOta.length === 0){
        musicOta.innerHTML = `<p class="bg-red-300">Bunday fil topilmadi!</p>`;
    }else{
        qoshiq.slice(0, 40).forEach(objectlar => {
            const newItem = document.createElement("li");
            newItem.className = "w-[400px] bg-[#fff] rounded flex flex-col text-center p-[20px] items-center gap-[20px]";
            newItem.innerHTML = `
            <img src="./images/pink venom.webp"  alt="${objectlar.Title}">
            <h2>${objectlar.Title}</h2>
            <div>
            <span>${objectlar.album}</span> ||
            <span>${objectlar.release_year}</span> ||
            <span>${objectlar.duration} min </span>
            </div>
            <p>${objectlar.genre}</p>
            
            <button class="bg-[#ff0000] text-[#fff] rounded px-[20px] py-[10px]">Add to Library</button>
            `;
            musicOta.appendChild(newItem);
            
    });
    }
}
renderMusic(music);

musicForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputQiymati = musicInput.value.toLowerCase().trim();

    const filterlanganMusiqalar = music.filter(music =>
        music.Title && typeof music.Title === "string" && music.Title.toLowerCase().includes(inputQiymati)
    );

    renderMusic(filterlanganMusiqalar);
});

musicAlfabit.addEventListener("change", (e)=> {
    const selectedSort = e.target.value;

    const validMusic = music.filter(music => music.Title && typeof music.Title === "string");

    if(selectedSort === "A-Z"){
        const sortedMusic = [...validMusic].sort((a, b)=> a.Title.localeCompare(b.Title));
        renderMusic(sortedMusic);
    }else if (selectedSort === "Z-A"){
        const sortedMusic = [...validMusic].sort((a, b)=> b.Title.localeCompare(a.Title));
        renderMusic(sortedMusic);
    }
})