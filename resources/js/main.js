$(document).ready(function () {

    // Responsive html font size

    //   onload problem solving
    let iw = window.innerWidth;
    let rootScreenWidth = 1366;
    let rootFontPercentage = 44.455;

    if (iw <= 1366) {
        $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);

    } else {
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        $('#my_html').attr("style", `font-size:${currentFontSize}%`);
    }



    //   or resizing problem solving

    $(window).resize(function () {
        let iw = window.innerWidth;
        let rootScreenWidth = 1366;
        let rootFontPercentage = 44.455;

        if (iw <= 1366) {
            $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);

        } else {
            let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
            $('#my_html').attr("style", `font-size:${currentFontSize}%`);
        }
    })

    //   or resizing problem solving

    // $(window).onload(function () {
    //     let iw = window.innerWidth;
    //     let rootScreenWidth = 1366;
    //     let rootFontPercentage = 44.455;

    //     if (iw <= 1366) {
    //         $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);

    //     } else {
    //         let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
    //         $('#my_html').attr("style", `font-size:${currentFontSize}%`);
    //     }
    // })


    // Responsive html font size end



    const simpleOverViewWrapper = document.getElementById("simpleOverViewWrapper")

    window.onscroll = () => {

        let simpleWrapperHeight = (simpleOverViewWrapper.offsetHeight);
        let Screen_Height = window.innerHeight

        let topPos = simpleOverViewWrapper.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY > ((Screen_Height + simpleWrapperHeight))) {
            console.log(topPos);
            simpleOverViewWrapper.classList.add("animate")
        }
    }






})