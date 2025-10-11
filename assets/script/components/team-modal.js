/* ===================================
   TEAM-MODAL.JS - Team Member Modal Component
   Modal popup functionality for team member details
   =================================== */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {

        // Get all staff cards with modal triggers
        const staffCards = document.querySelectorAll('[data-modal]');

        // Get all modals
        const modals = document.querySelectorAll('.team-modal');

        // Get all close buttons
        const closeButtons = document.querySelectorAll('.modal-close');

        // Get all modal overlays
        const overlays = document.querySelectorAll('.modal-overlay');

        // Function to open modal
        function openModal(modalId) {
            const modal = document.getElementById('modal-' + modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        }

        // Function to close modal
        function closeModal(modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Function to close all modals
        function closeAllModals() {
            modals.forEach(modal => {
                closeModal(modal);
            });
        }

        // Add click event to staff cards
        staffCards.forEach(card => {
            card.addEventListener('click', function() {
                const modalId = this.getAttribute('data-modal');
                openModal(modalId);
            });
        });

        // Add click event to close buttons
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const modal = this.closest('.team-modal');
                closeModal(modal);
            });
        });

        // Add click event to overlays (click outside to close)
        overlays.forEach(overlay => {
            overlay.addEventListener('click', function() {
                const modal = this.closest('.team-modal');
                closeModal(modal);
            });
        });

        // Close modal on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeAllModals();
            }
        });

    });

})();
