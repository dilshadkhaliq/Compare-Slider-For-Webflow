:root {
  --initial-reveal: 50%;
}
.compare-slider {
  display: inline-block;
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
}
.compare-slider *,
.compare-slider:after,
.compare-slider :after,
.compare-slider:before,
.compare-slider :before {
  box-sizing: border-box;
}
.compare-slider img,
.compare-slider svg {
  vertical-align: bottom;
}
.compare-slider > * {
  height: 100%;
}
.compare-slider > img {
  height: auto;
  max-width: 100%;
  width: 100%;
}
.compare-reveal {
  left: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  right: 100% - var(--initial-reveal);
  top: 0;
  transition: opacity 0.35s;
  z-index: 1;
}
.compare-reveal > :first-child {
  height: 100%;
  max-width: none;
  width: 100%*100%/var(--initial-reveal);
}
.compare-reveal > img:first-child {
  height: auto;
}
.compare-range {
  -moz-appearance: none;
  -ms-touch-action: auto;
  -webkit-appearance: slider-horizontal !important;
  bottom: 0;
  cursor: pointer;
  height: 100%;
  left: -1px;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  touch-action: auto;
  width: calc(100% + 2px);
  z-index: 2;
  cursor: grab;
}
.compare-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 300vh;
  
}
.compare-range::-moz-range-thumb {
  -webkit-appearance: none;
  height: 300vh;
}
.compare-range::-ms-tooltip {
  display: none;
}
.compare-handle {
  background: hsla(0, 0%, 100%, 0.5);
  border-radius: 50%;
  box-shadow: 0 0 6px transparent;
  color: #000;
  height: 48px;
  left: 50%;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: background 0.3s, box-shadow 0.3s, opacity 0.5s 0.25s;
  width: 48px;
  z-index: 2;
}
.compare-handle:after,
.compare-handle:before {
  border-left: 2px solid;
  border-top: 2px solid;
  content: "";
  height: 10px;
  position: absolute;
  top: 50%;
  transform-origin: 0 0;
  width: 10px;
}
.compare-handle:before {
  left: 10px;
  transform: rotate(-45deg);
}
.compare-handle:after {
  right: 0;
  transform: rotate(135deg);
}
.compare-range:focus ~ .compare-handle {
  background: hsla(0, 0%, 100%, 0.85);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
}
.compare-reveal[data-compare-label]:after,
.compare-slider[data-compare-label]:after {
  background: hsla(0, 0%, 100%, 0.75);
  border-radius: 0.125rem;
  content: attr(data-compare-label);
  line-height: 1;
  padding: 0.5rem;
  position: absolute;
  top: 1.5rem;
}
.compare-slider[data-compare-label]:after {
  right: 1.5rem;
}
.compare-reveal[data-compare-label]:after {
  left: 1.5rem;
}
.compare-reveal[data-compare-label=""]:after,
.compare-slider[data-compare-label=""]:after {
  content: none;
}
.compare-ready .compare-handle,
.compare-ready .compare-reveal {
  opacity: 1;
}
[compare-slider="drag"]{
  pointer-events: none;
  opacity: 0;
  z-index: 2;
}
.compare-slider[data-compare-label]:after,
.compare-reveal[data-compare-label]:after {
  display: none !important;
}
.compare-ready {
  .compare-reveal, [compare-slider="drag"] {
    opacity: 1;
  }
}
