const leerdoelButton = document.querySelector(".instructieGrid");
const leerdoelList = document.querySelector("#leerdoelTargets");

const canvas = document.querySelector(".canvas");
const ulListItems = document.querySelectorAll("#leerdoelen li");

// deze functie spawned continu de targets op random plekken.
leerdoelButton.addEventListener(
  "click",
  () => {
    ulListItems.forEach((item) => {
      // stukje AI in de functie, kwam zelf niet uit op position absolute
      // Prompt: "How to keep the list items within the boundary of the container?"
      item.style.position = "absolute";

      const randomTop = Math.random() * 80;
      const randomLeft = Math.random() * 80;

      item.style.top = randomTop + "%";
      item.style.left = randomLeft + "%";
    });

    leerdoelList.classList.add("leerdoelAnimation");

    // stukje AI in de functie, kwam zelf met setTimeout maar dat werkte dus niet, AI raadde setinterval aan. Prompt: "How to make the function run infinitely?"
    setInterval(() => {
      ulListItems.forEach((item) => {
        item.style.position = "absolute";

        const randomTop = Math.random() * 80;
        const randomLeft = Math.random() * 80;

        item.style.top = randomTop + "%";
        item.style.left = randomLeft + "%";
      });
    }, 2000);
  },

  // https://www.educative.io/answers/how-to-ensure-an-event-listener-is-only-fired-once-in-javascript
  { once: true },
);
