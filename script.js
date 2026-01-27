document.addEventListener('DOMContentLoaded', () => {

    const playBtn = document.getElementById('play-btn');
    const audio = document.getElementById('wedding-music');

    // Master Timeline
    const masterTL = gsap.timeline({ paused: true });

    // Setup Animations
    function initAnimations() {

        // --- Scene 1: Temple Gate & Ganesha ---

        // 0s: Ganesha fades in with a glow
        masterTL.to('.ganesha-idol', {
            duration: 2,
            opacity: 1,
            scale: 1.05,
            ease: "power2.out"
        });

        // 2s: Hold Ganesha
        masterTL.to('.ganesha-idol', {
            duration: 1.5,
            scale: 0.8,
            ease: "sine.inOut"
        });

        // 3.5s: Open Gates
        // Fade out Ganesha
        masterTL.to('.ganesha-idol', { duration: 1, opacity: 0 }, "-=0.5");

        // Move gates apart
        masterTL.to('.gate-left', { duration: 2.5, x: '-100%', ease: "power2.inOut" }, "gateOpen");
        masterTL.to('.gate-right', { duration: 2.5, x: '100%', ease: "power2.inOut" }, "gateOpen");

        // Zoom Camera effect
        masterTL.to('#scene-temple', { duration: 2.5, scale: 1.5, opacity: 0, ease: "power2.inOut" }, "gateOpen");

        // --- Scene 2: Palace Reveal (Background) ---

        // Reveal Palace bg
        masterTL.to('#scene-palace', { duration: 1, opacity: 1 }, "gateOpen+=1.5");

        // Zoom background gently
        gsap.to('.bg-img', { duration: 20, scale: 1.2, ease: "none", repeat: -1, yoyo: true });


        // --- Scene 3: Parents (Anniversary) ---

        // Show Parents Photo (Fade In + Scale Up)
        masterTL.fromTo('#couple-frame',
            { scale: 0.5, opacity: 0, y: 50 },
            { duration: 2, scale: 1.2, opacity: 1, y: 0, ease: "power3.out" }
            , "-=1.0");

        // Move photo down and shrink
        masterTL.to('#couple-frame', {
            duration: 1.5,
            scale: 0.8,
            y: 225,
            ease: "power2.inOut",
            delay: 1.5
        });

        // Show Parents Details
        masterTL.fromTo('#wedding-details',
            { y: -50, opacity: 0 },
            { duration: 1.5, y: -150, opacity: 1, ease: "power2.out" }
            , "-=0.5");

        // Hold Parents Section then Fade Out
        masterTL.to(['#wedding-details', '#couple-frame'], {
            duration: 1,
            opacity: 0,
            delay: 6
        });


        // --- Scene 4: Daughter (Birthday) ---

        // Show Daughter Photo
        masterTL.fromTo('#daughter-frame',
            { scale: 0.5, opacity: 0, y: 50 },
            { duration: 2, scale: 1.2, opacity: 1, y: 0, ease: "power3.out" }
        );

        // Move photo down and shrink
        masterTL.to('#daughter-frame', {
            duration: 1.5,
            scale: 0.8,
            y: 200,
            ease: "power2.inOut",
            delay: 1.5
        });

        // Show Daughter Details
        masterTL.fromTo('#daughter-details',
            { y: -50, opacity: 0 },
            { duration: 1.5, y: -150, opacity: 1, ease: "power2.out" }
            , "-=0.5");

        // Hold Daughter Section then Fade Out
        masterTL.to(['#daughter-details', '#daughter-frame'], {
            duration: 1,
            opacity: 0,
            delay: 6
        });


        // --- Scene 5: Timeline / Schedule ---

        masterTL.fromTo('#timeline-section',
            { y: 50, opacity: 0 },
            { duration: 1.5, y: 0, opacity: 1, ease: "power2.out" }
            , "-=0.5");

        // Hold Timeline Section
        masterTL.to('#timeline-section', {
            duration: 1,
            opacity: 0,
            delay: 6
        });


        // --- Scene 6: Emotional Message ---

        masterTL.fromTo('#message-overlay',
            { scale: 0.9, opacity: 0 },
            { duration: 2, scale: 1, opacity: 1, ease: "power2.out" }
        );

        masterTL.to('#message-overlay', { duration: 1, opacity: 0, delay: 4 });

        // --- Scene 6: Personal Invite ---

        masterTL.fromTo('#personal-invite',
            { y: 30, opacity: 0 },
            { duration: 1.5, y: 0, opacity: 1, ease: "power2.out" }
        );

        masterTL.to('#personal-invite', { duration: 1, opacity: 0, delay: 4 });

        // --- Scene 7: Guest Card ---

        masterTL.fromTo('#guest-card',
            { rotationX: 90, opacity: 0 },
            { duration: 1.5, rotationX: 0, opacity: 1, ease: "back.out(1.7)" }
        );

        masterTL.to('#guest-card', { duration: 1, opacity: 0, delay: 5 });

        // --- Scene 8: Thank You ---

        // Fade out Palace
        masterTL.to('#scene-palace', { duration: 1, opacity: 0 });

        // Fade in End Screen
        masterTL.to('#scene-end', { duration: 2, opacity: 1 });

        masterTL.fromTo('.end-content',
            { scale: 0.8, opacity: 0 },
            { duration: 2, scale: 1, opacity: 1, ease: "power3.out" }
            , "-=1.5");
    }

    // User Interaction to Start
    playBtn.addEventListener('click', () => {
        // Hide button
        gsap.to('.audio-control', { duration: 0.5, opacity: 0, pointerEvents: 'none' });

        // Play Music
        audio.play().catch(e => console.log("Audio play failed", e));

        // Start Animation
        initAnimations();
        masterTL.play();
    });

});
