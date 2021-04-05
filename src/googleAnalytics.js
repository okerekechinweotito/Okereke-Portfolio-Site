function InitializeReactGA(ReactGA) {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize("G-BF9YX18SHE");
    window.GA_INITIALIZED = true;
  }
}

export default InitializeReactGA;
