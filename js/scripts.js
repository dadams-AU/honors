let deadline = new Date("2023-10-31");  // set your deadline here
let now = new Date();

if (now >= deadline) {
  document.getElementById("announcement-banner").style.display = "none";
}
