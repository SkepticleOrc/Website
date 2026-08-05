// 1. SELECT THE MODAL LAYOUT PIECES
const modalOverlay = document.getElementById("skep-modal-overlay");
const modalTitleText = document.getElementById("skep-modal-title");
const modalBodyText = document.getElementById("skep-modal-text");
const closeModalButton = document.getElementById("skep-modal-close");

// 2. SELECT THE NAVBAR LINKS
const arkLink = document.getElementById("skep-link-ark");
const nestLink = document.getElementById("skep-link-nest");
const hiveLink = document.getElementById("skep-link-hive");

// 3. WIRE UP THE CLOSE BUTTON TRIGGER FIRST (Safety Placement)
closeModalButton.addEventListener("click", function () {
  // Gracefully switch the visibility back to the hidden layout state
  modalOverlay.className = "skep-modal-hidden";
});

// 4. WIRE UP THE NAVBAR CLICK EVENTS
arkLink.addEventListener("click", function (event) {
  event.preventDefault();
  modalTitleText.innerText = "⚠️ACCESS RESTRICTED⚠️";
  modalBodyText.innerText =
    "Sheena Island operations are currently offline. High-containment biohazard isolation protocol is active. Level 4 Administrator clearance required.";
  modalOverlay.className = "skep-modal-active"; // Switch to an active rendering class
});

nestLink.addEventListener("click", function (event) {
  event.preventDefault();
  modalTitleText.innerText = "🚨SECURITY ALERT🚨";
  modalBodyText.innerText =
    "Underground research zones are undergoing localized sterilization. Main system files are fully encrypted by Overseer protocols. Access denied.";
  modalOverlay.className = "skep-modal-active";
});

hiveLink.addEventListener("click", function (event) {
  event.preventDefault();
  modalTitleText.innerText = "🔒SYSTEM LOCKDOWN🔒";
  modalBodyText.innerText =
    "The Red Queen AI core has initiated complete facility quarantine. Remote login block active. Your unauthorized IP address has been logged.";
  modalOverlay.className = "skep-modal-active";
});

// 5. SELECT THE 9 SPECIFIC MONSTER CLASS BUTTONS
const tyrantBtn = document.querySelector(".skep-button-tyrant-t103");
const hunterBtn = document.querySelector(".skep-button-hunter-alpha");
const cleanerBtn = document.querySelector(".skep-button-under-taker");

const lickerBtn = document.querySelector(".skep-button-licker");
const gmutationBtn = document.querySelector(".skep-button-g-adult");
const ivyBtn = document.querySelector(".skep-button-ivy-plant43");

const nemesisBtn = document.querySelector(".skep-button-nemesis-t-type");
const leechBtn = document.querySelector(".skep-button-leech-man");
const dogBtn = document.querySelector(".skep-button-cerberus");

// 6. WIRE UP THE 9 MONSTER CLICK EVENTS

// --- ARK SECTOR ---
tyrantBtn.addEventListener("click", function () {
  modalTitleText.innerText = "☣️ SUBJECT: TYRANT (T-103)";
  modalBodyText.innerText =
    "The pinnacle of Umbrella's mass-production bio-weapons. Programmed for absolute assassination and recovery tasks. Encased in a heavy power-limiter coat to prevent mutations unless severe damage triggers a Super Tyrant awakening.";
  modalOverlay.className = "skep-modal-active";
});

hunterBtn.addEventListener("click", function () {
  modalTitleText.innerText = "☣️ SUBJECT: HUNTER ALPHA (MA-121)";
  modalBodyText.innerText =
    "A highly successful early combat model created by combining human DNA with reptilian genes using the T-Virus. Characterized by exceptional speed, large claws capable of decapitation, and primitive pack-hunting intelligence.";
  modalOverlay.className = "skep-modal-active";
});

cleanerBtn.addEventListener("click", function () {
  modalTitleText.innerText = "☣️ SUBJECT: UNDER TAKER (CLEANERS)";
  modalBodyText.innerText =
    "Umbrella's specialized, non-humanoid cleanup squad. Engineered to display total obedience, these night-vision equipped bio-weapons are deployed exclusively to destroy evidence, eliminate survivors, and self-destruct upon termination.";
  modalOverlay.className = "skep-modal-active";
});

// --- NEST SECTOR ---
lickerBtn.addEventListener("click", function () {
  modalTitleText.innerText = "☣️ SUBJECT: LICKER MUTATION";
  modalBodyText.innerText =
    "A secondary mutation resulting from a standard zombie host processing the T-Virus. Characterized by total loss of skin tissue, extreme quadrapedal agility, a lethal spear-like tongue, and heightened auditory hunting mechanics.";
  modalOverlay.className = "skep-modal-active";
});

gmutationBtn.addEventListener("click", function () {
  modalTitleText.innerText = "☣️ SUBJECT: G-ADULT MUTATION";
  modalBodyText.innerText =
    "An evolutionary anomaly caused by a host rejecting the G-Virus. The rejection causes violent cellular spasms, splitting the host's body to form a massive asymmetrical organism that regurgitates smaller G-Parasites.";
  modalOverlay.className = "skep-modal-active";
});

ivyBtn.addEventListener("click", function () {
  modalTitleText.innerText = "☣️ SUBJECT: IVY (PLANT 43)";
  modalBodyText.innerText =
    "A mobile, predatory plant species engineered using the T-Virus. Possesses primitive sensory tracking, fires highly acidic digestive enzymes at targets, and can manipulate its vine appendages for close-quarters constriction.";
  modalOverlay.className = "skep-modal-active";
});

// --- THE HIVE SECTOR ---
nemesisBtn.addEventListener("click", function () {
  modalTitleText.innerText = "☣️ SUBJECT: NEMESIS T-TYPE";
  modalBodyText.innerText =
    "An elite Bio-Organic Weapon engineered by Umbrella Europe. Created by implanting a NE-α parasite into a Tyrant host. Retains high intelligence, follows complex hunt directives, and is capable of weapon deployment.";
  modalOverlay.className = "skep-modal-active";
});

leechBtn.addEventListener("click", function () {
  modalTitleText.innerText = "☣️ SUBJECT: LEECH MAN INFESTATION";
  modalBodyText.innerText =
    "An aggressive colony of T-Virus infected leeches operating as a singular collective mind. They mimic a humanoid form around a central host, shifting their shape to pass through tight spaces and aggressively draining the blood of prey.";
  modalOverlay.className = "skep-modal-active";
});

dogBtn.addEventListener("click", function () {
  modalTitleText.innerText = "☣️ SUBJECT: CERBERUS MA-39";
  modalBodyText.innerText =
    "A specialized military canine unit deliberately infected with the T-Virus. Retains extreme agility and speed while displaying heightened aggression, necrotic skin resilience, and relentless hunting stamina.";
  modalOverlay.className = "skep-modal-active";
});