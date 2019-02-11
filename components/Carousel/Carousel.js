class Carousel {
    constructor(barbastreisand) {
        this.element = barbastreisand
        this.imgs = this.element.querySelectorAll('img')
        this.index = 0
        this.speed = 2000
        this.elevatorId = 0;
        //buttons
        document.querySelector('.right-button')
            .addEventListener('click', () => {
                this.elevatorGoUp()
                this.elevatorSpin(100)
            })
        document.querySelector('.left-button')
            .addEventListener('click', () => {
                this.elevatorGoDown()
                this.elevatorSpin(-100)
            })
        //show current img
        this.elevatorstop()
        //auto transition
        this.elevatorSpin()
    }
    elevatorGoUp() { //increment index
        this.elevatorstop()
        this.index === this.imgs.length - 1 ? this.index = 0 : this.index++
        this.elevatorstop()
    }
    elevatorGoDown() { //decrement index
        this.elevatorstop()
        this.index <= 0 ? this.index = this.imgs.length - 1 : this.index--
        this.elevatorstop()
    }
    elevatorstop() {
        this.imgs[this.index].classList.toggle('img-show')
    }
    elevatorSpin(speedIncrease) {
        clearInterval(this.id)
        if(speedIncrease) this.speed -= speedIncrease
        if(this.speed <= 0) this.speed = 0
        this.id = setInterval(() => this.elevatorGoUp(), this.speed)
    }
}

new Carousel(document.querySelector('.carousel'))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
