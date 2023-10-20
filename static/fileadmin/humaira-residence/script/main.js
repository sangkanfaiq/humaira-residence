// ---------------------------------------------------------------------------------------------------------------------
// Import
// ---------------------------------------------------------------------------------------------------------------------
let script_list = [
    // '/js/ScrollMagic.min.js',
    // '/js/debug.addIndicators.js',
    '/js/TweenMax.min.js',
];

for (const script of script_list) {
    let scr = document.createElement('script');
    scr.src = script;
    document.head.appendChild(scr);
}
// ---------------------------------------------------------------------------------------------------------------------
// Scroll Magic Init
// ---------------------------------------------------------------------------------------------------------------------
let controller00 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.0,
        // addIndicators: true,
    }
});
let controller01 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.1,
        // addIndicators: true,
    }
});
let controller02 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.2,
        // addIndicators: true,
    }
});
let controller03 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.3,
        // addIndicators: true,
    }
});
let controller04 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.4,
        // addIndicators: true,
    }
});
let controller05 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.5,
        // addIndicators: true,
    }
});
let controller06 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.6,
        // addIndicators: true,
    }
});
let controller07 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.7,
        // addIndicators: true,
    }
});
let controller08 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.8,
        // addIndicators: true,
    }
});
let controller09 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.9,
        // addIndicators: true,
    }
});
let controller10 = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 1,
        // addIndicators: true,
    }
});

// ---------------------------------------------------------------------------------------------------------------------
// Let
// ---------------------------------------------------------------------------------------------------------------------
let duration_slide = 2;
let duration_delay = 1;
let _animation_position = 0;
let _debug_animation_position = false;
const deviceType = is_device();
let font_size = 10;

// ---------------------------------------------------------------------------------------------------------------------
// fontSize
// ---------------------------------------------------------------------------------------------------------------------
window.addEventListener('resize', () => {
    fontSize();
});
function fontSize() {
    const width = $(window).width();
    const height = $(window).height();
    // Get vmin
    let view_min = height;
    let subtraction = 0;
    if (width <= height) {
        view_min = width;
    }
    if (view_min > 1080) {
        view_min = 1080;
    }
    //
    const _subtraction = 21;
    if (height >= 750 && width < 1920 && deviceType === 'pc') {
        subtraction = (19.2 - (width / 100)) * _subtraction;
    }

    view_min -= subtraction;
    font_size = view_min / 100;
    console.log("font_size: ", font_size);
    document.documentElement.style.setProperty("--js-view-min", font_size + "px");
}
fontSize();

// ----------------------------------------
// Stop Scroll
// ----------------------------------------
let stop_keyboard_mouse = false;

function disableScroll(duration = 0) {
    console.log('disableScroll: ', duration);
    stop_keyboard_mouse = true;
    if (duration !== 0) {
        setTimeout(() => {
            console.log('disableScroll: bypass');
            stop_keyboard_mouse = false;
        }, duration);
    }
}
document.addEventListener("mousemove", function(event) {
    if (stop_keyboard_mouse) {
        event.stopPropagation();
        event.preventDefault();
    } else {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
},{ passive: false });
document.addEventListener("keydown", function(event) {
    if (stop_keyboard_mouse) {
        event.stopPropagation();
    }
    event.preventDefault();
},{ passive: false });
document.addEventListener("mousewheel", function(event) {
    if (stop_keyboard_mouse) {
        event.stopPropagation();
        event.preventDefault();
    }
}, { passive: false });

// ----------------------------------------
// Stop Touch
// ----------------------------------------
let isScrollingTouchDisabled = false;
let lastScrollTouchPosition = 0;

function disableTouch(stopDuration) {
    disableScroll(stopDuration)
    stopSTouch(stopDuration);
}
function disableScrollingTouch() {
    isScrollingTouchDisabled = true;
}
function enableScrollingTouch() {
    isScrollingTouchDisabled = false;
}
function stopSTouch(duration) {
    disableScrollingTouch();
    setTimeout(enableScrollingTouch, duration);
}

window.addEventListener('scroll', function() {
    if (isScrollingTouchDisabled) {
        window.scrollTo(0, lastScrollTouchPosition); // Menggulirkan halaman ke posisi semula
    } else {
        lastScrollTouchPosition = window.pageYOffset; // Menyimpan posisi scroll saat ini
    }
},{ passive: false });
document.body.addEventListener('touchmove', function(event) {
    if (isScrollingTouchDisabled) {
        event.preventDefault(); // Mencegah efek momentum scrolling saat efek stop scroll aktif
        window.scrollTo(0, lastScrollTouchPosition); // Menggulirkan halaman ke posisi semula
    }
}, { passive: false });
document.body.addEventListener('touchend', function(event) {
    if (isScrollingTouchDisabled) {
        event.preventDefault(); // Mencegah efek momentum scrolling saat efek stop scroll aktif
    }
}, { passive: false });


// ---------------------------------------------------------------------------------------------------------------------
// utils
// ---------------------------------------------------------------------------------------------------------------------
function animation_position_reset(isDebug= false) {
    _animation_position = 0;
    _debug_animation_position = isDebug;
    if (_debug_animation_position) {
        console.log('------------------------');
    }
}
function animation_position(counter = 0) {
    _animation_position += counter;
    if (_debug_animation_position) {
        console.log('_animation_position: ', _animation_position);
    }
    return _animation_position;
}
function animation_duration(ratio = 10) {
    // animation_position / ratio = 100%
    const num = animation_position();
    animation_position_reset();
    console.log('animation_duration: ', num / ratio * getHight());
    return num / ratio * getHight();
}

function getWidth() {
    return window.innerWidth;
}
function getHight() {
    return window.innerHeight;
}
function is_device() {
    if (getWidth() > 720) {
        return 'pc';
    }
    return 'mb';
}
function refreshPage() {
    // ! debug
    console.log('refreshPage');
    // ! end debug
    location.reload();
}

function video_get(id) {
    return document.getElementById(id);
}
function video_is_ready(video) {
    return video.readyState === 4;
}
function video_pause(video) {
    if (!video_is_ready) return;
    video.pause();
}
function video_reset(video) {
    if (!video_is_ready) return;
    video.currentTime = 0;
    video_pause(video);
}
function video_play(video, is_reset = false) {
    if (!video_is_ready) return;
    if (is_reset === true) {
        video_reset(video);
    }
    video.play();
}






// ---------------------------------------------------------------------------------------------------------------------
// Setup Event
// ---------------------------------------------------------------------------------------------------------------------
window.addEventListener('resize', function() {
    if (is_device() !== deviceType) {
        refreshPage();
    }
},{ passive: false });

// ---------------------------------------------------------------------------------------------------------------------
// Animation
// ---------------------------------------------------------------------------------------------------------------------
if (deviceType === 'pc') {}

if (deviceType === 'mb') {}

