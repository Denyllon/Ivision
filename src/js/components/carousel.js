var carousel = {
    init: function() {
        this.carouElem = document.getElementById('carousel-wrapper');
        this.carouPrev = document.getElementById('carousel-prev-button');
        this.carouNext = document.getElementById('carousel-next-button');
        this.bindEvents();
    },

    bindEvents: function() {
        document.onmousemove = this.carouselAutoslide.bind(this);
        window.onresize = this.carouselToSlider.bind(this);
        this.carouPrev.onclick = this.prevButtonAction.bind(this);
        this.carouNext.onclick = this.nextButtonAction.bind(this);
    },

    carouselAutoslide: function() {
        this.clientWidth = this.carouElem.clientWidth;

        if(this.clientWidth > 800) {

            this.carouElem.onmousemove = function(e) {        
                this.mousePosition = e.pageX;
                this.scrollWidth = this.carouElem.scrollWidth;
                this.carouElem.scrollLeft = (this.scrollWidth - this.clientWidth) / (this.clientWidth / this.mousePosition);
            }.bind(this);

        }
    },

    carouselToSlider: function() {
        if((window.innerWidth < 816) ) {
            this.carouElem.onmousemove = "";
            this.carouElem.scrollLeft = 0;
        }
    },

    prevButtonAction: function() {
        this.carouElem.scrollLeft -= 240;
    },

    nextButtonAction: function() {
        this.carouElem.scrollLeft += 240;
    },

};

export default carousel;