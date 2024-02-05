let deadline = new Date("2024-03-22");  // set your deadline here
let now = new Date();

if (now >= deadline) {
  document.getElementById("announcement-banner").style.display = "none";
}
