import { TweenLite, TweenMax, TimelineMax, Elastic } from "gsap";
import {playTweenmax, pauseTweenmax, reverseTweenmax} from './static/player_func';

console.log('I am player')

document.getElementById("play_btn").addEventListener("click", playTweenmax);
document.getElementById("pause_btn").addEventListener("click", pauseTweenmax);
document.getElementById("reverse_btn").addEventListener("click", reverseTweenmax);
