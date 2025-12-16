onload = () =>{
    document.body.classList.remove("container");
    /* ===============================
   TYPEWRITER TEXT
================================ */
const text = 
`People only admire the results, never the pain, sacrifices,
and tears hidden in the process.

Good morning, everyone. — Lilies`;

const target = document.getElementById("quoteText");
let index = 0;

/* delay supaya bunga selesai mekar dulu */
setTimeout(() => {
  const typing = setInterval(() => {
    target.textContent += text[index];
    index++;

    if (index >= text.length) {
      clearInterval(typing);
    }
  }, 40); // kecepatan ketik
}, 5500);

};