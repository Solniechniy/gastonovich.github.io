import React, { Component } from 'react';
import style from '../main.scss';
import GetCardView from './CardView';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
            sequence:false,
            initial:true,
            touchDirection: '',
            xDown:null,
            yDown:null
        };
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.Shuffle = this.Shuffle.bind(this);

    }
    Shuffle()  {
        let a = this.state.cards;
        this.setState({sequence:false});
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        this.setState({cards:a,
            initial:false
        });
    };

    onTouchMove(e){
        if ( ! this.state.xDown || ! this.state.yDown ) {
            return
        }
        let xUp = e.touches[0].clientX;
        let yUp = e.touches[0].clientY;

        let xDiff = this.state.xDown - xUp;
        let yDiff = this.state.yDown - yUp;
        let direction = null;
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > 0 ) {
                direction = 'left'
            } else {
                direction = 'right'
            }
        }
        else {
            if ( yDiff > 0 ) {
                direction = 'up'
            } else {
                direction = 'down'
            }
        }
        /* reset values */
        this.setState({
            xDown:null,
            yDown:null,
            direction:direction
        });
    }
    onTouchStart(e){
        this.setState({
            xDown:e.touches[0].clientX,
            yDown:e.touches[0].clientY
        });
    }
    onTouchEnd(e){
        if(!this.state.initial) {
            let arr = this.state.cards;
            let a = this.state.cards.indexOf(16);
            switch (this.state.direction) {
                case  'down':
                    if (!(a >= 12 && a <= 15)) {
                        arr[a] = this.state.cards[a + 4];
                        arr[a + 4] = 16;
                    }
                    break;
                case  'up':
                    if (!(a >= 0 && a <= 3)) {
                        arr[a] = this.state.cards[a - 4];
                        arr[a - 4] = 16;
                    }
                    break;
                case  'left':
                    if (a % 4 !== 0) {
                        arr.splice(a - 1, 0, arr.splice(a, 1)[0]);
                    }
                    break;
                case 'right':
                    if ((a + 1) % 4 !== 0) {
                        arr.splice(a + 1, 0, arr.splice(a, 1)[0]);
                    }
                    break;
            }
            let isSequence = false;
            this.setState({cards: arr});
            for (let a = 0; a < this.state.cards.length - 1; a++) {
                if (this.state.cards[a] > this.state.cards[a + 1]) {
                    isSequence = false;
                    break;
                }
                isSequence = true
            }
            if (isSequence) {
                this.setState({sequence: true});
            }
        }
    }

    onKeyDown(event){
        if(!this.state.sequence && !this.state.initial && (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'ArrowRight')  ) {
            event.preventDefault();
            console.log('onKeyDown');
            let arr = this.state.cards;
            let a = this.state.cards.indexOf(16);
            switch(event.key) {
                case  'ArrowUp':
                    if(!(a>=12 && a<=15)) {
                        arr[a] = this.state.cards[a + 4];
                        arr[a + 4] = 16;
                    }
                    break;
                case  'ArrowDown':
                    if(!(a>=0 && a<=3)) {
                        arr[a] = this.state.cards[a - 4];
                        arr[a - 4] = 16;
                    }
                    break;
                case  'ArrowRight':
                    if(a%4 !== 0) {
                        arr.splice(a - 1, 0, arr.splice(a, 1)[0]);
                    }
                    break;
                case 'ArrowLeft':
                    if((a+1)%4 !== 0 ) {
                        arr.splice(a + 1, 0, arr.splice(a, 1)[0]);
                    }
                    break;
            }
            let isSequence=false;
            this.setState({cards: arr});
            for (let a = 0; a < this.state.cards.length - 1; a++) {
                if (this.state.cards[a] > this.state.cards[a + 1]) {
                    isSequence=false;
                    break;
                }
                isSequence = true;
            }
            if(isSequence){
                this.setState({sequence: true});
            }
        }

    }

    render() {
        return (
            <div className="App" onTouchMove={this.onTouchMove} onTouchStart={this.onTouchStart} onKeyDown={this.onKeyDown} onTouchEnd={this.onTouchEnd}>
                {!this.state.sequence ?
                    <div className="gameField">
                        {GetCardView(this.state.cards)}
                        </div>:
                    <section>
                        <h1>Thank you for a game!</h1>
                    </section>
                }
                <button onClick={this.Shuffle}> {!this.state.sequence ? "Shuffle" : "Restart"}</button>
            </div>
        );
    }
}
export default App;


