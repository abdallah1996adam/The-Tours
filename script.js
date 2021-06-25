Array.from(
  document.querySelectorAll(".navigation-btn").forEach((btn) => {
    btn.onclick = () => {
      btn.parentElement.parentElement.classList.toggle("change");
    };
  })
);
