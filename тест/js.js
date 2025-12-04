const bookingButton = document.getElementById('booking-button');
const popupOverlay = document.getElementById('popup-overlay');
const closePopupButton = document.getElementById('close-popup');

function openPopup() {
    popupOverlay.style.display = 'flex';
}

function closePopup() {
    popupOverlay.style.display = 'none';
}

bookingButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

popupOverlay.addEventListener('click', function(event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

popupOverlay.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });
const bookingButton = document.getElementById('booking-button');
const popupOverlay = document.getElementById('popup-overlay');
const closePopupButton = document.getElementById('close-popup');

function openPopup() {
    popupOverlay.style.display = 'flex';
}

function closePopup() {
    popupOverlay.style.display = 'none';
}

bookingButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

popupOverlay.addEventListener('click', function(event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

popupOverlay.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });
