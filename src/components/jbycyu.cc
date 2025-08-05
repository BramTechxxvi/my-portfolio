
.onlineDot::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 200, 83, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 1.6s ease-in-out infinite;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}

