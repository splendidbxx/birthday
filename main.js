const logoAnimation = () => {
  const tl = gsap.timeline();
  tl.from(".lettering-image", {
    opacity: 0,
    y: 30,
  }).to(".lettering-image", {
    yoyo: true,
    y: 10,
    repeat: -1,
    duration: 0.7,
    ease: "linear",
  });
};

logoAnimation();

const containerAnimation = () => {
  gsap.from(".container", {
    opacity: 0,
    delay: 0.4,
  });
};

containerAnimation();

const splitTextToSpans = (selector) => {
  const element = document.querySelector(selector);
  const text = element.innerHTML;

  const lines = text.split(/<br\s*\/?>/);
  const wrappedLines = lines
    .map((line) => {
      return [...line]
        .map((char) => {
          if (char === " ") return `<span>&nbsp;</span>`;
          return `<span>${char}</span>`;
        })
        .join("");
    })
    .join("<br>");

  element.innerHTML = wrappedLines;
};

const animateSoonjaText = (selector) => {
  const spans = document.querySelectorAll(`${selector} span`);
  const tl = gsap.timeline();
  tl.fromTo(
    spans,
    { visibility: "hidden" },
    {
      y: 0,
      visibility: "visible",
      duration: 0.01,
      stagger: 0.05,
      delay: 0.8,
      ease: "linear",
    }
  ).fromTo(
    ".button-container button",
    {
      opacity: 0,
    },
    { opacity: 1, y: 0, stagger: 0.2 }
  );
};

splitTextToSpans(".soonja-text");
animateSoonjaText(".soonja-text");

// 로판 모달
const rfModal = document.querySelector("#rfModal");
const rfMusic = document.querySelector(".rf-music");
// 로판 모달 열기
const handleOpenRfModal = () => {
  rfModal.classList.add("open");
  gsap.to(rfModal, {
    opacity: 1,
    duration: 1,
  });

  gsap.to(".rf-invitation", {
    repeat: -1,
    y: 20,
    yoyo: true,
    duration: 1,
    ease: "linear",
  });

  rfMusic.play();
};

// 로판 모달 닫기
const handleCloseRfModal = () => {
  const btn = document.querySelector(".rf-close-btn");
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    gsap.to(rfModal, {
      opacity: 0,
    });
    rfModal.classList.remove("open");
    rfMusic.pause();
    rfMusic.currentTime = 0;
  });
};

handleCloseRfModal();

// 초대장 열기 (편지봉투 클릭)
const handleClickInvitation = () => {
  const target = document.querySelector(".rf-invitation");
  const letter = document.querySelector(".letter-wrap");
  target.addEventListener("click", (event) => {
    event.stopPropagation();
    letter.classList.add("active");
  });
};

handleClickInvitation();

// 편지 닫기
const handleCloseLetter = () => {
  const letter = document.querySelector(".letter-wrap");
  const btn = document.querySelector(".letter-close-btn");
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("tick");
    letter.classList.remove("active");
  });
};

handleCloseLetter();

// 현대물 열기
const modernModal = document.querySelector("#modernModal");
const mobileVideo = document.querySelector("video.mobile");
const pcVideo = document.querySelector("video.pc");
const modernCloseBtn = document.querySelector(".modern-close-btn");
gsap.set(modernCloseBtn, {
  display: "none",
});
const handleOpenModern = () => {
  gsap.to(modernModal, {
    opacity: 1,
  });

  gsap.set(modernCloseBtn, {
    display: "block",
  });

  mobileVideo.play();
  pcVideo.play();
};

const handleCloseModern = () => {
  mobileVideo.pause();
  mobileVideo.currentTime = 0;
  pcVideo.pause();
  pcVideo.currentTime = 0;

  gsap.to(modernModal, {
    opacity: 0,
  });

  gsap.set(modernCloseBtn, {
    display: "none",
  });
};
