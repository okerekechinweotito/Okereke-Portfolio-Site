function InitializeReactGA(ReactGA) {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize("UA-185955286-3");
    window.GA_INITIALIZED = true;
  }
}

export default InitializeReactGA;
