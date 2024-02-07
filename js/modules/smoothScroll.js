export function smoothScroll() {
    const lenis = new Lenis({
        duration: .8,
        easing: (t) => Math.min(1, 1.01 - Math.pow(1.1, - 50 * t))
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}